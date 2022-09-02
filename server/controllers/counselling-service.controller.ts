import { Request, Response } from 'express';
import CSService from '../services/counselling-service.service';
import { generateSecondaryId } from '../utils/id-generator.util';
import { filterRequest } from "../middleware/counselling-service.middleware";
import DataJson from '../data/counselling-services.json';

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
        // means we couldn't find it
        return res.status(404).json({ message: 'Cannot find service' });
      } else {
        res.send(service);
      }
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
}

async function addCounsellingService(req: Request, res: Response) {
    // console.log(req.body);

    try {
      req.body = filterRequest(req);
      req.body.secondaryID = generateSecondaryId(req.body.serviceName);
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
        req.body = filterRequest(req);
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

async function deleteAllCounsellingServices(req: Request, res: Response) {
  try {
      await CSService.deleteAllCounsellingServices();
      res.json({ message: "Deleted All Services." });
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
}

async function addCounsellingServicesJSON(req: Request, res: Response) {
  await CSService.deleteAllCounsellingServices();
  try {
    const final_obj:any = {final_push: []};  
    let vis_DataJson:any = {};

    for (let i = 0; i < DataJson.length; ++i) {
      vis_DataJson = DataJson[i];
      vis_DataJson.secondaryID = generateSecondaryId(DataJson[i]['serviceName']);
      vis_DataJson.__v = 0;
      final_obj.final_push.push(vis_DataJson);
    }
    await CSService.createCounsellingServicesJSON(final_obj.final_push);
    res.json({ message: "Added the following to the database:", "Added:" : final_obj.final_push, });

  } catch (error: any) {
    // 400 means something wrong with use input
    res.status(400).json({ message: error.message });
  }
}




export default {
    getCounsellingServices,
    getCounsellingService,
    addCounsellingService,
    updateCounsellingService,
    deleteCounsellingService,
    deleteAllCounsellingServices,
    addCounsellingServicesJSON
};