export type FilterOption = {
	label: string;
	value: string;
	selected: boolean;
	disabled?: boolean;
};

export type Filters = {
    [categoryName: string]: Filter;
};

export type Filter = {
    category: FilterCategory;
    options: FilterOption[];
    multiSelect?: boolean;
};

export enum FilterCategory {
    ServiceType = 'ServiceType',
    DeliveryMethod = 'DeliveryMethod',
    Specialty = 'Specialty',
    Urgency = 'Urgency',
    School = 'School',
}

export const FILTER_CATEGORIES = {
    [FilterCategory.ServiceType]: {
        queryParam: 'serviceType',
        label: 'Support Type',
    },
    [FilterCategory.DeliveryMethod]: {
        queryParam: 'delivery',
        label: 'Delivery Method',
    },
    [FilterCategory.Urgency]: {
        queryParam: 'urgency',
        label: 'Urgency',
    },
    [FilterCategory.Specialty]: {
        queryParam: 'specialty',
        label: 'Specialty',
    },
    [FilterCategory.School]: {
        queryParam: 'school',
        label: 'School',
    }
};