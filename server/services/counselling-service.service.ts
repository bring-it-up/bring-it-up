import { CounsellingService, ICounsellingService } from '../models/counsellingService.model';
import { getFilter } from "../utils/filter.util";

async function getCounsellingServices(serviceNameQuery: any,
                                      locationQuery: any,
                                      schoolQuery: any, 
                                      organizationQuery: any,
                                      serviceTypeQuery: any,
                                      urgencyQuery: any, 
                                      targetClientsQuery: any,
                                      isAllDayQuery: any,
                                      specialtyQuery: any,
                                      deliveryQuery: any,
                                      descriptionQuery: any,
                                      searchString: any): Promise<ICounsellingService[]> {

  const serviceName = getFilter("serviceName", serviceNameQuery);
  const location = getFilter("location", locationQuery);
  const school = getFilter("school", schoolQuery);
  const organization = getFilter("organization", organizationQuery);
  const serviceType = getFilter("serviceType", serviceTypeQuery);
  const specialty = getFilter("specialty", specialtyQuery);
  const urgency = getFilter("urgency", urgencyQuery);
  const targetClients = getFilter("targetClients", targetClientsQuery);
  const isAllDay = (isAllDayQuery != null) ? { isAllDay: isAllDayQuery } : {};
  const delivery = getFilter("delivery", deliveryQuery);
  const description = getFilter("description", descriptionQuery);

  const search = searchString ? { $text: { $search: searchString } } : {};

  const filter = {...serviceName, ...location, ...school, ...organization, ...serviceType, ...specialty,
                  ...urgency, ...targetClients, ...isAllDay, ...delivery, ...description, ...search};

  const services = await CounsellingService.find({ $and: [filter] })
                                           .collation({ locale: 'en', strength: 2 })
                                           .lean();

  return services;
}

async function getCounsellingService(id: string): Promise<ICounsellingService> {
    return await CounsellingService.findOne({secondaryID: id}).lean();
}

async function createCounsellingService(inputService: ICounsellingService): Promise<ICounsellingService> {
    const service = CounsellingService.build(inputService);
    return await service.save();
}

async function updateCounsellingService(id: string, attributes: any): Promise<ICounsellingService> {
    return await CounsellingService.findByIdAndUpdate(id, attributes).lean();
}

async function deleteCounsellingService(id: string) {
    const service = await CounsellingService.findById(id);
    await service?.remove();
}

async function deleteAllCounsellingServices() {
  const service = await CounsellingService;
  await service.deleteMany();
}

async function createCounsellingServicesJSON(inputService: ICounsellingService) {
  const service = await CounsellingService;
  await service.insertMany(inputService);
}

export default {
    getCounsellingServices,
    getCounsellingService,
    createCounsellingService,
    updateCounsellingService,
    deleteCounsellingService,
    deleteAllCounsellingServices,
    createCounsellingServicesJSON
};