import { IAdmin } from '../../controller/admins/Create';
import { AdminsModel } from '../../model';

export const getById = async (id: number):Promise<IAdmin | null> => {
    const admin = await AdminsModel.getById(id);
    return admin;
};