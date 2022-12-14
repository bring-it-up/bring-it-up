import { SpecialtyEnum } from "../models/specialty.enum";
import { Specialty, SpecialtyMap } from "../models/specialty.model";

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

export const SPECIALTY_MAP = generateSpecialtyMap();

export const getSpecialtyFromId = (id: string): Specialty => SPECIALTY_MAP[id];

export const getSpecialtyListFromIds = (ids: string[]): Specialty[] => ids.map(getSpecialtyFromId);

export const getSpecialtyIdsFromSpecialtyList = (specialties: Specialty[]): string[] => {
    return specialties.map(specialty => specialty.id);
};

export const isValidSpecialtyId = (id: string) => id in SPECIALTY_MAP;