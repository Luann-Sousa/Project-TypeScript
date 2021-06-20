interface IMailTo{
    name: string;
    email: string;
};

interface IMailMessage{
    subeject: string;
    body: string;
    attachment?:string[];
};

//vamos pegas todos os dados e criar um objeto so
interface IMessageDTO{
    to: IMailTo;
    message:IMailMessage
};
//DATA TRASFER OBEJECT

class EmailService{

    sendEmail({to, message}: IMessageDTO){
        console.log(`Email Enviado  para ${to.name}: ${message.subeject}`);
    }
};

export default EmailService; //exportando nossa class