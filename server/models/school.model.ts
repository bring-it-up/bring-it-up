import mongoose from "mongoose";

export interface ISchool {
    identifier: string;
    name: string;
    abbreviation: string;
    mentalHealthCoverage: string;
}

interface SchoolDoc extends mongoose.Document, ISchool {
}

interface ISchoolModel extends mongoose.Model<SchoolDoc> {
    build(attr: ISchool): SchoolDoc
}

let SchoolSchema = new mongoose.Schema<SchoolDoc>({
    identifier: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    },
    mentalHealthCoverage: {
        type: String,
        required: true
    }
});

export const School: ISchoolModel = mongoose.model<SchoolDoc,ISchoolModel>('School', SchoolSchema);

School.on('index', error => {
    if (error) console.log(error);
});
