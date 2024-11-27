// Importa o cliente MongoDB para interagir com o banco de dados
import { MongoClient } from 'mongodb';

// Define uma função assíncrona para conectar ao banco de dados
export default async function conectarAoBanco(stringConexao) {
    // Declara uma variável para armazenar o cliente MongoDB
    let mongoClient;

    // Inicia um bloco try-catch para tratar possíveis erros durante a conexão
    try {
        // Cria uma nova instância do cliente MongoDB, passando a string de conexão
        mongoClient = new MongoClient(stringConexao);
        // Exibe uma mensagem no console indicando que a conexão está sendo estabelecida
        console.log('Conectando ao cluster do banco de dados...');
        // Tenta estabelecer a conexão com o banco de dados
        await mongoClient.connect();
        // Exibe uma mensagem de sucesso caso a conexão seja estabelecida
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        // Retorna o cliente MongoDB para ser utilizado em outras partes do código
        return mongoClient;
    } catch (erro) {
        // Exibe uma mensagem de erro no console caso ocorra algum problema
        console.error('Falha na conexão com o banco!', erro);
        // Encerra a execução do processo em caso de erro crítico
        process.exit();
    }
}
