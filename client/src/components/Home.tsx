import { ReactElement, useEffect, useState } from "react";
import FirstDropdown from "./FirstDropdown";
import ServiceCard from "./ServiceCard";
import Service from "../Service";
import SearchBar from "./SearchBar";
import { parse } from "path";
import { Input, TextField } from '@mui/material';

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
    // var [searchStr, setSearchStr] = useState<String>('');

    function getSearchString(searchString: String): void {

        searchStr = searchString;
        console.log("search string", searchStr);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`http://localhost:4000/counselling-services?searchString=${searchString}`, { signal: signal }) // searchString=${searchStr}
            .then(res => res.json())
            .then(parsedData => {
                console.log("parsed data", parsedData)
                setServices(parsedData)
            })
            .then(() => console.log(services))
            .catch((e) => console.log(e));
    }

    // useEffect(() => {
    //     console.log("fetch");
    //     fetch(`/counselling-services`) // searchString=${searchStr}
    //         .then(res => res.json())
    //         .then(parsedData => {
    //             console.log("parsed data", parsedData)
    //             setServices(parsedData)
    //         })
    //         .then(() => console.log(services))
    //         .catch((e) => console.log(e));

    // }, [searchStr]);

    // function handleTextFieldChange(e: object): void {
    //     setSearchStr(e.target.value)
    // }


    // useEffect(() => {
    //     renderServiceCards(services);
    // }, [services])
    type Props = {
        listOfServices: Array<Service>;
    }

    const RenderServiceCards = ({ listOfServices }: Props): ReactElement => {
        return (
            <>
                {console.log("hello")}
                {listOfServices.map((serv: Service) => (
                    <ServiceCard service={serv}></ServiceCard>
                ))}
            </>
        );
    }

    return (
        <>
            <h1>Home Page</h1>
            <FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown>
            {console.log(services[0])}
            <SearchBar searchStringFn={getSearchString}></SearchBar>
            {/* <ServiceCard service={services[0]}></ServiceCard> */}
            <RenderServiceCards listOfServices={services}></RenderServiceCards>
            <h1>space</h1>
            <ServiceCard service={serv}></ServiceCard>
        </>
    );
}

export default Home;
