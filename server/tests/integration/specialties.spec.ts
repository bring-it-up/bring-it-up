import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import { SpecialtyEnum } from '../../models/specialty.enum';
import { StatusCode } from '../../utils/status-code.enum';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Counselling Service Specialties', () => {
    
    describe('GET /specialties', () => {
        it('should get all specialties', async () => {
            const response = await chai.request(server)
                .get('/specialties');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.an('object');

            const specialtyKeys = Object.keys(SpecialtyEnum);
            const specialtyLabels = Object.values(SpecialtyEnum);

            for (const key in response.body) {
                specialtyKeys.should.include(key);
                const specialtyObj = response.body[key];
                specialtyObj.should.be.an('object');
                specialtyObj.should.have.property('id');
                specialtyObj.should.have.property('label');
                specialtyLabels.should.include(specialtyObj.label);
            }
        });
    });
});