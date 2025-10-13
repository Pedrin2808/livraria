import * as repo from '../repository/LivrosRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/livros', async (req, resp) => {
  let registros = await repo.listarLivros();
  resp.send(registros);
})


endpoints.get('/livros/filtro', async (req, resp) => {
  let titulo = req.query.nome;
  let registros = await repo.filtrarPorTitulo(titulo);
  resp.send(registros);
})


endpoints.get('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await repo.consultarLivro(id);
  resp.send(registros);
})



endpoints.post('/livro', async (req, resp) => {
  let novoLivro = req.body;

  let id = await repo.inserirLivro(novoLivro);
  resp.send({ novoId: id });
})


endpoints.put('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;

  await repo.alterarLivro(id, novosDados);
  resp.send();
})


endpoints.delete('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);

  await repo.removerLivro(id);
  resp.send();
})




export default endpoints;