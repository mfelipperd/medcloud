import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SchemaOf, ValidationError } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query'

type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<any>

type TAllSchemas = Record<TProperty, SchemaOf<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>

type TValidation = ( getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation:TValidation = (getAllSchemas) => async (req, res, next) => {

    const schemas = getAllSchemas(schema => schema);
    
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema])=> {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false});
        } catch (err) {
            const yupError = err as ValidationError;
            const ValidationErrors: Record<string, string> = {};
    
            yupError.inner.forEach(error => {
                if(!error.path) return;
                ValidationErrors[error.path] = error.message;
            });
            
            errorsResult[key ] = ValidationErrors;
            // return res.status(StatusCodes.BAD_REQUEST).json({
            //     errors: ValidationErrors
            // });
        }
    });

    if(Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ erros: errorsResult });
    }
    
};