import {Container} from 'inversify';
import cors from 'cors';
import morgan from 'morgan';
import {InversifyExpressServer} from "inversify-express-utils";
import bodyParser from "body-parser";
import './modules/user/infrastructure/controllers/user.controller';
import {UserContainer} from "./modules/user/infrastructure/user.container";
import {Middlewares} from "./core/middlewares/middlewares";


let container = new Container();

const userContainer = new UserContainer(container);
container = userContainer.binding();


let server = new InversifyExpressServer(container, null, {rootPath: "/api/v1"});
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors())
});


let app = server.build();

const middlewares = new Middlewares(app);

app = middlewares.getApp();


export default app;