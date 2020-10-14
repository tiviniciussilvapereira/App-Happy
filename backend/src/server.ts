import express from 'express'; 
import path from 'path'; 
import cors from 'cors'; 

import 'express-async-errors';

import './database/connection';

import routes from './routes'; 
import errorHandler from './errors/handler'; 

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes); 
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler); 

app.listen(3333); 






//Rota = conjunto
//Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE

//Get = Buscar informação (Lista, Item)
//Post = Criando informação 
//Put = Editando uma informação 
//Delete = Deletando uma informação

//Parametros
//Query Params: http://localhost:3333/users?search=vinicius
//Route Params: http://localhost:3333/users/1 (Identificar um recurso com dois pontos : e id)
//Body: http://localhost:3333/users/1 (Informações mais complexas)

//Modos de lidar com o backend
// Driver nativo
//Executa as queires do bd direto pelo node, mas nao oferece abstração. É necessario escrever a query igual dentro do banco de dados. Exemplo: 
// sqlite3.query('SELECT * FROM users') ... 


//Query builder (Knes.js)
//Escreve as querys com javascript, sintaxe mais amigavel para escrever as queries do banco
//knex('users').select('*').where('name','Vinicius')
//Depois ele converte na sintaxe comum de banco


//ORM - Object Relational Mapping
//Maior abstração. Tem uma classe do js que simboliza uma tabela. 
//Cada retorno do bd é uma instancia da classe. Derivado da classe. 
//users
//User
//Relacionamento de objetos para cada registro da tabela
//3 usuarios = User User User 
