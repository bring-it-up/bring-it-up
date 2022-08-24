import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import { CounsellingService } from '../../models/counsellingService.model';
import { service1Data, service2Data } from './data/counselling-service-data';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Counselling Services', () => {
    beforeEach(async () => {
        await CounsellingService.remove({});
        const service = new CounsellingService(service1Data);
        await service.save();
    });

    describe('GET /counselling-services', () => {
        it('should get all counselling services', async () => {
            const result = await chai.request(server)
                .get('/counselling-services');
            result.should.have.status(200);
            result.body.should.be.a('array');
            result.body.length.should.be.eql(1);
        });
    });

    describe('GET /counselling-services?school=ubc', () => {
        it('should get services with school ubc', async () => {
            const result = await chai.request(server)
                .get('/counselling-services?school=ubc');
            result.should.have.status(200);
            result.body.should.be.a('array');
            result.body.length.should.be.eql(1);
            for (let i = 0; i < result.body.length; i++) {
                result.body[i].should.have.property('school', "UBC");
            }
        });
    });

    describe('POST /counselling-services', () => {
        it('should create a counselling service', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(service2Data);
            result.should.have.status(201);
        });

        it('should reject duplicate services', async () => {
            await chai.request(server)
                .post('/counselling-services')
                .send(service2Data);
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(service2Data);
            result.should.have.status(400);
        });
    });

    describe('GET /counselling-services?school=ubc&school=sfu', () => {
        it('should get services with school ubc or sfu', async () => {
            const result = await chai.request(server)
                .get('/counselling-services?school=ubc&school=sfu');
            result.should.have.status(200);
            result.body.should.be.a('array');
            result.body.length.should.be.eql(2);
            for (let i = 0; i < result.body.length; i++) {
                result.body[i].property('school').should.be.oneOf(["UBC", "SFU"]);
            }
        });
    });

    describe('GET /counselling-services?urgency=Immediate&delivery=App', () => {
        it('should get services with urgency Immediate and delivery including App', async () => {
            const result = await chai.request(server)
                .get('/counselling-services?urgency=Immediate&delivery=App');
            result.should.have.status(200);
            result.body.should.be.a('array');
            result.body.length.should.be.eql(1);
            for (let i = 0; i < result.body.length; i++) {
                result.body[i].should.have.property('urgency', "Immediate").and.property('delivery').should.include("App");
            }
        });
    });
});
