import chaiHttp from "chai-http";
import {describe} from "mocha";
import {School} from "../../models/school.model";

chai.use(chaiHttp);

describe('Schools', () => {
    beforeEach(async () => {
        await School.remove({});
        // TODO: add data to school object
        const school = new School();
        await school.save();
    });

    describe('GET /schools', () => {
        it('should get all schools', async () => {
            // TODO
        });
    });

    describe('GET /schools/:id', () => {
        it('should get a school', async () => {
            // TODO
        });
    });

    describe('POST /schools', () => {
        it ('should create a school', async () => {
            // TODO
        });

        it ('should not create a duplicate school', async () => {
            // TODO
        });
    });

    describe('DEL /schools/:id', () => {
        it ('should delete a school', async () => {
            // TODO
        });
    });
});
