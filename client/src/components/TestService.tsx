import { ReactElement, useState } from 'react';
import { useParams  } from 'react-router-dom';
import ServiceHoursCard from './ServiceHoursCard';

type SERVICE = {
    ServiceID: string;
};

function TestService(): ReactElement {
    const params = useParams<SERVICE>();
    

    console.log(params);

    return (
        <div>
        <h1>Service: {params.ServiceID}</h1>
        <ServiceHoursCard parentToChild={params.ServiceID}></ServiceHoursCard>
        </div>
    );
}

export default TestService;