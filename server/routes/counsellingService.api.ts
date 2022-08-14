import express from 'express';
const router = express.Router();
import CounsellingServiceController from '../controllers/counselling-service.controller';
import {patchRules, postRules, validateRequest} from "../middleware/counselling-service.middleware";


// get all
router.get('/', CounsellingServiceController.getCounsellingServices);

// get one
router.get('/:id', CounsellingServiceController.getCounsellingService);

// create
router.post('/', postRules, validateRequest, CounsellingServiceController.addCounsellingService);

// update one (only info that is passed e.g. hours)
router.patch('/:id', patchRules, validateRequest, CounsellingServiceController.updateCounsellingService);

// delete one
router.delete('/:id', CounsellingServiceController.deleteCounsellingService);


module.exports = router;
