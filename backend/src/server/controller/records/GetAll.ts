import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { RecordsService } from '../../service';

import { validation } from '../../shared/middleware';

interface IQueryProps {
    page?:number;
    filter?: string;
    limit?: number;
}


export const getAllValidation =  validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
        limit: yup.number().notRequired(),
    }))
}));

export const getAll= async (req: Request<{}, {}, {} , IQueryProps>, res: Response) => {
    const records = await RecordsService.getAll();
    if(!records || records.length < 1) return res.status(StatusCodes.EXPECTATION_FAILED).json({ message: 'Data not found'});
    return res.status(StatusCodes.ACCEPTED).json(records);
};
