import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { AdminsModel } from '../../model';

import { validation } from '../../shared/middleware';
import { IAdmin } from './Create';

interface IParamProps {
    id?: number
}

export const updateValidation =  validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getSchema<IAdmin>(yup.object().shape({
        name: yup.string().required().min(3),
        email: yup.string().required().email(),
        adress: yup.string().required().min(15),
        username: yup.string().required().min(8),
        password:yup.string().required().min(8)
    })),
}));

export const updateAdmin = async (req: Request<IParamProps>, res: Response) => {
    const { id } =  req.params;
    if(!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'ID is necessary!'});
    const data = req.body;
    if(!data) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Data is necessary'});
    const record = await AdminsModel.updateById(id, data);
    if (!record) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'ID or Data are invaled'});

    return res.status(StatusCodes.ACCEPTED).json(record);
};