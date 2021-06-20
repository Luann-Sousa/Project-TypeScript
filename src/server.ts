import express from 'express'; //trazendo express
import routes from './routes';
const app = express();//jogando a funcao express em app

app.use(routes)

app.listen(3333, ()=> console.log("Start is runing"));//iniciando nosso servidor