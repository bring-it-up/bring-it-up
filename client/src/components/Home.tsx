import { ReactElement, useEffect, useState } from "react";
import FirstDropdown from "./FirstDropdown";
import ServiceCard from "./ServiceCard";
import Service from "../Service";
import SearchBar from "./SearchBar";

const Home = (): ReactElement => {
    var [services, setServices] = useState<any[]>([]);
    var [searchStr, setSearchStr] = useState<String>('');

    function getSearchString(searchString: String): void {
        // console.log("hello");
        setSearchStr(searchString);
        // console.log(searchString);
    }

    useEffect(() => {
        fetch(`/counselling-services?searchString=${searchStr}`)
            .then(res => res.json())
            .then(parsedData => setServices(parsedData))
            .then(() => console.log(services))
            .catch((e) => console.log(e));

    }, [searchStr]);

    useEffect(() => {
        renderServiceCards(services);
    }, [services])

    const renderServiceCards = (services: Array<Service>) => {
        services.map((serv) => (
            <ServiceCard service={serv}></ServiceCard>
        ),)
    }

    return (
        <>
            <h1>Home Page</h1>
            <FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown>
            <SearchBar getSearchStringFn={getSearchString}></SearchBar>
        </>
    );
}

export default Home;