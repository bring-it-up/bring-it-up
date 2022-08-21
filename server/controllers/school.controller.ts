import {Request, Response} from "express";
import School from '../schools/school';
import {StatusCode} from "./response-status-code.enum";

async function getSchool(req: Request, res: Response) {
    try {
        const school = await School.getSchool(req.params.id);
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
        const school = await School.createSchool(req.body);
        res.status(StatusCode.CREATED).json(school);
    } catch (error: any) {
        res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
    }
}

async function deleteSchool(req: Request, res: Response) {
    try {
        await School.deleteSchool(req.params.id);
        res.json({ message: "Deleted School." });
    } catch (error: any) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export default {
    getSchool,
    createSchool,
    deleteSchool
}