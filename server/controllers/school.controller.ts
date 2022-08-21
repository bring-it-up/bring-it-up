import {Request, Response} from "express";
import School from '../schools/school';
import {StatusCode} from "../utils/status-code.enum";
import {filterRequest} from "../middleware/utils.middleware";

async function getSchools(req: Request, res: Response) {
    try {
        const schools = await School.getSchools(req.query.identifer,
                                                req.query.name,
                                                req.query.abbreviation,
                                                req.query.mentalHealthCoverage);
        res.json(schools);
    } catch (err: any) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

async function getSchool(req: Request, res: Response) {
    try {
        const school = await School.getSchool(req.params.identifier);
        if (school == null) {
            res.status(StatusCode.NOT_FOUND).json({ message: 'Cannot find school' });
        } else {
            res.send(school);
        }
    } catch (err: any) {
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
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
        await School.deleteSchool(req.params.identifier);
        res.json({ message: "Deleted School." });
    } catch (error: any) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export default {
    getSchools,
    getSchool,
    createSchool,
    deleteSchool
}
