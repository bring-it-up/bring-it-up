import mongoose from 'mongoose';
import { CounsellingType } from './counselling-type.enum';
import { DeliveryMethod } from './delivery-method.enum';
import { UrgencyLevel } from './urgency-level.enum';

// interface to reinforce types
interface ICounsellingService {
    serviceName: string;
    location?: string;
    school?: string;
    organization: string;
    type: CounsellingType[];
    urgency: UrgencyLevel[];
    targetClients: string[];
    isAllDay: boolean;
    website: string;
    specialty: string[];
    delivery: DeliveryMethod[];
    description: string;
    logo?: string;
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
        required: false
    },
    school: {
        type: String,
        required: false
    },
    organization: {
        type: String,
        required: true
    },
    type: {
        type: [String],
        enum: CounsellingType,
        required: true
    },
    urgency: {
        type: [String],
        enum: UrgencyLevel,
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
    delivery: {
        type: [String],
        enum: DeliveryMethod,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

// attach as static function of the schema
CounsellingServiceSchema.statics.build = (attr: ICounsellingService) => {
    return new CounsellingService(attr);
};

export const CounsellingService: ICounsellingServiceModel = mongoose.model<CounsellingServiceDoc,ICounsellingServiceModel>('CounsellingService', CounsellingServiceSchema);