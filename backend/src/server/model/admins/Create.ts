import { IAdmin } from '../../controller/admins/Create';
import { Admin } from '../entity/Admins';


export const create = async (data: IAdmin):Promise<IAdmin | null> => {
    try {
        const admin = new Admin();
        admin.name = data.name;
        admin.adress = data.adress;
        admin.email = data.email;
        admin.username = data.username;
        admin.password = data.password;
        await admin.save();
        if(!admin) throw Error();
        return admin;
    } catch (err) {
        console.log('##############################################@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',err);
        return null;
    }
};
