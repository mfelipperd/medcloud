import { RecordsModel } from '../../model';

export const deleteRecord = async (id: number) => {
    const record  = await RecordsModel.deleteById(id);
    return record;
};