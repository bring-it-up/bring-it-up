import express from 'express';
import CounsellingServiceController from '../controllers/counselling-service.controller';
import {patchRules, postRules} from "../middleware/counselling-service.middleware";
import {validateRequest} from "../middleware/utils.middleware";

const router = express.Router();

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
