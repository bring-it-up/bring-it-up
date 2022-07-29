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
        'should return a lowercase ID separated by dashes', 
        'UBC Counselling Services', 'ubc-counselling-services'
    );

    runTest(
        'should remove non-alphanumeric characters', 
        'Student Assistance Program (UBC)', 'student-assistance-program-ubc'
    );

    runTest(
        'should create a single word alphanumeric ID', 
        'Here2Talk', 'here2talk'
    );

    runTest(
        'should remove existing dashes', 
        'Counselling Services - Capilano', 'counselling-services-capilano'
    );

    runTest(
        'should remove extra white spaces', 
        'SFU My   SSP', 'sfu-my-ssp'
    );
});