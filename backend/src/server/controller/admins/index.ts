import * as create from './Create';
// import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateAdmin from './UpdateAdmin';
// import * as deleteRecord from './DeleteRecord';

export const AdminsController = {
    ...create,
    // ...getAll,
    ...getById,
    ...updateAdmin,
    // ...deleteRecord,
    
};