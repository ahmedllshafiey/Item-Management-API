"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    get_all_elements(req, res) {
        res.status(200).send("GET Request: Get all elements");
    }
    get_one_element(req, res) {
        res.status(200).send("GET Request: Get one element");
    }
    post_one_element(req, res) {
        res.status(200).send("POST Request: Post one element");
    }
    delete_one_element(req, res) {
        res.status(200).send("DELETE Request: Delete one element");
    }
    patch_one_element(req, res) {
        res.status(200).send("PATCH Request: Patch one element");
    }
}
exports.Controller = Controller;
