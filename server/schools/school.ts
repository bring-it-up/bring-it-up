import {ISchool, School} from "../models/school.model";

async function getSchools(identifierQuery: any,
                          nameQuery: any,
                          abbreviationQuery: any,
                          mentalHealthCoverageQuery: any): Promise<ISchool[]> {

    const identifier = identifierQuery ? { identifierQuery: { $regex: identifierQuery, $options: 'i' }} : {};
    const name = nameQuery ? { nameQuery: { $regex: nameQuery, $options: 'i' }} : {};
    const abbreviation = abbreviationQuery ? { abbreviationQuery: { $regex: identifierQuery, $options: 'i' }} : {};
    const mentalHealthCoverage = mentalHealthCoverageQuery ? { mentalHealthCoverageQuery: { $regex: identifierQuery, $options: 'i' }} : {};

    const schools = await School.find({ $and: [{ ...identifier,
                                                      ...name,
                                                      ...abbreviation,
                                                      ...mentalHealthCoverage}] })
                                .collation({ locale: 'en', strength: 2 })
                                .lean();

    return schools;
}

async function getSchool(id: string): Promise<ISchool> {
    return await School.findOne({indentifier: id}).lean();
}

async function createSchool(inputSchool: ISchool): Promise<ISchool> {
    const school = School.build(inputSchool);
    return await school.save();
}

async function deleteSchool(id: string) {
    const school = await School.findOne({indentifier: id});
    await school?.remove();
}

export default {
    getSchools,
    getSchool,
    createSchool,
    deleteSchool
};
