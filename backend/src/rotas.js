import loginController from "../controller/LoginController.js";
import livroController from "../controller/LivrosController.js";

export function adicionarRotas(api){
    api.use(loginController)
    api.use(livroController)
}