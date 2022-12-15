import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Admin } from '../model/entity/Admins';
import { Record } from '../model/entity/Records';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5441,
    username: 'test',
    password: 'test',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: [Record, Admin],
});