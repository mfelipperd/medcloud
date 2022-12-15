import { IAdmin } from '../../controller/admins/Create';
import { Admin } from '../entity/Admins';


export const getById = async (id: number):Promise<IAdmin | null> => {
    const record = await Admin.findOneBy({id: id});
    return record;
};