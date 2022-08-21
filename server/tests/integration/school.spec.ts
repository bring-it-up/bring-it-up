import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../index";

import {describe} from "mocha";
import {School} from "../../models/school.model";
import {schoolData1, schoolData2} from "./data/school-data";
import {StatusCode} from "../../utils/status-code.enum";

const should = chai.should();

chai.use(chaiHttp);

describe('Schools', () => {
    beforeEach(async () => {
        await School.remove({});
        const school = new School(schoolData1);
        await school.save();
    });

    describe('GET /schools', () => {
        it('should get all schools', async () => {
            const result = await chai.request(server).get('/schools');
            result.should.have.status(StatusCode.OK);
            result.body.should.be.a('array');
            result.body.length.should.be.eql(1);
        });
    });

    describe('GET /schools/:identifier', () => {
        it('should get a school', async () => {
            const result = await chai.request(server).get('/schools/ubcv');
            result.should.have.status(StatusCode.OK);
        });
    });

    describe('POST /schools', () => {
        it ('should create a school', async () => {
            const result = await chai.request(server).post('/schools').send(schoolData2);
            result.should.have.status(StatusCode.CREATED);
        });

        it ('should not create a duplicate school', async () => {
            await chai.request(server).post('/schools').send(schoolData2);
            const result = await chai.request(server).post('/schools').send(schoolData2);
            result.should.have.status(StatusCode.BAD_REQUEST);
        });
    });

    describe('DEL /schools/:identifier', () => {
        it ('should delete a school', async () => {
            const postResult = await chai.request(server).delete('/schools/ubcv');
            postResult.should.have.status(StatusCode.OK);
            const getResult = await chai.request(server).get('/schools/ubcv');
            getResult.should.have.status(StatusCode.NOT_FOUND);
        });
    });
});
