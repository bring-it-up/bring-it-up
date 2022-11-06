import { ReactElement } from 'react';
import { useParams  } from 'react-router-dom';

type SERVICE = {
    ServiceID: string;
};

function TestService(): ReactElement {
    const params = useParams<SERVICE>();

    console.log(params);

    return (
        <h1>Service: {params.ServiceID}</h1>
    );
}

export default TestService;