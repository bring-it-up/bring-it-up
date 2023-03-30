import { ReactElement, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Service from '../Service';
import SearchBar from './SearchBar';
import { BASE_URL } from '../constants';
import { Grid } from '@mui/material';
import FilterBar from './FilterBar';
import { Filters } from '../types/filters.types';

const tags: string[] = ['a', 'b', 'c'];
const arr: string[] = ['a', 'b', 'c'];

const serv = new Service(
	'UBC Student Assistance Program (SAP)',
	'Vancouver, BC',
	'UBC',
	'a',
	'a',
	'a',
	arr,
	'b',
	arr,
	false,
	arr,
	'a',
	'a'
);

const defaultFilters: Filters = {
    'Support Type': [
        { label: '1 on 1 Counselling', value: '1on1', selected: false },
        { label: 'Medical', value: 'medical', selected: false },
        { label: 'Crisis Line', value: 'crisis', selected: false },
    ],
};

const Home = (): ReactElement => {
	const [services, setServices] = useState<any[]>([]);
	const [filters, setFilters] = useState<Filters>(defaultFilters);

	let searchStr = '';

	useEffect(() => {
		fetch(`${BASE_URL}/counselling-services`)
			.then(res => res.json())
			.then(parsedData => {
				setServices(parsedData);
			})
			.then()
			.catch((e) => console.log(e));
	}, []);

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
					<br />
					<ServiceCard service={serv}></ServiceCard>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
