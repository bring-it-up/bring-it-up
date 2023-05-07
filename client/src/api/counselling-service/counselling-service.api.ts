import { BASE_URL } from '../../constants';
import { FILTER_CATEGORIES, Filters } from '../../types/filters.types';
import { ANY_FILTER_OPTION } from '../../utils/filters.utils';

type GetCounsellingServicesOptions = {
    searchString?: string;
    filters?: Filters;
};

export const getCounsellingServices = async (options?: GetCounsellingServicesOptions) => {
    let queryStr = '';
    if (options?.searchString) queryStr = `searchString=${options.searchString}`;
    else if (options?.filters) queryStr = convertFiltersToQueryStr(options.filters);

    const res = await fetch(`${BASE_URL}/counselling-services?${queryStr}`);
    return await res.json();
};

export const getCounsellingServiceById = async (serviceId: string) => {
    const res = await fetch(`${BASE_URL}/counselling-services/${serviceId}`);
    return await res.json();
};

const convertFiltersToQueryStr = (filters: Filters): string => {
    const queryStr: string[] = [];

    Object.values(filters).forEach((filter) => {
        const categoryParam = FILTER_CATEGORIES[filter.category].queryParam;
        if (!filter.multiSelect && filter.options.find(o => o.value === ANY_FILTER_OPTION.value)?.selected) return; // 'Any' selected, so skip
        filter.options.forEach(option => {
            if (option.selected) queryStr.push(`${categoryParam}=${option.value}`);
        });
    });

    return queryStr.join('&');
};