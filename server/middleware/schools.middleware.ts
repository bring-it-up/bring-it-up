import {body} from "express-validator";

/*
    This file contains the logic for validating requests to
    the School API
 */

export const postRules = [
    body('uid')
        .exists({checkNull: true, checkFalsy: true})
        .isString(),
    body('name')
        .exists({checkNull: true, checkFalsy: true})
        .isString(),
    body('abbreviation')
        .exists({checkNull: true, checkFalsy: true})
        .isString(),
    body('mentalHealthCoverage')
        .exists({checkNull: true, checkFalsy: true})
        .isString(),
];
