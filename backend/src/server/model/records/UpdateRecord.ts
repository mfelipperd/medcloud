import { IRecord } from '../../controller/records/Create';
import { Record } from '../entity/Records';

export const updateById = async (id:number, data: IRecord):Promise<IRecord | null> => {

    const record = await Record.findOneBy({id: id});
    if (!record || record === null) return null;

    record.name = data.name;
    record.email = data.email;
    record.adress = data.email;
    record.birthDate = data.birthDate;
    
    record.save();

    return record;
};