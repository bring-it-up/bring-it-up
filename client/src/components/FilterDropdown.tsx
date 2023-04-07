import { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FILTER_CATEGORIES, Filter, FilterOption } from '../types/filters.types';
import { purple } from '@mui/material/colors';

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
				labelPlacement="start"
				classes={{ root: 'filterLabel' }}
				control={filter.multiSelect ?
					<Checkbox
						disabled={option.disabled}
						checked={option.selected}
						onChange={() => onOptionChange(option, !option.selected)}
						sx={{ ...inputColorSxProps }}
					/> :
					<Radio
						disabled={option.disabled}
						value={option.value}
						sx={{ ...inputColorSxProps }}
					/>
				}
				key={option.value}
				label={option.label}
			/>
		);
	});

	return (
		<div>
			<Accordion
				defaultExpanded
				classes={{ root: 'filterAccordion' }}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography fontWeight={700}>{ categoryName }</Typography>
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
		</div>
	);
};

const inputColorSxProps = {
	'&.Mui-checked': {
		color: purple[800],
	},
};

export default FilterDropdown;
