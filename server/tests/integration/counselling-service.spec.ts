import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import { CounsellingService } from '../../models/counsellingService.model';
import { service1Data, service2Data, service3Data } from './data/counselling-service-data';
import { StatusCode } from "../../utils/status-code.enum";
import { generateSecondaryId } from "../../utils/id-generator.util";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Counselling Services', () => {
    beforeEach(async () => {
        await CounsellingService.deleteMany({});
        const service1 = new CounsellingService(service1Data);
        await service1.save();
        const service2 = new CounsellingService(service2Data);
        await service2.save();
    });

    describe('GET /counselling-services', () => {
        it('should get all counselling services', async () => {
            const response = await chai.request(server)
                .get('/counselling-services');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(2);
        });

        it('should get all counselling services with keyword ubc', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?searchString=ubc');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertCounsellingService(response.body[0], service1Data);
        });

        it('should get all counselling services with keyword ssp', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?searchString=ssp');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertCounsellingService(response.body[0], service2Data);
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
        it('should get a counselling service', async () => {
            const id = generateSecondaryId(service1Data.serviceName);
            const response = await chai.request(server)
                .get('/counselling-services/' + id);
            response.should.have.status(StatusCode.OK);
            assertCounsellingService(response.body, service1Data);
        });

        it('should get no counselling service', async () => {
            const response = await chai.request(server)
                .get('/counselling-services/none');
            response.should.have.status(StatusCode.NOT_FOUND);
        });

        it('should get services with school ubc', async () => {
            const response = await chai.request(server)
                .get('/counselling-services?school=ubc');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            for (let i = 0; i < response.body.length; i++) {
                response.body[i].should.have.property('school', "UBC");
            }
        });

        it('should get services with school ubc or sfu', async () => {
            const response = await chai.request(server).get('/counselling-services?school=ubc&school=sfu');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(2);
            for (const i in response.body) {
                response.body[i].school.should.be.oneOf(["UBC", "SFU"]);
            }
            return;
        });

        it('should get services with urgency Immediate and delivery including App', async () => {
            const response = await chai.request(server).get('/counselling-services?urgency=Immediate&delivery=App');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            for (const i in response.body) {
                response.body[i].should.have.property('urgency', "Immediate");
                response.body[i].delivery.should.include("App");
            }
            return;
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

function assertCounsellingService(service: any, serviceData: any) {
    const keys = ['serviceName', 'organization', 'serviceType', 'urgency', 'targetClients', 'isAllDay', 'website',
    'specialty', 'delivery', 'serviceName', 'secondaryID'];
    for (let key of keys) {
        service[key].should.be.deep.eql(serviceData[key]);
    }
}
