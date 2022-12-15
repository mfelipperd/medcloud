import * as create from './Create';
// import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateAdmin from './UpdateAdmin';
// import * as deleteRecord from './DeleteRecord';
// import * as getByName from './GetByName';

export const AdminsModel = {
    ...create,
    // ...getAll,
    ...getById,
    ...updateAdmin,
    // ...deleteRecord,
    // ...getByName
    
};