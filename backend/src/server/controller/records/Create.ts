import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { RecordsService } from '../../service';

import { validation } from '../../shared/middleware';
export interface IRecord {
    name: string;
    email: string;
    adress: string;
    birthDate: Date;
}


export const createValidation =  validation((getSchema) => ({
    body: getSchema<IRecord>(yup.object().shape({
        name: yup.string().required().min(3),
        email: yup.string().required().email(),
        adress: yup.string().required().min(15),
        birthDate: yup.date().required(),
    }))
}));

export const create = async (req: Request<{}, {}, IRecord>, res: Response) => {
    const data =  req.body;
    const createData = await RecordsService.create(data);
    if(!createData || createData === null) return res.status(StatusCodes.BAD_REQUEST).json({message:'Record not created'});


    return res.status(StatusCodes.ACCEPTED).json(createData);
};
