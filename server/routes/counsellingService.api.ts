import express from 'express';
const router = express.Router();
const { CounsellingService } = require('../models/counsellingService.model')


// get all
router.get('/', async (req, res) => {
  try {
    const services = await CounsellingService.find();
    res.json(services);
  } catch (err: any) {
    // send status code 500 with message to client (means server's fault)
    res.status(500).json({ message: err.message })
  }
})

// get one
router.get('/:id', getService, async (req, res: any) => {
  res.send(res.service)
})
// create one
router.post('/', async (req, res) => {
  const service = CounsellingService.build(req.body);
  try {
    const newService = await service.save()
    // 201 means successfully created object
    res.status(201).json(newService);
  } catch (error: any) {
    // 400 means something wrong with use input
    res.status(400).json({ message: error.message })
  }
})
// update one (only info that is passed e.g. hours)
router.patch('/:id', getService, async (req, res: any) => {
  if (req.body.serviceName != null) {
    res.service.serviceName = req.body.serviceName
  }
  try {
    // get update version of service if save success
    const updatedService = await res.service.save()
    res.json(updatedService)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
})
// delete one
router.delete('/:id', getService, async (req, res: any) => {
  try {
    await res.service.remove()
    res.json({ message: "Deleted Service." })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

// middleware
async function getService(req: any, res: any, next: any) {
  let service
  try {
    service = await CounsellingService.findById(req.params.id)
    if (service == null) {
      // means we couldnt find it
      return res.status(404).json({ message: 'Cannot find service' })
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message })
  }

  // set service in response object
  res.service = service
  // called passed in function
  next()
}

module.exports = router