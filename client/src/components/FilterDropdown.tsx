import { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FILTER_CATEGORIES, Filter, FilterOption } from '../types/filters.types';

type Props = {
	filter: Filter;
	onOptionChange: (filterOption: FilterOption, value: boolean) => void;
	onRadioSelect: (value: string) => void;
};

const FilterDropdown = ({ filter, onOptionChange, onRadioSelect }: Props): ReactElement => {
	const categoryName = FILTER_CATEGORIES[filter.category].label;
	const formControls = filter.options.map((option: FilterOption) => {
		return (
			<FormControlLabel
				control={filter.multiSelect ?
					<Checkbox
						disabled={option.disabled}
						checked={option.selected}
						onChange={() => onOptionChange(option, !option.selected)}
					/> :
					<Radio
						disabled={option.disabled}
						value={option.value}
					/>
				}
				key={option.value}
				label={option.label}
			/>
		);
	});

	return (
		<Accordion defaultExpanded>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
			>
				<Typography>{ categoryName }</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{ filter.multiSelect && (
					<FormGroup>
						{ formControls }
					</FormGroup>
				) }
				{ !filter.multiSelect && (
					<RadioGroup
						value={filter.options[filter.options.findIndex(o => o.selected)]?.value}
						onChange={(e) => onRadioSelect((e.target as HTMLInputElement).value)}
					>
						{ formControls }
					</RadioGroup>
				) }
			</AccordionDetails>
		</Accordion>
	);
};

export default FilterDropdown;
