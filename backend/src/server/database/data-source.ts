import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Record } from '../model/entity/Records';
import 'dotenv/config';

const host = 'medcloud.ccax18yz2tko.sa-east-1.rds.amazonaws.com';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: host,//process.env.HOST,
    port: 5441,
    username: 'medcloud', //process.env.USERNAME,
    password: 'medcloud', //process.env.USERNAME,
    database: 'medcloud', //process.env.USERNAME,
    synchronize: true,
    logging: false,
    entities: [Record],
});