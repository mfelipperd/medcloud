import { IRecord } from '../../controller/records/Create';
import { RecordsModel } from '../../model';

export const updateRecord = async (id: number, data: IRecord ) => {
    const ltsData = await RecordsModel.getByName(data.name);
    if(!data.name || data.name.length === 0) data.name = ltsData.name;
    if(!data.adress || data.adress.length === 0) data.adress = ltsData.adress;
    if(!data.email || data.email.length === 0) data.email = ltsData.email;
    if(!data.birthDate ) data.birthDate = ltsData.birthDate;
    
    const record =  await RecordsModel.updateById(id, data);
    return record;
};