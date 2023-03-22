import { ReactElement, useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { BASE_URL } from '../constants';


function GetData(): string[] {
	const [data, setData] = useState<any[]>([]);
	const serviceNames: string[] = [];
  
	// this returns array of all service objects
	useEffect(() => {
		fetch(`${BASE_URL}/counselling-services`)
			.then(res => res.json())
			.then(parsedData => setData(parsedData))
			.catch((e) => console.log(e));
	}, []);
  
	for (const service of data) {
		serviceNames.push(service.serviceName);
	}
    
	return serviceNames;
}
  

const Services = (): ReactElement => {
	return (
		<>
			<h1>Services</h1>
			<p>These are the services in database: {GetData().map(
				x => <p>{x} <Link to={generatePath('services/:id', { id:x })}>Click here</Link> </p>
			)}</p>
		</>
	);
};

export default Services;
