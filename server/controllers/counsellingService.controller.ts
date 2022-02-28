import express from 'express';
import { CounsellingService } from '../models/counsellingService.model';
import counsellingServiceService from '../services/counsellingService.service';
const router = express.Router();

router.get('/', (req, res) => {
    res.send(CounsellingService.build({serviceName: "UBC"}));
});

router.post('/', (req, res) => {
    // TODO: Implement request for adding a counselling service
});

export default router;