import { ReactElement, useEffect, useState } from "react";
import FirstDropdown from "./FirstDropdown";
import ServiceCard from "./ServiceCard";
import Service from "../Service";
import SearchBar from "./SearchBar";

const Home = (): ReactElement => {
    var [services, setServices] = useState<any[]>([]);
    var filteredServices: Service[] = [];
    var [searchStr, setSearchStr] = useState<String>('');

    useEffect(() => {
        updateServiceCards();
    }, [searchStr]); // issue with the useEffect

    function getSearchString(searchString: String): void {
        setSearchStr(searchString);
    }

    const GetFilteredServices = () => {

        useEffect(() => {
            fetch(`/counselling-services?searchString=${searchStr}`)
                .then(res => res.json())
                .then(parsedData => setServices(parsedData))
                .catch((e) => console.log(e));

        }, []);
        for (let service of services) {
            filteredServices.push(service);
        }
        return filteredServices;
    }

    const renderServiceCards = (services: Array<Service>) => {
        services.map((serv) => (
            <ServiceCard service={serv}></ServiceCard>
        ),)
    }

    const updateServiceCards = () => {
        renderServiceCards(GetFilteredServices());
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