import { Record } from '../entity/Records';

export const getByName = async (name: string):Promise<Record | [] | any> => {
    try {
        const record = await Record.findOneBy({name: name});
        if(!record || record === null) return [];
        return record;
    } catch (err) {
        return err;
    }
};