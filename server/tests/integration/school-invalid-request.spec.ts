import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

import { missingNameData, missingUidData, nonStringAbbreviationData, nonStringMentalHealthCoverageData }
	from './data/school-invalid-request-data';
import { StatusCode } from '../../utils/status-code.enum';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('School Invalid Requests', () => {

	describe('POST /schools', () => {
		it('should reject missing uid', async () => {
			const result = await chai.request(server)
				.post('/schools')
				.send(missingUidData);
			result.should.have.status(StatusCode.BAD_REQUEST);
		});

		it('should reject missing name', async () => {
			const result = await chai.request(server)
				.post('/schools')
				.send(missingNameData);
			result.should.have.status(StatusCode.BAD_REQUEST);
		});

		it('should reject non-string abbreviation', async () => {
			const result = await chai.request(server)
				.post('/schools')
				.send(nonStringAbbreviationData);
			result.should.have.status(StatusCode.BAD_REQUEST);
		});

		it('should reject non-string mental health coverage', async () => {
			const result = await chai.request(server)
				.post('/schools')
				.send(nonStringMentalHealthCoverageData);
			result.should.have.status(StatusCode.BAD_REQUEST);
		});
	});
});
