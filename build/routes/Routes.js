"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const Controller_1 = require("../controllers/Controller");
class Routes {
    constructor() {
        this.router = express_1.default.Router();
        this.ctlr = new Controller_1.Controller();
        this.routes();
    }
    routes() {
        this.router.get("/elements", this.ctlr.get_all_elements);
        this.router.get("/element/:id", this.ctlr.get_one_element);
        this.router.post("/element", this.ctlr.post_one_element);
        this.router.delete("/element/:id", this.ctlr.delete_one_element);
        this.router.patch("/element/:id", this.ctlr.patch_one_element);
    }
    getRouter() {
        return this.router;
    }
}
exports.Routes = Routes;
