import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: "items",
})
export class Item extends Model {
    public static ITEM_TABLE_NAME = "items";
    public static ITEM_ID = "id";
    public static ITEM_NAME = "name";
    public static ITEM_USAGE = "usage";

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        field: Item.ITEM_ID,
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        field: Item.ITEM_NAME,
    })
    name!: string;

    @Column({
        type: DataType.STRING(250),
        field: Item.ITEM_USAGE,
    })
    usage!: string;
}