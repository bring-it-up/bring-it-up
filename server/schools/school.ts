import {ISchool, School} from "../models/school.model";

async function getSchool(id: string): Promise<ISchool> {
    return await School.findOne({indentifier: id}).lean();
}

async function createSchool(inputSchool: ISchool): Promise<ISchool> {
    const school = School.build(inputSchool);
    return await school.save();
}

async function deleteSchool(id: string) {
    const school = await School.findById(id);
    await school?.remove();
}

export default {
    getSchool,
    createSchool,
    deleteSchool
};