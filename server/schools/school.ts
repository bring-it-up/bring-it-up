import {ISchool, School} from "../models/school.model";
import {BadRequestError} from "../middleware/bad-request-error";
import {getFilter} from "../utils/filter.util";

async function getSchools(uidQuery: any,
                          nameQuery: any,
                          abbreviationQuery: any,
                          mentalHealthCoverageQuery: any,
                          searchString: any): Promise<ISchool[]> {

    const uid = getFilter("uid", uidQuery);
    const name = getFilter("name", nameQuery);
    const abbreviation = getFilter("abbreviation", abbreviationQuery);
    const mentalHealthCoverage = getFilter("mentalHealthCoverage", mentalHealthCoverageQuery);

    const search = searchString ? { $text: { $search: searchString } } : {};

    const filter = {...uid, ...name, ...abbreviation, ...mentalHealthCoverage, ...search};

    const schools = await School.find({ $and: [filter] }, { _id: 0, __v: 0})
                                .collation({ locale: 'en', strength: 2 })
                                .lean();

    return schools;
}

async function getSchool(id: string): Promise<ISchool> {
    const school = await School.findOne({uid: id}, {_id: 0, __v: 0}).lean();
    if (school == null) {
        throw new BadRequestError();
    }
    return school;
}

async function createSchool(inputSchool: ISchool): Promise<ISchool> {
    const school = School.build(inputSchool);
    return await school.save();
}

async function deleteSchool(id: string) {
    const school = await School.findOne({uid: id});
    if (school == null) {
        throw new BadRequestError();
    }
    await school.remove();
}

export default {
    getSchools,
    getSchool,
    createSchool,
    deleteSchool
};
