import { Router } from 'express';
import {} from './../controller/records';

import { RecordsController } from './../controller/records';
import { AdminsController } from '../controller/admins';

const router =  Router();

router.get('/records', RecordsController.getAllValidation, RecordsController.getAll);
router.get('/admins', );
router.get('/records/:id', RecordsController.getByIdValidation, RecordsController.getById);
router.get('/admins/:id');
router.post('/records', RecordsController.createValidation, RecordsController.create);
router.post('/admins', AdminsController.createValidation, AdminsController.create);
router.put('/records/:id', RecordsController.updateValidation, RecordsController.updateRecord);
router.put('/admins/:id', AdminsController.updateValidation, AdminsController.updateAdmin);
router.delete('/records/:id', RecordsController.deleteValidation, RecordsController.deleteRecord);
router.delete('/admins/:id');

export { router };