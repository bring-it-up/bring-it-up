import { CounsellingService, ICounsellingService } from '../models/counsellingService.model';

async function getCounsellingServices(schoolQuery: any, onlineQuery: any, urgencyQuery: any, specialtyQuery: any): Promise<ICounsellingService[]> {
    // TODO: Move input validation to controller

    const school = schoolQuery ? { school: schoolQuery } : {};
    const isOfferedOnline = onlineQuery ? { isOfferedOnline: onlineQuery } : {};
    const urgency = urgencyQuery ? { urgency: { $regex: urgencyQuery, $options: 'i' } } : {};
  
    const optRegexp: RegExp[] = [];
    if (specialtyQuery && Array.isArray(specialtyQuery)) {
      (specialtyQuery as string[]).forEach(function (opt: string) {
        optRegexp.push(new RegExp(opt, "i"));
      });
    }
  
    const specialty = specialtyQuery ?
      optRegexp.length == 0 ?
        { specialty: { $regex: specialtyQuery, $options: 'i' } }
        :
        { specialty: { $in: optRegexp } }
      :
      {};

    const services = await CounsellingService.find({ $and: [{ ...school, ...isOfferedOnline, ...specialty, ...urgency }] }).collation({ locale: 'en', strength: 2 }).lean();

    return services;
}

async function getCounsellingService(id: string): Promise<ICounsellingService> {
    return await CounsellingService.findById(id).lean();
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