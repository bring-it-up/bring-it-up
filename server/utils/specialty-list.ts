import { SpecialtyEnum } from "../models/specialty.enum";
import { SpecialtyMap } from "../models/specialty.model";

export const generateSpecialtyMap = (): SpecialtyMap => {
    const result: SpecialtyMap = {};
    const specialtyEnumKeys = Object.keys(SpecialtyEnum);
    const specialtyEnumValues = Object.values(SpecialtyEnum);
    specialtyEnumKeys.forEach((id, index) => {
        result[id] = {
            id,
            label: specialtyEnumValues[index],
        };
    });
    return result;
};
