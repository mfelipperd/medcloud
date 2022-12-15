import { IRecord } from '../../controller/records/Create';
import { RecordsModel } from '../../model';

export const create = async (data: IRecord) => {
    const record = await RecordsModel.createUser(data);
    if(!record || record === null) return [];
    return record;
};