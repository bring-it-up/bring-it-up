import { DeliveryMethod } from '../types/delivery-method.enum';
import { FilterOption } from '../types/filters.types';
import { ServiceType } from '../types/service-type.enum';
import { Specialties } from '../types/specialty.type';

export type FilterEnum = typeof ServiceType | typeof DeliveryMethod;

export const convertEnumToFilterOptions = (filterEnum: FilterEnum): FilterOption[] => {
    return Object.values(filterEnum).map(value => {
        return {
            label: value,
            value,
            selected: false,
        };
    });
};

export const convertSpecialtiesToFilterOptions = (specialties: Specialties): FilterOption[] => {
    return Object.values(specialties).map(specialty => {
        return {
            label: specialty.label,
            value: specialty.id,
            selected: false,
        };
    });
};