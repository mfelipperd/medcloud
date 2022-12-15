import { IAdmin } from '../../controller/admins/Create';
import { Admin } from '../entity/Admins';


export const create = async (data: IAdmin):Promise<IAdmin> => {
    const admin = new Admin();
    admin.name = data.name;
    admin.adress = data.adress;
    admin.email = data.email;
    admin.username = data.username;
    admin.password = data.username;

    await admin.save();
    return admin;
};