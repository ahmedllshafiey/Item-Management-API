import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Item } from '../models/Item';

dotenv.config();

export const postgres = new Sequelize({
    database: process.env.DB as string,
    username: process.env.USER as string,
    password: process.env.PASS as string,
    host: process.env.HOST as string,
    port: process.env.PORT ? parseInt(process.env.PORT) : 5432,
    dialect: 'postgres',
    logging: false,
    models: [Item],
});

export class Database {
    async connect_db() {
        try {
            await postgres.authenticate();
            console.log('Connection has been established successfully.');
            await postgres.sync();
            console.log('All models were synchronized successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}