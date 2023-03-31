export type FilterOption = {
	label: string;
	value: string;
	selected: boolean;
	disabled?: boolean;
};

export type Filters = {
    [categoryName: string]: FilterOption[];
};

export enum FilterCategory {
    ServiceType = 'ServiceType',
    DeliveryMethod = 'DeliveryMethod',
    Specialty = 'Specialty',
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
    [FilterCategory.Specialty]: {
        queryParam: 'specialty',
        label: 'Specialty',
    }
};