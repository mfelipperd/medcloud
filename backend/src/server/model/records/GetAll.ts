import { IRecord } from '../../controller/records/Create';
import { Record } from '../entity/Records';

export const getAll = async ():Promise<IRecord[] | undefined> => {
    try {
        const records = await Record.find();
        if(!records || records.length === 0) return [];
        return records;
    }catch(err) {
        console.log(err);
    }
};