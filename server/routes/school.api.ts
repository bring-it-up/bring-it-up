import express from 'express';
import SchoolController from '../controllers/school.controller'

const router = express.Router();

// get one school
router.get('/:id', SchoolController.getSchool);

// create one school
router.post('/', SchoolController.createSchool);

router.delete('/:id', SchoolController.deleteSchool);

module.exports = router;