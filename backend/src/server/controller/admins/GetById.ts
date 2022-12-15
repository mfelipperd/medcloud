import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { AdminsService } from '../../service';

import { validation } from '../../shared/middleware';

interface IParamProps {
    id?: number
}


export const getByIdValidation =  validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    }))
}));

export const getById= async (req: Request<IParamProps>, res: Response) => {
    const { id } =  req.params;
    if(!id || id < 1) return res.status(StatusCodes.BAD_REQUEST).json({message: 'Id is necessary'});
    const record = await AdminsService.getById(id);
    console.log(record);
    if (!record) return res.status(StatusCodes.NOT_FOUND).json({message:'Data not found!'});
    return res.status(StatusCodes.ACCEPTED).json(record);
};
