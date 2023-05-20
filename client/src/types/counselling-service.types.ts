import { DeliveryMethod } from './delivery-method.enum';
import { ServiceType } from './service-type.enum';
import { Specialty } from './specialty.type';
import { UrgencyLevel } from './urgency-level.enum';
import { School } from './school.types';

export type CounsellingService = {
    serviceName: string;
    location?: string;
    school?: School;
    organization: string;
    serviceType: ServiceType[];
    urgency: UrgencyLevel;
    targetClients: string[];
    website: string;
    keywordSearch: string[];
    specialty: Specialty[];
    delivery: DeliveryMethod[];
    description: string;
    logo?: string;
    secondaryID: string;
    hours?: CounsellingServiceHours;
    isFree: boolean;
};

export type CounsellingServiceHours = {
    mon: string[];
    tue: string[];
    wed: string[];
    thu: string[];
    fri: string[];
    sat: string[];
    sun: string[];
};