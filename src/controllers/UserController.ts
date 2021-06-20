//nosso Req, Res, nao sabem o tipo de seus parametros por que aqui em nenhum momento eu uso express [app.get aap.pos]
//temos que pegar de dentro de express as definicao de tiipo de Resquest e Response
import {Request, Response} from 'express'; 
import EmailService from '../services/EmailService';
const users = [
{name: "Weverson ",email: "weverson2020@gmail.com"}
];

export default {
    async indexe(req:Request, res:Response){
        return res.json(users);
    },


        async create(req:Request, res:Response){
            const emailServices = new EmailService();

            emailServices.sendEmail({
                to:  {
                    name: "Luann", 
                    email: "luann33@gmail.com"
                },
                message: {
                    subeject: "Bem vindo ao sistema", 
                    body: "Bem vindo"
                },
            });
            res.json({
                message: "Email enviado com sucesso!"
            });
        },
};