import {NextFunction, Request, Response} from "express";
import {matchedData, validationResult} from "express-validator";

export function validateRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export function filterRequest(req: Request) {
    return matchedData(req, { locations: ['body'] });
}
