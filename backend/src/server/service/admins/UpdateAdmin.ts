import { IAdmin } from '../../controller/admins/Create';
import { AdminsModel } from '../../model';

export const updateRecord = async (id: number, data: IAdmin ): Promise<IAdmin | null> => {
    const ltsData = await AdminsModel.getById(id);
    if(!ltsData || ltsData === null) return null;
    if(!data.name || data.name.length === 0) data.name = ltsData.name;
    if(!data.adress || data.adress.length === 0) data.adress = ltsData.adress;
    if(!data.email || data.email.length === 0) data.email = ltsData.email;
    if(!data.username || data.username.length === 0) data.username = ltsData.username;
    if(!data.password || data.password.length === 0) data.password = ltsData.password;
    
    const record =  await AdminsModel.updateById(id, data);
    return record;
};