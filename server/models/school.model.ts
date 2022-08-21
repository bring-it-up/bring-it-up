import mongoose from "mongoose";

export interface ISchool {
    uid: string;
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
    uid: {
        type: String,
        required: true,
        unique: true
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

SchoolSchema.index({ '$**': 'text' }, {name: 'search_index'});

SchoolSchema.statics.build = (attr: ISchool) => {
    return new School(attr);
};

export const School: ISchoolModel = mongoose.model<SchoolDoc,ISchoolModel>('School', SchoolSchema);

School.on('index', error => {
    if (error) console.log(error);
});
