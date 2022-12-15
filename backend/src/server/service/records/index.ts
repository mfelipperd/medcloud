import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateRecord from './UpdateRecord';
import * as deleteRecord from './DeleteRecord';

export const RecordsService = {
    ...create,
    ...getAll,
    ...getById,
    ...updateRecord,
    ...deleteRecord
};