import express from 'express';
import CounsellingServiceController from '../controllers/counselling-service.controller';

const router = express.Router();

router.get('/specialties', CounsellingServiceController.getSpecialties);

export default router;
