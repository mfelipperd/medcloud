import { IAdmin } from '../../controller/admins/Create';
import { Admin } from '../entity/Admins';

export const updateById = async (id: number, data: IAdmin):Promise<IAdmin | null> => {
    const admin = await Admin.findOneBy({id:id});
    if (!admin || admin === null) return null;

    admin.name =  data.name;
    admin.adress = data.adress;
    admin.email =  data.email;
    admin.username = data.username;
    admin.password = data.password;
    
    admin.save();
    return admin;
};