import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';
import 'reflect-metadata';

@Entity()
export class Admin extends BaseEntity{
    @PrimaryGeneratedColumn()
        id: number;
    @Column()
        name: string;
    @Column()
        adress: string;
    @Column()
        email: string;
    @Column({ unique: true })
        username: string;
    @Column()
        password: string;
    @CreateDateColumn()
        createdAt: Date;
}