import * as create from './Create';
// import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateAdmin from './UpdateAdmin';
// import * as deleteRecord from './DeleteRecord';

export const AdminsService = {
    ...create,
    // ...getAll,
    ...getById,
    ...updateAdmin,
    // ...deleteRecord
};