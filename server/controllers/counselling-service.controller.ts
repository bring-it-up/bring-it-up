import { Request, Response } from 'express';
import CSService from '../services/counselling-service.service';
import { generateSecondaryId } from '../utils/id-generator.util';
import { filterRequest } from "../middleware/utils.middleware";
import {StatusCode} from "../utils/status-code.enum";
import { SPECIALTY_MAP } from '../utils/specialty-list';

async function getCounsellingServices(req: Request, res: Response) {  
    try {
      const services = await CSService.getCounsellingServices(req.query.serviceName,
                                                              req.query.location,
                                                              req.query.school,
                                                              req.query.organization, 
                                                              req.query.serviceType,
                                                              req.query.urgency, 
                                                              req.query.targetClients,
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
        res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
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

async function deleteAllCounsellingServices(req: Request, res: Response) {
  try {
      await CSService.deleteAllCounsellingServices();
      res.json({ message: "Deleted All Services." });
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
}

async function addCounsellingServicesJSON(req: Request, res: Response) {
  //Deletes anything that was already in the database
  await CSService.deleteAllCounsellingServices();

  try {
    const final_obj:any = {final_push: []};  
    let vis_DataJson:any = {};

    for (let i = 0; i < req.body.length; ++i) {
      vis_DataJson = req.body[i];
      vis_DataJson.secondaryID = generateSecondaryId(req.body[i]['serviceName']);
      vis_DataJson.__v = 0;
      final_obj.final_push.push(vis_DataJson);
    }

    await CSService.createCounsellingServicesJSON(final_obj.final_push);
    res.json({ message: "Added the following to the database:", "Added:" : final_obj.final_push, });

  } catch (error: any) {
    // 400 means something wrong with input
    res.status(400).json({ message: error.message });
  }
}

function getSpecialties(req: Request, res: Response) {
  try {
    res.status(StatusCode.OK).json(SPECIALTY_MAP);
  } catch (e) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: 'There was an error with generating the specialty list' });
  }
}

export default {
    getCounsellingServices,
    getCounsellingService,
    addCounsellingService,
    updateCounsellingService,
    deleteCounsellingService,
    deleteAllCounsellingServices,
    addCounsellingServicesJSON,
    getSpecialties
};
