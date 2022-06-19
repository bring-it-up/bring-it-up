import mongoose from 'mongoose';

// interface to reinforce types
interface ICounsellingService {
    serviceName: string;
    location: string;
    school: string;
    organization: string;
    type: string;
    urgency: string;
    targetClients: string[];
    isAllDay: boolean;
    website: string;
    specialty: string[];
    isOfferedOnline: boolean;
    delivery: string[];
    description: string;
    secondaryID: string;
}

// when create new doc in db mongoose returns additional info
// this interface captures that
interface CounsellingServiceDoc extends mongoose.Document, ICounsellingService {
}

// add build function to model
interface ICounsellingServiceModel extends mongoose.Model<CounsellingServiceDoc> {
    build(attr: ICounsellingService): CounsellingServiceDoc
}

// define object schema
const CounsellingServiceSchema = new mongoose.Schema<CounsellingServiceDoc>({
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

    secondaryID: {
        type: String,
        required: false
    },
});

// attach as static function of the schema
CounsellingServiceSchema.statics.build = (attr: ICounsellingService) => {
    return new CounsellingService(attr);
};

export const CounsellingService: ICounsellingServiceModel = mongoose.model<CounsellingServiceDoc,ICounsellingServiceModel>('CounsellingService', CounsellingServiceSchema);
