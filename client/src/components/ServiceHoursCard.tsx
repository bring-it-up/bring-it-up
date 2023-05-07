import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReactElement, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import vector from '../images/vector.png';
import { BASE_URL } from '../constants';
import { getCounsellingServiceById } from '../api/counselling-service/counselling-service.api';

export default function ServiceHoursCard( { serviceId }: { serviceId: string }): ReactElement {
	const weekday = ['sun','mon','tue','wed','thu','fri','sat'];
	const key: any = weekday[new Date().getDay()];
	const [hours, setHours] = useState<any[]>([]);

	useEffect(() => {
		getCounsellingServiceById(serviceId)
			.then(function(myJson) {
				setHours(myJson.hours);
			})
			.catch((e) => console.log(e));
	}, []);

	if (hours === undefined) {
		return <NoHoursAvailable />;
	} else {
		const days = Object.keys(hours);
		if (days.length > 0) {
			if (isOpenNow(hours[key][0], hours[key][1])) {
				return <CurrentlyOpenCard hours={hours} />;
			}
			return <ClosedCard hours={hours}/>;
		}
		return  <NoHoursAvailable />;
	}
}

function NoHoursAvailable() {
	return <h3>Hours not available!</h3>;
}
function CurrentlyOpenCard(props: any) {
	const days = Object.keys(props.hours);
	return (
		<Card variant="outlined" sx={{ maxWidth: 350, background:'#FFFBFE', borderRadius:'28px', height:'276px' }}>
			<CardContent>
				<Grid container>
					<Grid item xs ={3.5}>
						<Typography sx={{ fontSize: 24, paddingTop: '5px', paddingBottom:'5px', paddingLeft: '10px' }}>Hours ·</Typography>
					</Grid>
					<Grid item xs={7.5}>
						<Typography sx={{ fontSize: 24, paddingTop: '5px', paddingBottom:'5px', paddingLeft:'3px', color:'#50A964' }}>Open</Typography>
					</Grid>
					<Grid item xs={1}>
						<img src={vector} style={{ position: 'relative', top:'10px' }}></img>
					</Grid>
				</Grid>
				{days.map((day: string)=> {
					return printHoursForDay(day, props.hours[day][0], props.hours[day][1]);
				})}
			</CardContent>
		</Card>
	);
}

function ClosedCard(props: any) {
	const days = Object.keys(props.hours);
	return (
		<Card variant="outlined" sx={{ maxWidth: 350, background:'#FFFBFE', borderRadius:'28px', height:'276px' }}>
			<CardContent>
				<Grid container>
					<Grid item xs ={3.5}>
						<Typography sx={{ fontSize: 24, paddingTop: '5px', paddingBottom:'5px', paddingLeft: '10px' }}>Hours ·</Typography>
					</Grid>
					<Grid item xs={7.5}>
						<Typography sx={{ fontSize: 24, paddingTop: '5px', paddingBottom:'5px', paddingLeft:'3px', color:'#D22B2B' }}>Closed</Typography>
					</Grid>
					<Grid item xs={1}>
						<img src={vector} style={{ position: 'relative', top:'10px' }}></img>
					</Grid>
				</Grid>
				{days.map((day: string)=> {
					return printHoursForDay(day, props.hours[day][0], props.hours[day][1]);
				})}
			</CardContent>
		</Card>
	);
}

function printHoursForDay(day: string, opens: string, closes: string) {
	const weekday = ['sun','mon','tue','wed','thu','fri','sat'];
	const today: any = weekday[new Date().getDay()];
	const dayString = getDay(day);
	const openingTime = convertTo12HourTime(opens);
	if (today === day) {
		if (openingTime === 'Closed') {
			return <HighlightedClosed day={dayString}/>;
		} else {
			return <HighlightedHours day={dayString} opens={opens} closes={closes}/>;
		}
	} else if (openingTime === 'Closed') {
		return <Closed day={dayString} />;
	}
	return <Hours day={dayString} opens={opens} closes={closes}/>;
}

function isOpenNow(opens: string, closes: string): boolean {
	let now = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hourCycle: 'h23',hour:'numeric',minute:'numeric' });

	if (now.charAt(0)==='0') {
		now = now.substring(1);
	}

	if (now > opens && now < closes) {
		return true;
	}
	return false;
}

function HighlightedClosed(props: any) {
	return (
		<Grid container rowSpacing={1} sx={{ marginTop:'3px', paddingLeft:'10px', background:'rgba(103,80,164,0.2)' }}>
			<Grid item xs={9}>
				<Typography sx={{ fontSize: 14 }}>{props.day}</Typography>
			</Grid>
			<Grid item xs={3} sx={{ paddingLeft: '15px' }}>
				<Typography sx={{ fontSize: 14 }}>Closed</Typography>
			</Grid>
		</Grid>
	);
}

function Closed(props: any) {
	return (
		<Grid container rowSpacing={1} sx={{ paddingTop: '5px', paddingLeft: '10px' }}>
			<Grid item xs={9}>
				<Typography sx={{ fontSize: 14 }}>{props.day}</Typography>
			</Grid>
			<Grid item xs={3} sx={{ paddingLeft: '15px' }}>
				<Typography sx={{ fontSize: 14 }}>Closed</Typography>
			</Grid>
		</Grid>
	);
}

function HighlightedHours(props: any) {
	return (
		<Grid container rowSpacing={1} sx={{ marginTop:'3px', paddingLeft:'10px', background:'rgba(103,80,164,0.2)' }}>
			<Grid item xs={7}>
				<Typography sx={{ fontSize: 14 }}>{props.day}</Typography>
			</Grid>
			<Grid item xs={5}>
				<Typography sx={{ fontSize: 14 }}>{convertTo12HourTime(props.opens)}-{convertTo12HourTime(props.closes)}</Typography>
			</Grid>
		</Grid>
	);
}

function Hours(props: any) {
	return (
		<Grid container rowSpacing={1} sx={{ paddingTop: '5px', paddingLeft: '10px' }}>
			<Grid item xs={7}>
				<Typography sx={{ fontSize: 14 }}>{props.day}</Typography>
			</Grid>
			<Grid item xs={5}>
				<Typography sx={{ fontSize: 14 }}>{convertTo12HourTime(props.opens)}-{convertTo12HourTime(props.closes)}</Typography>
			</Grid>
		</Grid>
	);
}


function convertTo12HourTime(time: string): string {
	if (time === undefined) {
		return 'Closed';
	}
	const timeString = new Date('2022-01-01 ' + time).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true,hour:'numeric',minute:'numeric' });
	return timeString;
}

function getDay(day: any): string {
	switch (day) {
	case 'mon':
		return 'Monday';
	case 'tue':
		return 'Tuesday';
	case 'wed':
		return 'Wednesday';
	case 'thu':
		return 'Thursday';
	case 'fri':
		return 'Friday';
	case 'sat':
		return 'Saturday';
	case 'sun':
		return 'Sunday';
	}
	return ''; 
}





