import { Card, Typography, Box } from '@mui/material';
import { ReactElement } from 'react';

type ServiceDetailsProps = {
    school?: string,
    provider: string,
    description: string,
};

type PropertyDetailsProps = {
    propertyName: string,
    value: string,
};

function PropertyDetails({ propertyName, value }: PropertyDetailsProps): ReactElement {
    return (
        <Box sx={{ margin: '20px 0px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>{`${propertyName}: `}</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>{value}</Typography>
        </Box>
    );
}

function ServiceDescription({ details }: { details: string }): ReactElement {
    return (
        <Card variant="outlined" sx={{ maxWidth: 350, background:'#FFFBFE', borderRadius:'28px' }}>
            <Typography sx={{ margin: '24px', fontSize: '14px' }}>{details}</Typography>
        </Card>
    );
}

function BasicServiceDetails({ school, provider, description }: ServiceDetailsProps): ReactElement {
    return (
    <div>
        {school && <PropertyDetails propertyName={'School'} value={school}/>}
        <PropertyDetails propertyName={'Service Provider'} value={provider} />
        <ServiceDescription details={description} />
    </div>
    );
}

export default BasicServiceDetails;