import { Stack } from '@mui/system';
import FilterDropdown from './FilterDropdown';
import { ReactElement } from 'react';
import { FilterOption, Filters } from '../types/filters.types';

type FilterBarProps = {
    filters: Filters;
    setFilters: (filters: Filters) => void;
};

const FilterBar = ({ filters, setFilters }: FilterBarProps): ReactElement => {
    const dropdowns = Object.values(filters).map((filter) => {
        const onMultiSelectOptionChange = (option: FilterOption, newVal: boolean) => {
            const optionIndex = options.findIndex(o => o.value === option.value);
            setFilters({
                ...filters,
                [filter.category]: {
                    ...filter,
                    options: [
                        ...options.slice(0, optionIndex),
                        { ...option, selected: newVal },
                        ...options.slice(optionIndex + 1),
                    ]
                }
            });
        };

        const onSingleSelectOptionChange = (value: string) => {
            const newOptionsState = options.map(option => {
                return {
                    ...option,
                    selected: option.value === value,
                };
            });
            setFilters({
                ...filters,
                [filter.category]: {
                    ...filter,
                    options: newOptionsState,
                }
            });
        };

        const options = filter.options;
        return (
            <FilterDropdown
                key={filter.category}
                filter={filter}
                onOptionChange={onMultiSelectOptionChange}
                onRadioSelect={onSingleSelectOptionChange}
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