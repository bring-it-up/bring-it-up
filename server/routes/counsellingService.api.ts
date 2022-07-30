import express from 'express';
const router = express.Router();
import CounsellingServiceController from '../controllers/counselling-service.controller';


// get all
router.get('/', CounsellingServiceController.getCounsellingServices);

// get one
router.get('/:id', CounsellingServiceController.getCounsellingService);

// create
router.post('/', CounsellingServiceController.addCounsellingService);

// update one (only info that is passed e.g. hours)
router.patch('/:id', CounsellingServiceController.updateCounsellingService);

// delete one
router.delete('/:id', CounsellingServiceController.deleteCounsellingService);


module.exports = router;
