import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { RecordsService } from '../../service';

import { validation } from '../../shared/middleware';
import { IRecord } from './Create';

interface IParamProps {
    id?: number
}

export const updateValidation =  validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getSchema<IRecord>(yup.object().shape({
        name: yup.string().required().min(3),
        email: yup.string().required().email(),
        adress: yup.string().required().min(15),
        birthDate: yup.date().required().min(8),
    })),
}));

export const updateRecord = async (req: Request<IParamProps>, res: Response) => {
    const { id } =  req.params;
    console.log(id);
    if(!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'ID is necessary!'});
    const data = req.body;
    if(!data) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Data is necessary'});
    const record = await RecordsService.updateRecord(id, data);

    return res.status(StatusCodes.ACCEPTED).json(record);
};