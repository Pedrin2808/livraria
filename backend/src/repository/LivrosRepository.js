import { conection } from "./conection.js";


export async function listarLivros() {
  const comando = `
    SELECT *
      FROM livros
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function consultarLivro(id) {
  const comando = `
    SELECT *
      FROM livro
     WHERE id = ? 
  `

  const [registros] = await conection.query(comando, [id])
  return registros[0];
}


export async function filtrarPorTitulo(nome) {
  const comando = `
    SELECT *
      FROM livros
     WHERE titulo like ? 
  `

  const [registros] = await conection.query(comando, ['%'+titulo+'%'])
  return registros;
}


export async function inserirLivro(novoLivro) {
  const comando = `
    INSERT INTO livro (imagem, titulo, autor)
               values (?, ?, ?);
  `

  const [info] = await conection.query(comando, [
    novoLivro.imagem,
    novoLivro.titulo,
    novoLivro.autor
  ])
  return info.insertId;
}


export async function alterarLivro(id, novosDados) {
  const comando = `
    UPDATE livros
       SET imagem = ?,
           titulo = ?,
           autor = ?
     WHERE id = ?
  `

  const [info] = await conection.query(comando, [
    novosDados.imagem,
    novosDados.titulo,
    novosDados.autor,
    id
  ])
}


export async function removerLivro(id) {
  const comando = `
    DELETE FROM livros
          WHERE id = ?
  `

  const [info] = await conection.query(comando, [id]);
}