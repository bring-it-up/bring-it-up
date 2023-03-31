import { Stack } from '@mui/system';
import FilterDropdown from './FilterDropdown';
import { ReactElement } from 'react';
import { Filters } from '../types/filters.types';

type FilterBarProps = {
    filters: Filters;
    setFilters: (filters: Filters) => void;
};

const FilterBar = ({ filters, setFilters }: FilterBarProps): ReactElement => {
    const dropdowns = Object.entries(filters).map(([category, options]) => {
        return (
            <FilterDropdown
                key={category}
                category={category}
                options={options}
                onOptionChange={(option, newVal) => {
                    const optionIndex = options.findIndex(o => o.value === option.value);
                    setFilters({
                        ...filters,
                        [category]: [
                            ...filters[category].slice(0, optionIndex),
                            { ...option, selected: newVal },
                            ...filters[category].slice(optionIndex + 1),
                        ]
                    });
                }}
            />
        );
    });

    return (
        <Stack>
            { dropdowns }
        </Stack>
    );
};

export default FilterBar;