"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("../routes/Routes");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes = new Routes_1.Routes();
        this.middlewares();
        this.routesSetup();
        this.server();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routesSetup() {
        this.app.use('/', this.routes.getRouter());
    }
    server() {
        this.app.listen(8000, () => {
            console.log('Server started on http://127.0.01:8000');
        });
    }
}
new App();
