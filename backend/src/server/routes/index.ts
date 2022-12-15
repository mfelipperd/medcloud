import { Router } from 'express';
import {} from './../controller/records';

import { RecordsController } from './../controller/records';
import { AdminsController } from '../controller/admins';

const router =  Router();

router.get('/records', RecordsController.getAllValidation, RecordsController.getAll);
router.get('/admin', AdminsController.createValidation, AdminsController.create);
router.get('/records/:id', RecordsController.getByIdValidation, RecordsController.getById);
router.get('/admin/:id');
router.post('/records', RecordsController.createValidation, RecordsController.create);
router.post('/admin');
router.put('/records/:id', RecordsController.updateValidation, RecordsController.updateRecord);
router.put('/admin/:id');
router.delete('/records/:id', RecordsController.deleteValidation, RecordsController.deleteRecord);
router.delete('/admin/:id');

export { router };