import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { RecordsService } from '../../service';

import { validation } from '../../shared/middleware';

interface IParamProps {
    id?: number
}


export const deleteValidation =  validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    }))
}));

export const deleteRecord= async (req: Request<IParamProps>, res: Response) => {
    const { id } =  req.params;
    if(!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'ID is necessary!'});
    const record = await RecordsService.deleteRecord(id);
    return res.status(StatusCodes.ACCEPTED).json(record);
};