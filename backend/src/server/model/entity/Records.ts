import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';
import 'reflect-metadata';

@Entity()
export class Record extends BaseEntity{

    @PrimaryGeneratedColumn()
        id: number;
    @Column()
        name: string;
    @Column()
        email: string;
    @Column()
        adress: string;
    @Column({ type: 'timestamptz' })
        birthDate: Date;
    @CreateDateColumn()
        createdAt: Date;
}