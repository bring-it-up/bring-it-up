import express from 'express';
const router = express.Router();
import { CounsellingService } from '../models/counsellingService.model';


// get all
router.get('/', async (req, res) => {
  const school = req.query.school ? { school: req.query.school } : {};
  const isOfferedOnline = req.query.isOfferedOnline ? { isOfferedOnline: req.query.isOfferedOnline } : {};
  const urgency = req.query.urgency ? { urgency: {$regex: req.query.urgency, $options: 'i'} } : {};

  const optRegexp : RegExp[] = [];
  if (req.query.specialty && Array.isArray(req.query.specialty)) {
    (req.query.specialty as string[]).forEach(function(opt: string) {
      optRegexp.push( new RegExp(opt, "i") );
    }); 
  }

  const specialty = req.query.specialty ? 
                      optRegexp.length == 0 ? 
                        { specialty: {$regex: req.query.specialty, $options: 'i'} }
                      : 
                        { specialty: {$in: optRegexp} }
                    :
                      {};
  
  try {
    const services = await CounsellingService.find({$and: [{...school, ...isOfferedOnline, ...specialty, ...urgency}]}).collation({ locale: 'en', strength: 2});
    res.json(services);
  } catch (err: any) {
    // send status code 500 with message to client (means server's fault)
    res.status(500).json({ message: err.message });
  }
});


// get one
router.get('/:id', getService, async (req, res: any) => {



  res.send(res.service);
});

router.post('/', async (req, res) => {


  console.log(req.body)



  req.body.secondaryID=req.body.serviceName.toLowerCase().replace(/\s/g, '-')


  console.log(req.body)

  const service = CounsellingService.build(req.body);
  try {
    const newService = await service.save();
    // 201 means successfully created object
    res.status(201).json(newService);
  } catch (error: any) {
    // 400 means something wrong with use input
    res.status(400).json({ message: error.message });
  }
});
// update one (only info that is passed e.g. hours)
router.patch('/:id', async (req, res: any) => {

  try {
    // get update version of service if save success
    await CounsellingService.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated Service." });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});
// delete one
router.delete('/:id', getService, async (req, res: any) => {
  try {
    await res.service.remove();
    res.json({ message: "Deleted Service." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// middleware
async function getService(req: any, res: any, next: any) {
  let service;
  try {
    service = await CounsellingService.findById(req.params.id);
    if (service == null) {
      // means we couldnt find it
      return res.status(404).json({ message: 'Cannot find service' });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }

  // set service in response object
  res.service = service;
  // called passed in function
  next();
}

module.exports = router;
