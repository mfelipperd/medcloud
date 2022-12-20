import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Admin } from '../model/entity/Admins';
import { Record } from '../model/entity/Records';
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: 5441,
    username: process.env.USERNAME,
    password: process.env.USERNAME,
    database: process.env.USERNAME,
    synchronize: true,
    logging: false,
    entities: [Record, Admin],
});