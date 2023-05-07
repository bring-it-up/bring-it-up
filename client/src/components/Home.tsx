import { ReactElement, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Service from '../Service';
import SearchBar from './SearchBar';
import { Grid, Stack, Typography } from '@mui/material';
import FilterBar from './FilterBar';
import { FilterCategory, Filters } from '../types/filters.types';
import { ANY_FILTER_OPTION, convertEnumToFilterOptions, convertSchoolsToFilterOptions, convertSpecialtiesToFilterOptions } from '../utils/filters.utils';
import { ServiceType } from '../types/service-type.enum';
import { DeliveryMethod } from '../types/delivery-method.enum';
import { Specialties } from '../types/specialty.type';
import { UrgencyLevel } from '../types/urgency-level.enum';
import { School } from '../types/school.types';
import { getCounsellingServices } from '../api/counselling-service/counselling-service.api';
import { getSchools } from '../api/school/school.api';
import { getSpecialties } from '../api/specialty/specialty.api';

const defaultFilters: Filters = {
    [FilterCategory.ServiceType]: {
		category: FilterCategory.ServiceType,
		multiSelect: true,
		options: convertEnumToFilterOptions(ServiceType),
	},
	[FilterCategory.DeliveryMethod]: {
		category: FilterCategory.DeliveryMethod,
		multiSelect: true,
		options: convertEnumToFilterOptions(DeliveryMethod),
	},
	[FilterCategory.Urgency]: {
		category: FilterCategory.Urgency,
		options: convertEnumToFilterOptions(UrgencyLevel, true),
	},
	[FilterCategory.Specialty]: {
		category: FilterCategory.Specialty,
		multiSelect: true,
		options: [],
	},
	[FilterCategory.School]: {
		category: FilterCategory.School,
		options: [ANY_FILTER_OPTION],
	}
};

const Home = (): ReactElement => {
	const [services, setServices] = useState<any[]>([]);
	const [filters, setFilters] = useState<Filters>(defaultFilters);
	const [specialties, setSpecialties] = useState<Specialties | undefined>(undefined);
	const [schools, setSchools] = useState<School[]>([]);

	useEffect(() => {
		getCounsellingServices({ filters })
			.then(parsedData => {
				setServices(parsedData);
			})
			.catch((e) => console.log(e));
	}, [JSON.stringify(filters)]);

	useEffect(() => {
		if (filters.Specialty.options.length === 0) {
			getSpecialties()
				.then(res => {
					setSpecialties(res);
					setFilters({
						...filters,
						[FilterCategory.Specialty]: {
							...filters[FilterCategory.Specialty],
							options: convertSpecialtiesToFilterOptions(res),
						},
					});
				});
		}
	}, [specialties]);

	useEffect(() => {
		if (schools.length === 0) {
			getSchools()
				.then(res => {
					setSchools(res);
					setFilters({
						...filters,
						[FilterCategory.School]: {
							...filters[FilterCategory.School],
							options: convertSchoolsToFilterOptions(res),
						},
					});
				});
		}
	}, [schools]);

	function getSearchString(searchString: string): void {
		getCounsellingServices({ searchString })
			.then(parsedData => setServices(parsedData))
			.catch((e) => console.log(e));
	}

    type Props = {
        listOfServices: Array<Service>;
    };

    const RenderServiceCards = ({ listOfServices }: Props): ReactElement => {
		return (
			listOfServices.length > 0 ?
				<>
					{listOfServices.map((serv: Service, index) => (
						<ServiceCard service={serv} key={index}></ServiceCard>
					))}
				</> : (
					<Stack
						textAlign="center"
						py={10}
						spacing={1}
					>
						<Typography variant="h5">No services found.</Typography>
						<Typography variant="subtitle1">Try selecting different filters or typing in a different search.</Typography>
					</Stack>
				)
		);
    };

	return (
		<>
			<Grid container sx={{ px: 10, py: 5 }} spacing={5}>
				<Grid item xs={3}>
					<FilterBar
						filters={filters}
						setFilters={setFilters}
					/>
				</Grid>
				<Grid item xs={9}>
					<SearchBar searchStringFn={getSearchString}></SearchBar>
					<RenderServiceCards listOfServices={services}></RenderServiceCards>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
