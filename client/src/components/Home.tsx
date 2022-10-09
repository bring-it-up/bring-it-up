import { ReactElement } from "react";
import FirstDropdown from "./FirstDropdown";
import ServiceCard from "./../components/ServiceCard";
import Service from "./../Service";

var tags: string[] = ["a", "b", "c"];
var arr: string[] = ["a", "b", "c"];

let serv = new Service(
	"UBC Student Assistance Program (SAP)",
	"Vancouver, BC",
	"UBC",
	"a",
	"a",
	"a",
	arr,
	true,
	"a",
	arr,
	false,
	arr,
	"a",
	"a"
);

const Home = (): ReactElement => {
	return (
		<>
			<h1>Home Page</h1>
			<FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown>
			<ServiceCard service={serv}></ServiceCard>
		</>
	);
};

export default Home;
