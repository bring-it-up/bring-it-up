import { ReactElement, useState, useEffect } from 'react';
import { Link, generatePath } from "react-router-dom";

function GetData(): string[] {
    var [data, setData] = useState<any[]>([]);
    var serviceNames: string[] = [];
  
    // this returns array of all service objects
    useEffect(() => {
        fetch("http://localhost:4000/counselling-services")
        .then(res => res.json())
        .then(parsedData => setData(parsedData))
        .catch((e) => console.log(e));
    }, []);
  
    for (let service of data) {
      serviceNames.push(service.serviceName);
    }
    
    return serviceNames;
  }
  

const Services = (): ReactElement => {
    return (
        <>
            <h1>Services</h1>
            <p>These are the services in database: {GetData()}</p>
            <p>Sample Service 1 <Link to={generatePath("services/:id", {id:'customID1'})}>Click here</Link> </p>
            <p>Sample Service 2 <Link to={generatePath("services/:id", {id:'customID2'})}>Click here</Link> </p>
            <p>Sample Service 3 <Link to={generatePath("services/:id", {id:'customID3'})}>Click here</Link> </p>
        </>
    );
}

export default Services;