import { Request, Response } from 'express';
import CSService from '../services/counselling-service.service';
import { generateSecondaryId } from '../utils/id-generator.util';
import { filterRequest } from "../middleware/utils.middleware";
import {StatusCode} from "./response-status-code.enum";

async function getCounsellingServices(req: Request, res: Response) {  
    try {
      const services = await CSService.getCounsellingServices(req.query.serviceName,
                                                              req.query.location,
                                                              req.query.school,
                                                              req.query.organization, 
                                                              req.query.serviceType,
                                                              req.query.urgency, 
                                                              req.query.targetClients,
                                                              req.query.isAllDay,
                                                              req.query.specialty,
                                                              req.query.delivery,
                                                              req.query.description,
                                                              req.query.searchString);
      res.json(services);
    } catch (err: any) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

async function getCounsellingService(req: Request, res: Response) {
    try {
      const service = await CSService.getCounsellingService(req.params.id);
      if (service == null) {
        return res.status(StatusCode.NOT_FOUND).json({ message: 'Cannot find service' });
      } else {
        res.send(service);
      }
    } catch (err: any) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

async function addCounsellingService(req: Request, res: Response) {
    try {
      req.body = filterRequest(req);
      req.body.secondaryID = generateSecondaryId(req.body.serviceName);
      const newService = await CSService.createCounsellingService(req.body);
      res.status(StatusCode.CREATED).json(newService);
    } catch (error: any) {
      res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
    }
}

async function updateCounsellingService(req: Request, res: Response) {
    try {
        req.body = filterRequest(req);
        // get updated version of service if save succeeds
        await CSService.updateCounsellingService(req.params.id, req.body);
        res.json({ message: "Updated Service." });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteCounsellingService(req: Request, res: Response) {
    try {
        await CSService.deleteCounsellingService(req.params.id);
        res.json({ message: "Deleted Service." });
    } catch (error: any) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export default {
    getCounsellingServices,
    getCounsellingService,
    addCounsellingService,
    updateCounsellingService,
    deleteCounsellingService
};