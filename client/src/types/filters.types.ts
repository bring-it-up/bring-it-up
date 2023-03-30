export type FilterOption = {
	label: string;
	value: string;
	selected: boolean;
	disabled?: boolean;
};

export type Filters = {
    [categoryName: string]: FilterOption[];
};