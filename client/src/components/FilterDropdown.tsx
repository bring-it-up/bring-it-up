import { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterOption } from '../types/filters.types';

type Props = {
	categoryName: string;
	options: FilterOption[];
	onOptionChange: (filterOption: FilterOption, value: boolean) => void;
};

const FilterDropdown = ({ categoryName, options, onOptionChange }: Props): ReactElement => {
	const formControls = options.map((option: FilterOption) => {
		return (
			<FormControlLabel
				control={
					<Checkbox
						disabled={option.disabled}
						checked={option.selected}
						onChange={() => onOptionChange(option, !option.selected)}
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
				<FormGroup>
					{ formControls }
				</FormGroup>
			</AccordionDetails>
		</Accordion>
	);
};

export default FilterDropdown;
