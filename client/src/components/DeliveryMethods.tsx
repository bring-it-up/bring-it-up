import { ReactElement } from 'react';
import { CustomizedChip } from '../utils/customized.components';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { DeliveryMethod } from '../types/delivery-method.enum';
import { Apps, Email, Message, Person, Phone } from '@mui/icons-material';
import { Icon } from '@mui/material';

type DeliveryMethodsProps = {
    deliveryMethods: DeliveryMethod[];
};

const ICON_MAP = new Map([
    [DeliveryMethod.IN_PERSON, <Person style={{ color: 'var(--theme-purple)' }} />],
    [DeliveryMethod.PHONE, <Phone style={{ color: 'var(--theme-purple)' }} />],
    [DeliveryMethod.ONLINE, <Message style={{ color: 'var(--theme-purple)' }} />],
    [DeliveryMethod.APP, <Apps style={{ color: 'var(--theme-purple)' }} />],
    [DeliveryMethod.EMAIL, <Email style={{ color: 'var(--theme-purple)' }} />]
]);

function DeliveryMethods({ deliveryMethods }: DeliveryMethodsProps): ReactElement {
    return (
    <Box sx={{ maxWidth:'350px' }}>
		<Typography sx={{ font: 'bold 16px/32px Roboto' }}>Delivery Methods</Typography>
        {deliveryMethods.map(x => {return <CustomizedChip key={x} label={x} icon={ICON_MAP.get(x)} />;})}
	</Box>
    );
}

export default DeliveryMethods;