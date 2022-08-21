import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import {
    invalidDeliveryData,
    invalidIsAllDayData,
    invalidServiceNameData,
    invalidServiceTypeData,
    invalidSpecialtyData,
    invalidTargetClientsData,
    invalidUrgencyData,
    missingServiceNameData,
    nonArrayTargetClientsData
} from "./data/invalid-request-data";
import {StatusCode} from "../../utils/status-code.enum";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

chai.use(chaiHttp);

describe('Counselling Services Invalid Requests', () => {

    describe('POST /counselling-services', () => {
        it('should reject missing service name', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(missingServiceNameData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid service name', async () => {
           const result = await chai.request(server)
               .post('/counselling-services')
               .send(invalidServiceNameData);
           result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid service type', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(invalidServiceTypeData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid urgency', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(invalidUrgencyData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid target clients', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(invalidTargetClientsData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject non-array target clients ', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(nonArrayTargetClientsData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid is all day', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(invalidIsAllDayData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid delivery', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(invalidDeliveryData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });

        it('should reject invalid specialty', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(invalidSpecialtyData);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });
    });
});