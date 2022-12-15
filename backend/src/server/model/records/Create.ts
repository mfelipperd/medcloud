import { IRecord } from '../../controller/records/Create';
import { Record } from '../entity/Records';

export const createUser = async (data: IRecord) => {
    try{
        const record = new Record();
        record.name = data.name;
        record.email = data.email;
        record.adress = data.adress;
        record.birthDate = data.birthDate;

        await record.save();
        return record;
    } catch(err) {
        console.log(err);
    }
};