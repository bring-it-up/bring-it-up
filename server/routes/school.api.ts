import express from 'express';
import SchoolController from '../controllers/school.controller';
import { postRules } from '../middleware/schools.middleware';
import { validateRequest } from '../middleware/utils.middleware';

const router = express.Router();

// get school(s)
router.get('/', SchoolController.getSchools);

// get one school
router.get('/:uid', SchoolController.getSchool);

// create one school
router.post('/', postRules, validateRequest, SchoolController.createSchool);

// delete one school
router.delete('/:uid', SchoolController.deleteSchool);

module.exports = router;
