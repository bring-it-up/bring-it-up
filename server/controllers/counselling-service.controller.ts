import { Request, Response } from 'express';
import { CounsellingService } from '../models/counsellingService.model';
import CSService from '../services/counselling-service.service';
import { generateSecondaryId } from '../utils/id-generator.util';

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
                                                              req.query.description);
      // const services = await CSService.getCounsellingServices(req.query.serviceName, req.query.location, req.query.school, req.query.organization, req.query.serviceType, req.query.urgency, req.query.targetClients, req.query.isAllDay, req.query.specialty, req.query.delivery, req.query.description);
      res.json(services);
    } catch (err: any) {
      // send status code 500 with message to client (means server's fault)
      res.status(500).json({ message: err.message });
    }
}

async function getCounsellingService(req: Request, res: Response) {
    try {
      const service = await CSService.getCounsellingService(req.params.id);
      if (service == null) {
        // means we couldnt find it
        return res.status(404).json({ message: 'Cannot find service' });
      } else {
        res.send(service);
      }
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
}

async function addCounsellingService(req: Request, res: Response) {
    req.body.secondaryID = generateSecondaryId(req.body.serviceName);

    console.log(req.body);
  
    try {
      const newService = await CSService.createCounsellingService(req.body);
      // 201 means successfully created object
      res.status(201).json(newService);
    } catch (error: any) {
      // 400 means something wrong with use input
      res.status(400).json({ message: error.message });
    }
}

async function updateCounsellingService(req: Request, res: Response) {
    try {
        // get update version of service if save success
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
        res.status(500).json({ message: error.message });
    }
}

export default {
    getCounsellingServices,
    getCounsellingService,
    addCounsellingService,
    updateCounsellingService,
    deleteCounsellingService
};