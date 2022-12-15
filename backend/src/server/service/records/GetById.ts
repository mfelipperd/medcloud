import { IRecord } from '../../controller/records/Create';
import { RecordsModel } from '../../model';

export const getById = async (id: number):Promise<IRecord | null> => {
    const record = await RecordsModel.getByid(id);
    return record;
};