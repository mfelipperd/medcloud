import { server } from './server/Server';
import 'reflect-metadata';
import { AppDataSource } from './server/database/data-source';

async function main() {
    try{

        await AppDataSource.initialize();
        console.log('Db Connected!');
        server.listen(process.env.PORT || 3333);
        console.log('App runing on port', 3333);

    } catch (error) {
        console.error(error);
    }
}

main();