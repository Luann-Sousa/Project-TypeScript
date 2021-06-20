import {Router} from 'express';
import ControllerUser from './controllers/UserController';

const routes = Router();

routes.get("/", ControllerUser.indexe);
routes.get("/create", ControllerUser.create);


export default routes;