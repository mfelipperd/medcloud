import { IRecord } from '../../controller/records/Create';
import { Record } from '../entity/Records';

export const getByid = async (id: number):Promise<IRecord | null> => {
    const record = await Record.findOneBy({id: id});
    return record;
};