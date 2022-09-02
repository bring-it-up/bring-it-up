import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import { validHourData, validSpecialHourData } from "./data/valid-request-data";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Counselling Services Valid Requests', () => {

    describe('POST /counselling-services', () => {

        it('should accept valid hour', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(validHourData);
            result.should.have.status(201);
        });

        it('should accept valid special hour', async () => {
            const result = await chai.request(server)
                .post('/counselling-services')
                .send(validSpecialHourData);
            result.should.have.status(201);
        });

    });
});