import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import { CounsellingService } from '../models/counsellingService.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Counselling Services', () => {
    beforeEach(async () => {
        await CounsellingService.remove({});
    });

    describe('GET /counselling-services', () => {
        it('should get all counselling services', async () => {
            const result = await chai.request(server)
                .get('/counselling-services');
            result.should.have.status(200);
            result.body.should.be.a('array');
            result.body.length.should.be.eql(0);
        });
    });
});
