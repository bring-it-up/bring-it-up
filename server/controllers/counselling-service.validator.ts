import { body, validationResult } from "express-validator";
import {Request} from "express";
import {ServiceType} from "../models/counselling-type.enum";
import {UrgencyLevel} from "../models/urgency-level.enum";
import {DeliveryMethod} from "../models/delivery-method.enum";

export function validatePost(req: Request) {
    body('serviceName').exists().isString();
    body('location').isString();
    body('school').isString();
    body('organization').exists().isString();
    validateServiceType();
    validateUrgency();
    body('targetClients.*').exists().isString();
    body('isAllDay').exists().isBoolean();
    body('website').exists().isString();
    body('specialty.*').exists().isString();
    validateDelivery()
    body('description').exists().isString();
    body('logo').isString();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error("Invalid Request");
    }
}

function validateServiceType() {
    body('serviceType.*').exists().custom((value) => {
        if (value in ServiceType) {
            return true;
        } else {
            throw new Error('serviceType field is not a valid ServiceType');
        }
    });
}

function validateUrgency() {
    body('urgency').exists().custom((value) => {
        if (value in UrgencyLevel) {
            return true;
        } else {
            throw new Error('urgency field is not a valid UrgencyLevel');
        }
    });
}

function validateDelivery() {
    body('delivery.*').exists().custom((value) => {
        if (value in DeliveryMethod) {
            return true;
        } else {
            throw new Error('delivery field is not a valid DeliveryMethod');
        }
    });
}