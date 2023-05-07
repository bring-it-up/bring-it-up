import Chip from '@mui/material/Chip';
import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ReactElement, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { getCounsellingServiceById } from '../api/counselling-service/counselling-service.api';

const CustomizedChip = styled(Chip) ({
    background: 'linear-gradient(0, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))',
    boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    margin: '7px',
    '& .MuiChip-label': {
        color: '#1c1b1f',
        font:'500 14px/20px Roboto',
     } 
}) as typeof Chip;
 
function Specialties({ serviceId }: {serviceId: string}): ReactElement {
        const [specialities, setSpecialities] = useState<any[]>([]);

        useEffect(() => {
            getCounsellingServiceById(serviceId)
            .then(function(myJson) {
                setSpecialities(myJson.specialty);
            })
            .catch((e) => console.log(e));
        }, []);

        return (
	<Box sx={{ maxWidth:'350px' }}>
		<Typography sx={{ font: 'bold 16px/32px Roboto' }}>Specialities</Typography>
		{specialities.map(x => {return <CustomizedChip key={x.label} label={x.label} />;})}
	</Box>
        );
    
}
 
export default Specialties ;
