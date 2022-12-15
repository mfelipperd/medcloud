import { IRecord } from '../../controller/records/Create';
import { Record } from '../entity/Records';

export const deleteById = async (id:number):Promise<IRecord | null> => {
    
    const record = await Record.findOneBy({id: id});
    if(!record) return null;
    record.remove();
    return record;
};