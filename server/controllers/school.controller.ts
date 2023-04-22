import { Request, Response } from 'express';
import School from '../services/school.service';
import { StatusCode } from '../utils/status-code.enum';
import { filterRequest } from '../middleware/utils.middleware';
import { BadRequestError } from '../middleware/bad-request-error';
import SchoolService from '../services/school.service';

async function getSchools(req: Request, res: Response) {
	try {
		const schools = await School.getSchools(req.query.uid,
			req.query.name,
			req.query.abbreviation,
			req.query.mentalHealthCoverage,
			req.query.searchString);
		res.json(schools);
	} catch (err: any) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
	}
}

async function getSchool(req: Request, res: Response) {
	try {
		const school = await School.getSchool(req.params.uid);
		res.send(school);
	} catch (err: any) {
		if (err instanceof BadRequestError) {
			res.status(StatusCode.NOT_FOUND).json({ message: 'Cannot find school.' });
		} else {
			res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
		}
	}
}

async function createSchool(req: Request, res: Response) {
	try {
		req.body = filterRequest(req);
		const school = await School.createSchool(req.body);
		res.status(StatusCode.CREATED).json(school);
	} catch (error: any) {
		res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
	}
}

async function deleteSchool(req: Request, res: Response) {
	try {
		await School.deleteSchool(req.params.uid);
		res.json({ message: 'Deleted School.' });
	} catch (err: any) {
		if (err instanceof BadRequestError) {
			res.status(StatusCode.NOT_FOUND).json({ message: 'Cannot find school.' });
		} else {
			res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
		}
	}
}

async function addSchools(req: Request, res: Response) {
	try {
		await SchoolService.deleteAllSchools();
		await SchoolService.addSchools(req.body);
		res.json({ message: `Successfully added schools to the database` });
	} catch (e: any) {
		res.status(400).json({ message: e.message });
	}
}

export default {
	getSchools,
	getSchool,
	createSchool,
	deleteSchool,
	addSchools
};
