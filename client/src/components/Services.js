import { useState, useEffect } from 'react';

function GetData() {
    var [data, setData] = useState([]);
    var serviceNames = [];
  
    // this returns array of all service objects
    useEffect(() => {
        fetch("http://localhost:4000/counselling-services")
        .then(res => res.json())
        .then(temp => console.log(temp))
        .then(parsedData => setData(parsedData))
        .catch((e) => console.log(e));
    }, [])
  
    for (let service of data) {
      serviceNames.push(service.serviceName);
    }
    console.log(serviceNames);
    return serviceNames;
  }
  

const Services = () => {
    return (
        <>
            <h1>Services</h1>
            <p>services: {GetData()}</p>
        </>
    );
}

export default Services;