import express from 'express';
import CounsellingServiceController from '../controllers/counselling-service.controller';
import { patchRules, postRules, putRules } from '../middleware/counselling-service.middleware';
import { validateRequest } from '../middleware/utils.middleware';

const router = express.Router();

// get counselling service(s)
router.get('/', CounsellingServiceController.getCounsellingServices);

// get one counselling service
router.get('/:id', CounsellingServiceController.getCounsellingService);

// create one counselling service
router.post('/', postRules, validateRequest, CounsellingServiceController.addCounsellingService);

// update one counselling service (only info that is passed e.g. hours)
router.patch('/:id', patchRules, validateRequest, CounsellingServiceController.updateCounsellingService);

// delete one counselling service
router.delete('/:id', CounsellingServiceController.deleteCounsellingService);

// delete all
router.delete('/', CounsellingServiceController.deleteAllCounsellingServices);

// add json to database
router.put('/', putRules, validateRequest, CounsellingServiceController.addCounsellingServicesJSON);


module.exports = router;