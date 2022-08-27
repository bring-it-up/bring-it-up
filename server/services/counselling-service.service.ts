import { CounsellingService, ICounsellingService } from '../models/counsellingService.model';

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

  const serviceName = await getFilter("serviceName", serviceNameQuery);
  const location = await getFilter("location", locationQuery);
  const school = await getFilter("school", schoolQuery);
  const organization = await getFilter("organization", organizationQuery);
  const serviceType = await getFilter("serviceType", serviceTypeQuery);
  const specialty = await getFilter("specialty", specialtyQuery);
  const urgency = await getFilter("urgency", urgencyQuery);
  const targetClients = await getFilter("targetClients", targetClientsQuery);
  const isAllDay = (isAllDayQuery != null) ? { isAllDay: isAllDayQuery } : {};
  const delivery = await getFilter("delivery", deliveryQuery);
  const description = await getFilter("description", descriptionQuery);

  const search = searchString ? { $text: { $search: searchString } } : {};

  const filter = {...serviceName, ...location, ...school, ...organization, ...serviceType, ...specialty,
                  ...urgency, ...targetClients, ...isAllDay, ...delivery, ...description, ...search};

  const services = await CounsellingService.find({ $and: [filter] })
                                           .collation({ locale: 'en', strength: 2 })
                                           .lean();

  return services;
}

async function getFilter(key: string, query: any): Promise<{}> {
    let regExp : RegExp[] = [];
    if (query && Array.isArray(query)) {
        (query as string[]).forEach(function(opt: string) {
            regExp.push( new RegExp(opt, "i") );
        });
    }

    const filter = query ?
        regExp.length == 0 ?
            { [key]: {$regex: query, $options: 'i'} }
            :
            { [key]: {$in: regExp} }
        :
        {};

    return await filter;
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

export default {
    getCounsellingServices,
    getCounsellingService,
    createCounsellingService,
    updateCounsellingService,
    deleteCounsellingService
};