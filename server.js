// Importa o módulo Express, que é a base para criar aplicações web Node.js
import express from "express";

// Importa o módulo de rotas, que define as diferentes URLs que a aplicação pode atender
import routes from "./src/routes/postsRoutes.js";

// Cria uma nova instância do Express, que será o nosso servidor web
const app = express();

app.use(express.static("uploads"));

// Carrega as rotas definidas no arquivo postsRoutes.js e as associa à aplicação
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});


