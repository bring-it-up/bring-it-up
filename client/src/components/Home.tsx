import { ReactElement, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Service from '../Service';
import SearchBar from './SearchBar';
import { BASE_URL } from '../constants';
import { Grid } from '@mui/material';
import FilterBar from './FilterBar';
import { FILTER_CATEGORIES, FilterCategory, Filters } from '../types/filters.types';
import { ANY_FILTER_OPTION, convertEnumToFilterOptions, convertSchoolsToFilterOptions, convertSpecialtiesToFilterOptions } from '../utils/filters.utils';
import { ServiceType } from '../types/service-type.enum';
import { DeliveryMethod } from '../types/delivery-method.enum';
import { Specialties } from '../types/specialty.type';
import { UrgencyLevel } from '../types/urgency-level.enum';
import { School } from '../types/school.types';

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

	let searchStr = '';

	useEffect(() => {
		const queryStr = convertFiltersToQueryStr(filters);
		fetch(`${BASE_URL}/counselling-services?${queryStr}`)
			.then(res => res.json())
			.then(parsedData => {
				setServices(parsedData);
			})
			.catch((e) => console.log(e));
	}, [JSON.stringify(filters)]);

	useEffect(() => {
		if (filters.Specialty.options.length === 0) {
			fetch(`${BASE_URL}/specialties`)
				.then(res => res.json())
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
			fetch(`${BASE_URL}/schools`)
				.then(res => res.json())
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

		searchStr = searchString;

		const controller = new AbortController();
		const signal = controller.signal;

		fetch(`${BASE_URL}/counselling-services?searchString=${searchString}`, { signal: signal }) // searchString=${searchStr}
			.then(res => res.json())
			.then(parsedData => {
				setServices(parsedData);
			})
			.then(() => console.log(services))
			.catch((e) => console.log(e));
	}

	const convertFiltersToQueryStr = (filters: Filters): string => {
		const queryStr: string[] = [];

		Object.values(filters).forEach((filter) => {
			const categoryParam = FILTER_CATEGORIES[filter.category].queryParam;
			if (!filter.multiSelect && filter.options.find(o => o.value === ANY_FILTER_OPTION.value)?.selected) return; // 'Any' selected, so skip
			filter.options.forEach(option => {
				if (option.selected) queryStr.push(`${categoryParam}=${option.value}`);
			});
		});

		return queryStr.join('&');
	};

    type Props = {
        listOfServices: Array<Service>;
    };

    const RenderServiceCards = ({ listOfServices }: Props): ReactElement => {
		return (
			<>
				{listOfServices.map((serv: Service, index) => (
					<ServiceCard service={serv} key={index}></ServiceCard>
				))}
			</>
		);
    };

	return (
		<>
			<h1>Home Page</h1>
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
