import express from 'express';
import SchoolController from '../controllers/school.controller'
import {postRules} from "../middleware/schools.middleware";
import {validateRequest} from "../middleware/utils.middleware";

const router = express.Router();

// get one school
router.get('/schools/:id', SchoolController.getSchool);

// create one school
router.post('/schools', postRules, validateRequest, SchoolController.createSchool);

router.delete('/schools/:id', SchoolController.deleteSchool);

module.exports = router;
