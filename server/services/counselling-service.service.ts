import { CounsellingService, ICounsellingService } from '../models/counsellingService.model';

async function getCounsellingServices(nameQuery: any,
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
                                      searchString?: any): Promise<ICounsellingService[]> {
  // TODO: Move input validation to controller

  const serviceName = nameQuery ? { serviceName: { $regex: nameQuery, $options: 'i' } } : {};
  const location = locationQuery ? { location: { $regex: locationQuery, $options: 'i' } } : {};
  const school = schoolQuery ? { school: { $regex: schoolQuery, $options: 'i' } } : {};
  const organization = organizationQuery ? { organization: { $regex: organizationQuery, $options: 'i' } } : {};
  const urgency = urgencyQuery ? { urgency: { $regex: urgencyQuery, $options: 'i' } } : {};
  const isAllDay = (isAllDayQuery != null) ? { isAllDay: isAllDayQuery } : {};
  const description = descriptionQuery ? { description: { $regex: descriptionQuery, $options: 'i' } } : {};

  const optRegexpServiceType : RegExp[] = [];
  if (serviceTypeQuery && Array.isArray(serviceTypeQuery)) {
    (serviceTypeQuery as string[]).forEach(function(opt: string) {
      optRegexpServiceType.push( new RegExp(opt, "i") );
    }); 
  }

  const serviceType = serviceTypeQuery ? 
    optRegexpServiceType.length == 0 ? 
      { serviceType: {$regex: serviceTypeQuery, $options: 'i'} }
      : 
      { serviceType: {$in: optRegexpServiceType} }
    :
    {};

  const optRegexpTargetClients : RegExp[] = [];
  if (targetClientsQuery && Array.isArray(targetClientsQuery)) {
    (targetClientsQuery as string[]).forEach(function(opt: string) {
      optRegexpTargetClients.push( new RegExp(opt, "i") );
    }); 
  }

  const targetClients = targetClientsQuery ? 
    optRegexpTargetClients.length == 0 ? 
      { targetClients: {$regex: targetClientsQuery, $options: 'i'} }
      : 
      { targetClients: {$in: optRegexpTargetClients} }
    :
    {};

  const optRegexpSpecialty : RegExp[] = [];
  if (specialtyQuery && Array.isArray(specialtyQuery)) {
    (specialtyQuery as string[]).forEach(function(opt: string) {
      optRegexpSpecialty.push( new RegExp(opt, "i") );
    }); 
  }
  
  const specialty = specialtyQuery ? 
    optRegexpSpecialty.length == 0 ? 
      { specialty: {$regex: specialtyQuery, $options: 'i'} }
      : 
      { specialty: {$in: optRegexpSpecialty} }
  :
  {};

  const optRegexpDeliveryMethod : RegExp[] = [];
  if (deliveryQuery && Array.isArray(deliveryQuery)) {
    (deliveryQuery as string[]).forEach(function(opt: string) {
      optRegexpDeliveryMethod.push( new RegExp(opt, "i") );
    }); 
  }

  const delivery = deliveryQuery ? 
    optRegexpDeliveryMethod.length == 0 ? 
      { delivery: {$regex: deliveryQuery, $options: 'i'} }
      : 
      { delivery: {$in: optRegexpDeliveryMethod} }
    :
    {};

  const search = {$text: {$search: searchString}};

  const services = await CounsellingService.find({ $and: [{ ...serviceName, 
                                                            ...location,
                                                            ...school, 
                                                            ...organization,
                                                            ...serviceType,
                                                            ...specialty, 
                                                            ...urgency,
                                                            ...targetClients,
                                                            ...isAllDay,
                                                            ...delivery,
                                                            ...description,
                                                            ...search}] }).collation({ locale: 'en', strength: 2 }).lean();

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

export default {
    getCounsellingServices,
    getCounsellingService,
    createCounsellingService,
    updateCounsellingService,
    deleteCounsellingService
};