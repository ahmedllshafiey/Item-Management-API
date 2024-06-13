import express, { Router } from 'express';
import { IRoutes } from './IRoutes';
import { Controller } from '../controllers/Controller';

export class Routes implements IRoutes {
    private router: Router;
    private ctlr: Controller;

    constructor() {
        this.router = express.Router();
        this.ctlr = new Controller();
        this.routes();
    }

    routes(): void {
        this.router.get("/elements", this.ctlr.get_all_elements);
        this.router.get("/element/:id", this.ctlr.get_one_element);
        this.router.post("/element", this.ctlr.post_one_element);
        this.router.delete("/element/:id", this.ctlr.delete_one_element);
        this.router.patch("/element/:id", this.ctlr.patch_one_element);
    }

    public getRouter(): Router {
        return this.router;
    }
}