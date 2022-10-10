import chai from 'chai';
import { isValidHour } from '../../middleware/hours-request-validator';
import {
    invalidHourData,
    invalidHourDataType,
    invalidNumHours,
    invalidDay,
    invalidNumHourDataValues
} from './data/invalid-hour-data';
import {
    validHourData,
    validSpecialHourData
} from './data/valid-hour-data';

const expect = chai.expect;

describe('Hours Validator', () => {
    const runTest = (description: string, input: object, expectedOutput: boolean) => {
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
        'should reject invalid hour data type', 
        invalidHourDataType, false
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
        'should reject invalid number of hours', 
        invalidNumHourDataValues, false
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