import { NextFunction, Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { StatusCode } from '../utils/status-code.enum';

export function validateRequest(req: Request, res: Response, next: NextFunction) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(StatusCode.BAD_REQUEST).json({ errors: errors.array() });
	}
	next();
}

export function filterRequest(req: Request) {
	return matchedData(req, { locations: ['body'] });
}
