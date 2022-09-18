import mongoose from 'mongoose';
import { ServiceType } from './counselling-type.enum';
import { DeliveryMethod } from './delivery-method.enum';
import { UrgencyLevel } from './urgency-level.enum';

// interface to reinforce types
export interface ICounsellingService {
    serviceName: string;
    location?: string;
    school?: string;
    organization: string;
    serviceType: ServiceType[];
    urgency: UrgencyLevel;
    targetClients: string[];
    isAllDay: boolean;
    website: string;
    keywordSearch: string[],
    specialty: string[];
    delivery: DeliveryMethod[];
    description: string;
    logo?: string;
    secondaryID: string;
    hours: object;
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
    serviceType: {
        type: [String],
        enum: ServiceType,
        required: true
    },
    urgency: {
        type: String,
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
    keywordSearch: {
        type: [String],
        default: undefined,
        required: false
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

    secondaryID: {
        type: String,
        required: false,
        unique: true
    },

    hours: {
        type: Object,
        required: false,
        unique: false
    },
});

CounsellingServiceSchema.index({ '$**': 'text' }, {name: 'search_index'});

// attach as static function of the schema
CounsellingServiceSchema.statics.build = (attr: ICounsellingService) => {
    return new CounsellingService(attr);
};

export const CounsellingService: ICounsellingServiceModel = mongoose.model<CounsellingServiceDoc,ICounsellingServiceModel>('CounsellingService', CounsellingServiceSchema);

CounsellingService.on('index', error => {
    // If there is an error with creating an index, this will be logged here
    if (error) console.log(error);
});