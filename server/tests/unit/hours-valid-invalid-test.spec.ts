import chai from 'chai';
import { isValidHour } from '../../middleware/hours-request-validator';
import {
    invalidHourData,
    invalidSpecialHourData,
    invalidNumHours,
    invalidDay
} from './data/invalid-hour-data'
import {
    validHourData,
    validSpecialHourData
} from './data/valid-hour-data'

const expect = chai.expect;

describe('Hours Validator', () => {
    const runTest = (description: string, input: Object, expectedOutput: boolean) => {
        it(description, () => {
            const result = isValidHour(input);
            expect(result).to.equal(expectedOutput);
        });
    };

    runTest(
        'should reject invalid hour data', 
        invalidHourData, false
    );

    runTest(
        'should reject invalid special hour data', 
        invalidSpecialHourData, false
    );

    runTest(
        'should reject invalid number of hours', 
        invalidNumHours, false
    );

    runTest(
        'should reject invalid day name', 
        invalidDay, false
    );

    runTest(
        'should accept valid hour data', 
        validHourData, true
    );

    runTest(
        'should accept valid special hour data', 
        validSpecialHourData, true
    );
});