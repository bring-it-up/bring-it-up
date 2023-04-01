import { DeliveryMethod } from '../types/delivery-method.enum';
import { FilterOption } from '../types/filters.types';
import { School } from '../types/school.types';
import { ServiceType } from '../types/service-type.enum';
import { Specialties } from '../types/specialty.type';
import { UrgencyLevel } from '../types/urgency-level.enum';

export type FilterEnum = typeof ServiceType | typeof DeliveryMethod | typeof UrgencyLevel;

export const ALL_FILTER_OPTION: FilterOption = { // Coresponds to 'All' in single-select filters
	label: 'All',
	value: '*',
	selected: true,
};

export const convertEnumToFilterOptions = (filterEnum: FilterEnum, singleSelect?: boolean): FilterOption[] => {
    const options: FilterOption[] = [];
    if (singleSelect) options.push(ALL_FILTER_OPTION);

    return options.concat(Object.values(filterEnum).map(value => {
        return {
            label: value,
            value,
            selected: false,
        };
    }));
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

export const convertSchoolsToFilterOptions = (schools: School[]): FilterOption[] => {
    // const options: FilterOption[] = [];
    const options = [ALL_FILTER_OPTION];
    return options.concat(Object.values(schools).map(school => {
        return {
            label: school.abbreviation,
            value: school.uid,
            selected: false,
        };
    }));
};