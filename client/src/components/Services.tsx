import { ReactElement, useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { BASE_URL } from '../constants';
import { getCounsellingServices } from '../api/counselling-service/counselling-service.api';


function GetData(): string[] {
    const [data, setData] = useState<any[]>([]);
    const serviceIds: string[] = [];
  
    // this returns array of all service objects
    useEffect(() => {
        getCounsellingServices()
        .then(parsedData => setData(parsedData))
        .catch((e) => console.log(e));
    }, []);

    for (let i = 0; i < data.length; i++) {
        serviceIds.push(data[i].secondaryID);
    }

    return serviceIds;
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
