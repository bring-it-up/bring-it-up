import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { Specialty } from '../types/specialty.type';
import { CustomizedChip } from '../utils/customized.components';


type Props = {
    specialties: Specialty[];
};

function Specialties({ specialties }: Props): ReactElement {
    return (
	<Box sx={{ maxWidth:'350px' }}>
		<Typography sx={{ font: 'bold 16px/32px Roboto' }}>Specialities</Typography>
		{specialties.map(x => {return <CustomizedChip key={x.id} label={x.label} />;})}
	</Box>
    );
    
}
 
export default Specialties ;
