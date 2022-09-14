import { ReactElement, useState, useEffect } from "react";
import Service from "../Service";
import ServiceCard from "./ServiceCard";

function GetFirstService(): Service {
	var [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		fetch("http://localhost:4000/counselling-services", { signal: signal })
			.then((res) => res.json())
			.then((parsedData) => setData(parsedData))
			.catch((e) => console.log(e));

		// abort fetch request if we're no longer on services page
		return () => {
			controller.abort();
		};
	}, []);

	// we need this conditional render since html render might happen before setData above
	// more info: https://www.reddit.com/r/learnreactjs/comments/sgim34/fetch_api_works_then_suddenly_stops_working_after/
	if (data && data.length >= 1) {
		var stringJson: string = JSON.stringify(data[0]);

		return JSON.parse(stringJson);
	}

	return new Service();
}

const Services = (): ReactElement => {
	return (
		<>
			<h1>Services</h1>
			<ServiceCard service={GetFirstService()} />
		</>
	);
};

export default Services;
