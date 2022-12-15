import { RecordsModel } from '../../model';

export const getAll = async () => {
    const record = await RecordsModel.getAll();
    return record;
};