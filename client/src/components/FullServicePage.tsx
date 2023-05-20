import React, { ReactElement } from 'react';
import { useParams  } from 'react-router-dom';
import ServiceHoursCard from './ServiceHoursCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Specialties from './Specialties';
import { getCounsellingServiceById } from '../api/counselling-service/counselling-service.api';
import { CounsellingService } from '../types/counselling-service.types';
import BasicServiceDetails from './BasicServiceDetails';
import DeliveryMethods from './DeliveryMethods';

const CustomizedTab = styled(Tab)({
	padding: '0 100px',
	width: '325px',
	maxWidth: '700px',
	color:'#151611',
	fontFamily:'Roboto',
	fontSize:'24px',
	fontWeight: '400',
	lineHeight: '32px',
	fontStyle:'normal',
	textTransform: 'capitalize',
	'&.Mui-selected': { color: '#000000', fontWeight: '700' }
}) as typeof Tab;

type SERVICE = {
    ServiceID: string;
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;
  
    return (
	<div>
		{value === index && (
		<Box sx={{ p: 3 }}>
			<Typography component={'span'} >{children}</Typography>
		</Box>
        )}
	</div>
    );
  }

function FullServicePage(): ReactElement {
    const params = useParams<SERVICE>();
    const [value, setValue] = React.useState(0);
    const serviceId = params.ServiceID;
	const [service, setService] = React.useState<CounsellingService>();
  
    React.useEffect(() => {
        getCounsellingServiceById(serviceId)
        .then(parsedData => setService(parsedData))
        .catch((e) => console.log(e));
    }, []);
	
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

    return (
	<div>
		<Box>
			<Tabs TabIndicatorProps={{ style: { width: '0px' } }} value={value} onChange={handleChange}>
				<CustomizedTab sx={{ left: '5%', width:'max-content' }} icon={<ArrowBackIcon sx={{ position: 'relative', right:'90px' }}/>} iconPosition = "start" label={service?.serviceName} />
				<CustomizedTab sx={{ left: '80%', position: 'absolute' }} icon={<ArrowForwardIcon sx={{ position: 'relative', right:'50px' }}/>} iconPosition = "start" label="Reviews"/>
			</Tabs>
		</Box>
		<TabPanel value={value} index={0}>
			{service && <div className="servicePageContainer">
			<div className="detailsContainer">
				<BasicServiceDetails school={service?.school?.name} provider={service.organization} description={service.description}/>
				<DeliveryMethods deliveryMethods={service.delivery}/>
				{service?.specialty && (
					<Specialties specialties={service.specialty} />
				)}
			</div>
			<div>
				<ServiceHoursCard hours={service?.hours} />
			</div>
			</div>}
		</TabPanel>
		<TabPanel value={value} index={1}>Reviews</TabPanel>
	</div>
    );
}

export default FullServicePage;