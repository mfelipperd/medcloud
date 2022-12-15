import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateRecord from './UpdateRecord';
import * as deleteRecord from './DeleteRecord';
import * as getByName from './GetByName';

export const RecordsModel = {
    ...create,
    ...getAll,
    ...getById,
    ...updateRecord,
    ...deleteRecord,
    ...getByName
    
};