import { ReactElement, useEffect, useState } from "react";
import FirstDropdown from "./FirstDropdown";
import ServiceCard from "./ServiceCard";
import Service from "../Service";
import SearchBar from "./SearchBar";

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
    "b",
    arr,
    false,
    arr,
    "a",
    "a"
);

const Home = (): ReactElement => {
    var [services, setServices] = useState<any[]>([]);
    var searchStr: String = '';

    useEffect(() => {
        fetch("http://localhost:4000/counselling-services")
            .then(res => res.json())
            .then(parsedData => {
                setServices(parsedData)
            })
            .then()
            .catch((e) => console.log(e));
    }, []);

    function getSearchString(searchString: String): void {

        searchStr = searchString;

        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`http://localhost:4000/counselling-services?searchString=${searchString}`, { signal: signal }) // searchString=${searchStr}
            .then(res => res.json())
            .then(parsedData => {
                setServices(parsedData)
            })
            .then(() => console.log(services))
            .catch((e) => console.log(e));
    }

    type Props = {
        listOfServices: Array<Service>;
    }

    const RenderServiceCards = ({ listOfServices }: Props): ReactElement => {
        return (
            <>
                {listOfServices.map((serv: Service, index) => (
                    <ServiceCard service={serv} key={index}></ServiceCard>
                ))}
            </>
        );
    }

    return (
        <>
            <h1>Home Page</h1>
            <FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown>
            <SearchBar searchStringFn={getSearchString}></SearchBar>
            {/* <ServiceCard service={services[0]}></ServiceCard> */}
            <RenderServiceCards listOfServices={services}></RenderServiceCards>
            <h1>space</h1>
            <ServiceCard service={serv}></ServiceCard>
        </>
    );
}

export default Home;
