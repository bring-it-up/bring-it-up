import mongoose from 'mongoose';

// interface to reinforce types
interface ICounsellingServiceSchema {
    serviceName: String;
}

// when create new doc in db mongoose returns additional info
// this interface captures that
interface CounsellingServiceDoc extends mongoose.Document, ICounsellingServiceSchema {
}

// add build function to model
interface CounsellingServiceModelInterface extends mongoose.Model<CounsellingServiceDoc> {
    build(attr: ICounsellingServiceSchema): CounsellingServiceDoc
}

// define object schema
const CounsellingServiceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

// attach as static function of the schema
CounsellingServiceSchema.statics.build = (attr: ICounsellingServiceSchema) => {
    return new CounsellingService(attr)
}

const CounsellingService = mongoose.model<any, CounsellingServiceModelInterface>('CounsellingService', CounsellingServiceSchema)

export {CounsellingService}