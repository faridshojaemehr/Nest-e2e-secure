import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @Column()
    price: number;

    constructor(
        id: number,
        title: string,
        desc: string,
        price: number
    ) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.price = price;
    }
}