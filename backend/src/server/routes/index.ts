import { Router } from 'express';
import {} from './../controller/records';

import { RecordsController } from './../controller/records';

const router =  Router();

router.get('/records', RecordsController.getAllValidation, RecordsController.getAll);
router.get('/records/:id', RecordsController.getByIdValidation, RecordsController.getById);
router.post('/records', RecordsController.createValidation, RecordsController.create);
router.put('/records/:id', RecordsController.updateValidation, RecordsController.updateRecord);
router.delete('/records/:id', RecordsController.deleteValidation, RecordsController.deleteRecord);

export { router };