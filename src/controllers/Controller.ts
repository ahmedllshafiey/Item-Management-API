import { Request, Response } from 'express';
import RItem from '../Repo/RItem';
import { Item } from '../models/Item';

export class Controller {
    async get_all_elements(req: Request, res: Response): Promise<void> {
        try {
            const items = await RItem.get_all_items();
            res.status(200).json({
                status: "OK",
                message: "Items successfully retrieved",
                data: items,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: `Failed to retrieve items: ${err}`,
            });
        }
    }

    async get_one_element(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        try {
            const item = await RItem.get_item(id);
            
            res.status(200).json({
                status: "OK",
                message: "Item successfully retrieved",
                data: item,
            });
        } catch (err) {
            res.status(404).json({
                status: "Error",
                message: `Item not found: ${err}`,
            });
        }
    }

    async post_one_element(req: Request, res: Response): Promise<void> {
        try {
            const newItem = new Item();
            newItem.name = req.body.name;
            newItem.usage = req.body.usage;

            const createdItem = await RItem.add_item(newItem);
            res.status(201).json({
                status: "OK",
                message: "Item successfully created",
                data: createdItem,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: `Failed to create item: ${err}`,
            });
        }
    }

    async delete_one_element(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        try {
            await RItem.delete_item(id);
            res.status(200).json({
                status: "OK",
                message: "Item successfully deleted",
            });
        } catch (err) {
            res.status(404).json({
                status: "Error",
                message: `Item not deleted: ${err}`,
            });
        }
    }

    async patch_one_element(req: Request, res: Response): Promise<void> {
        try {
            const id = req.body.id;
            const new_item = new Item();
            new_item.id = id; // Make sure to set the ID
            new_item.name = req.body.name;
            new_item.usage = req.body.usage;

            await RItem.update_item(new_item);

            res.status(200).json({
                status: "OK",
                message: "Item successfully updated",
            });
        } catch (err) {
            res.status(404).json({
                status: "Error",
                message: `Item not updated: ${err}`,
            });
        }
    }
}