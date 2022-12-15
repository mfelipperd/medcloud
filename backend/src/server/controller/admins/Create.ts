import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { AdminsService } from '../../service';


import { validation } from '../../shared/middleware';

export interface IAdmin {
    name: string;
    adress: string;
    email: string;
    username: string;
    password: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IAdmin>(yup.object().shape({
        name: yup.string().required().min(3),
        adress: yup.string().required().min(8),
        email: yup.string().required().email(),
        username: yup.string().min(8).required(),
        password: yup.string().required().min(8)
    }))
}));


export const create =  async (req: Request<{}, {}, IAdmin>, res: Response) => {
    const data =  req.body;
    const createData = await AdminsService.create(data); 
    if(!createData || createData === null) return res.status(StatusCodes.BAD_REQUEST).json({message:'Username already exists!'});

    return res.status(StatusCodes.ACCEPTED).json(createData);
};