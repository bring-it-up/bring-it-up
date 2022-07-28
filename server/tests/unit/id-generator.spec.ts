import chai from 'chai';
import { generateSecondaryId } from '../../utils/id-generator.util';

const expect = chai.expect;

describe('ID Generator', () => {
    const runTest = (description: string, input: string, expectedOutput: string) => {
        it(description, () => {
            const result = generateSecondaryId(input);
            expect(result).to.equal(expectedOutput);
        });
    };

    runTest(
        'should return an alphanumeric lowercase ID separated by dashes', 
        'UBC Counselling Services', 'ubc-counselling-services'
    );
});