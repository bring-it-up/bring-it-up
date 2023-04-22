/* eslint-disable react/jsx-indent */ // TODO: Remove after fixing lint issue
import { Stack } from '@mui/system';
import FilterDropdown from './FilterDropdown';
import { ReactElement } from 'react';
import { FilterOption, Filters } from '../types/filters.types';
import { ANY_FILTER_OPTION } from '../utils/filters.utils';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

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

    const clearFilters = () => {
        const newFilterObj: Filters = {};
        Object.values(filters).forEach(filter => {
            const resetOptions: FilterOption[] = filter.options.map(option => {
                return {
                    ...option,
                    selected: !filter.multiSelect && option.value === ANY_FILTER_OPTION.value
                };
            });
            newFilterObj[filter.category] = {
                ...filter,
                options: resetOptions,
            };
        });
        setFilters(newFilterObj);
    };

    return (
        <Stack
            className="filterBarContainer"
        >
            <ButtonUnstyled
                className="clearFiltersButton"
                onClick={clearFilters}
            >
                Clear All Filters
            </ButtonUnstyled>
            <Stack
                className="filterBarStack"
                spacing={3}
            >
                { dropdowns }
            </Stack>
        </Stack>
    );
};

export default FilterBar;