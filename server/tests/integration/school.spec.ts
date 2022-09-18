import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../index";

import {describe} from "mocha";
import {School} from "../../models/school.model";
import {schoolData1, schoolData2, schoolData3} from "./data/school-data";
import {StatusCode} from "../../utils/status-code.enum";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Schools', () => {
    beforeEach(async () => {
        await School.deleteMany({});
        const school1 = new School(schoolData1);
        await school1.save();
        const school2 = new School(schoolData2);
        await school2.save();
    });

    describe('GET /schools', () => {
        it('should get all schools', async () => {
            const response = await chai.request(server).get('/schools');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(2);
        });

        it('should get school with uid = ubcv', async () => {
            const response = await chai.request(server).get('/schools?uid=ubcv');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertSchool(response.body[0], schoolData1);
        });

        it('should get no schools', async () => {
            const response = await chai.request(server).get('/schools?uid=none');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(0);
        });

        it('should get schools with name = Simon Fraser University and abbreviation = SFU', async () => {
            const response = await chai.request(server).get('/schools?name=Simon+Fraser+University&abbreviation=SFU');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertSchool(response.body[0], schoolData2);
        });

        it('should get schools with uid = ubcv or uid = sfu', async () => {
            const response = await chai.request(server).get('/schools?uid=ubcv&uid=sfu');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(2);
            for (const i in response.body) {
                response.body[i].uid.should.be.oneOf([schoolData1.uid, schoolData2.uid]);
                response.body[i].name.should.be.oneOf([schoolData1.name, schoolData2.name]);
                response.body[i].abbreviation.should.be.oneOf([schoolData1.abbreviation, schoolData2.abbreviation]);
                response.body[i].mentalHealthCoverage.should.be.oneOf([schoolData1.mentalHealthCoverage, schoolData2.mentalHealthCoverage]);
            }
        });

        it('should get schools with keyword Vancouver', async () => {
            const response = await chai.request(server).get('/schools?searchString=Vancouver');
            response.should.have.status(StatusCode.OK);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            assertSchool(response.body[0], schoolData1);
        });
    });

    describe('GET /schools/:uid', () => {
        it('should get a school with uid = ubcv', async () => {
            const response = await chai.request(server).get('/schools/ubcv');
            response.should.have.status(StatusCode.OK);
            assertSchool(response.body, schoolData1);
        });

        it('should get no school', async () => {
            const response = await chai.request(server).get('/schools/none');
            response.should.have.status(StatusCode.NOT_FOUND);
            assertSchool(response.body, schoolData1);
            response.body.should.not.have.property('_id');
            response.body.should.not.have.property('__v');
        });
    });

    describe('POST /schools', () => {
        it ('should create a school', async () => {
            const response = await chai.request(server).post('/schools').send(schoolData3);
            response.should.have.status(StatusCode.CREATED);
            assertSchool(response.body, schoolData3);
        });

        it ('should not create a duplicate school', async () => {
            const response = await chai.request(server).post('/schools').send(schoolData1);
            response.should.have.status(StatusCode.BAD_REQUEST);
        });
    });

    describe('DEL /schools/:uid', () => {
        it ('should delete a school', async () => {
            const delResponse = await chai.request(server).delete('/schools/ubcv');
            delResponse.should.have.status(StatusCode.OK);
            const getResponse = await chai.request(server).get('/schools/ubcv');
            getResponse.should.have.status(StatusCode.NOT_FOUND);
        });
    });

    after(async () => {
        await School.deleteMany({});
    });
});

function assertSchool(school: any, schoolData: any) {
    school.uid.should.be.eql(schoolData.uid);
    school.name.should.be.eql(schoolData.name);
    school.abbreviation.should.be.eql(schoolData.abbreviation);
    school.mentalHealthCoverage.should.be.eql(schoolData.mentalHealthCoverage);
}