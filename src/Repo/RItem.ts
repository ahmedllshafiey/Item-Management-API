import { Item } from "../models/Item";

class RItem {
    async get_all_items(): Promise<Item[] | undefined> {
        try {
            return await Item.findAll();
        } catch (err) {
            console.error(`Error in retrieving items: ${err}`);
        }
    }

    async get_item(itemId: number): Promise<Item | undefined> {
        try {
            const item = await Item.findOne({ where: { id: itemId } });
            if (!item) {
                throw new Error("Item not found");
            }
            return item;
        } catch (err) {
            console.error(`Error in retrieving item: ${err}`);
        }
    }

    async add_item(item: Item): Promise<Item | undefined> {
        try {
            return await Item.create({ name: item.name, usage: item.usage });
        } catch (err) {
            console.error(`Error in adding item: ${err}`);
        }
    }

    async delete_item(itemId: number): Promise<void> {
        try {
            const item = await Item.findOne({ where: { id: itemId } });
            if (!item) {
                throw new Error("Item not found");
            }
            await item.destroy();
        } catch (err) {
            console.error(`Error in deleting item: ${err}`);
        }
    }

    async update_item(item: Item): Promise<void> {
        try {
            const new_item = await Item.findOne({ where: { id: item.id } });
            if (!new_item) {
                throw new Error("Item not found");
            }
            new_item.name = item.name;
            new_item.usage = item.usage;
            await new_item.save();
        } catch (err) {
            console.error(`Error in updating item: ${err}`);
        }
    }
}

export default new RItem();