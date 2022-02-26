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
    },
    school: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    urgency: {
        type: String,
        enum: ['Urgent', 'Non-urgent', 'Urgent and Non-urgent'],
        required: true
    },
    targetClients: {
        type: [String],
        default: undefined,
        required: true
    },
    isAllDay: {
        type: Boolean,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    specialty: {
        type: [String],
        default: undefined,
        required: true
    },
    isOfferedOnline: {
        type: Boolean,
        required: true
    },
    delivery: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

// attach as static function of the schema
CounsellingServiceSchema.statics.build = (attr: ICounsellingServiceSchema) => {
    return new CounsellingService(attr)
}

const CounsellingService = mongoose.model<any, CounsellingServiceModelInterface>('CounsellingService', CounsellingServiceSchema)

export {CounsellingService}