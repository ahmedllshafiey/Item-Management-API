import express from 'express';
import { Routes } from './routes/Routes';
import { Database } from './database/database';

class App {
    public app: express.Application;
    private routes: Routes;
    private db: Database;

    constructor() {
        this.app = express();
        this.routes = new Routes();
        this.db = new Database();
        this.middlewares();
        this.routesSetup();
        this.server();
        this.db.connect_db();
    }

    private middlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routesSetup(): void {
        this.app.use('/', this.routes.getRouter());
    }

    private server(): void {
        this.app.listen(8000, () => {
            console.log('Server started on http://127.0.0.1:8000');
        });
    }
}

new App();