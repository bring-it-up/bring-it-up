import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import { CounsellingService } from '../../models/counsellingService.model';
import { service1Data, service2Data, service3Data } from './data/counselling-service-data';
import { StatusCode } from "../../utils/status-code.enum";
import { generateSecondaryId } from "../../utils/id-generator.util";
import {schoolData1, schoolData2} from "./data/school-data";
import {School} from "../../models/school.model";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Counselling Services', () => {
    beforeEach(async () => {
        await CounsellingService.deleteMany({});
        await School.deleteMany();
        const service1 = new CounsellingService(service1Data);
        await service1.save();
        const service2 = new CounsellingService(service2Data);
        await service2.save();
        const school1 = new School(schoolData1);
        await school1.save();
        const school2 = new School(schoolData2);
        await school2.save();
    });

    describe('GET /counselling-services', () => {
        it('should get all counselling services', async () => {
            const response = await chai.request(server)
                .get('/counselling-services');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(2);
            if (response.body[0].serviceName == service1Data.serviceName) {
                assertCounsellingService(response.body[0], service1Data, schoolData1);
                assertCounsellingService(response.body[1], service2Data, schoolData2);
            } else {
                assertCounsellingService(response.body[0], service2Data, schoolData2);
                assertCounsellingService(response.body[1], service1Data, schoolData1);
            }
        });

        it('should get counselling services with keyword ubc', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?searchString=ubc');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertCounsellingService(response.body[0], service1Data, schoolData1);
        });

        it('should get counselling services with keyword ssp', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?searchString=ssp');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertCounsellingService(response.body[0], service2Data, schoolData2);
        });

        it('should get counselling services with school ubc', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?school=ubcv');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertCounsellingService(response.body[0], service1Data, schoolData1);
        });

        it('should get counselling services with school ubc or sfu', async () => {
            const response = await chai.request(server).get('/counselling-services?school=ubc&school=sfu');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(2);
            if (response.body[0].serviceName == service1Data.serviceName) {
                assertCounsellingService(response.body[0], service1Data, schoolData1);
                assertCounsellingService(response.body[1], service2Data, schoolData2);
            } else {
                assertCounsellingService(response.body[0], service2Data, schoolData2);
                assertCounsellingService(response.body[1], service1Data, schoolData1);
            }
        });

        it('should get counselling services with urgency Immediate and delivery including App', async () => {
            const response = await chai.request(server).get('/counselling-services?urgency=Immediate&delivery=App');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertCounsellingService(response.body[0], service2Data, schoolData2);
        });

        it('should get no counselling services', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?searchString=none');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(0);
        });
    });

    describe('GET /counselling-services/:id', () => {
        it('should get the counselling service with id = student-assistance-program-sap', async () => {
            const id = generateSecondaryId(service1Data.serviceName);
            const response = await chai.request(server)
                .get('/counselling-services/' + id);
            response.should.have.status(StatusCode.OK);
            assertCounsellingService(response.body, service1Data, schoolData1);
        });

        it('should get the counselling service with id = my-ssp', async () => {
            const id = generateSecondaryId(service2Data.serviceName);
            const response = await chai.request(server)
                .get('/counselling-services/' + id);
            response.should.have.status(StatusCode.OK);
            assertCounsellingService(response.body, service2Data, schoolData2);
        });

        it('should get no counselling service', async () => {
            const response = await chai.request(server)
                .get('/counselling-services/none');
            response.should.have.status(StatusCode.NOT_FOUND);
        });
    });

    describe('POST /counselling-services', () => {
        it('should create a counselling service', async () => {
            const response = await chai.request(server)
                .post('/counselling-services')
                .send(service3Data);
            response.should.have.status(StatusCode.CREATED);
        });

        it('should reject duplicate services', async () => {
            const response1 = await chai.request(server)
                .post('/counselling-services')
                .send(service3Data);
            response1.should.have.status(StatusCode.CREATED);
            const response2 = await chai.request(server)
                .post('/counselling-services')
                .send(service3Data);
            response2.should.have.status(StatusCode.BAD_REQUEST);
        });
    });

    after(async () => {
        await CounsellingService.deleteMany({});
    });
});

function assertCounsellingService(service: any, serviceData: any, schoolData: any) {
    const keys = ['serviceName', 'organization', 'serviceType', 'urgency', 'targetClients',
        'website', 'specialty', 'delivery', 'serviceName', 'secondaryID'];


    for (const key of keys) {
        if (key === 'specialty') {
            checkSpecialtyField(service[key]);
        } else {
            service[key].should.be.eql(serviceData[key]);
        }
    }

    service.should.have.property('school');
    service.school.should.eql(schoolData);

    service.should.not.have.property('_id');
    service.should.not.have.property('__v');
    service.should.not.have.property('school._id');
    service.should.not.have.property('school.__v');
}

const checkSpecialtyField = (specialtyField: any) => {
    specialtyField.should.be.an('array');

    for (const specialty of specialtyField) {
        specialty.should.be.an('object');
        specialty.should.have.property('id');
        specialty.should.have.property('label');
    }
};
