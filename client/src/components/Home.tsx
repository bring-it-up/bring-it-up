import { ReactElement, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Service from '../Service';
import SearchBar from './SearchBar';
import { BASE_URL } from '../constants';
import { Grid } from '@mui/material';
import FilterBar from './FilterBar';
import { FILTER_CATEGORIES, FilterCategory, Filters } from '../types/filters.types';
import { convertEnumToFilterOptions, convertSpecialtiesToFilterOptions } from '../utils/filters.utils';
import { ServiceType } from '../types/service-type.enum';
import { DeliveryMethod } from '../types/delivery-method.enum';
import { Specialties } from '../types/specialty.type';

const defaultFilters: Filters = {
    ServiceType: convertEnumToFilterOptions(ServiceType),
	DeliveryMethod: convertEnumToFilterOptions(DeliveryMethod),
};

const Home = (): ReactElement => {
	const [services, setServices] = useState<any[]>([]);
	const [filters, setFilters] = useState<Filters>(defaultFilters);
	const [specialties, setSpecialties] = useState<Specialties | undefined>(undefined);

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
		if (!filters.Specialty) {
			fetch(`${BASE_URL}/specialties?`)
				.then(res => res.json())
				.then(res => {
					setSpecialties(res);
					setFilters({ ...filters, Specialty: convertSpecialtiesToFilterOptions(res) });
				});
		}
	}, [specialties]);

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

		Object.entries(filters).forEach(([category, options]) => {
			const categoryParam = FILTER_CATEGORIES[category as FilterCategory].queryParam;
			options.forEach(option => {
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
