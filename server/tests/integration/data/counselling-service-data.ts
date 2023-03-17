export const service1Data = {
	serviceName: 'Student Assistance Program (SAP)',
	school: 'ubcv',
	organization: 'Aspiria',
	serviceType: ['Counselling'],
	urgency: 'Immediate',
	targetClients: ['UBC students'],
	website: 'https://students.ubc.ca/health/ubc-student-assistance-program-sap',
	specialty: ['STRESS_AXTY'],
	delivery: ['Online','Phone'],
	description: 'Offered by Aspiria, the UBC Student Assistance Program (SAP) is a free, 24/7 wellness resource for students. Services include personal counselling, life coaching, group programs and more based on your needs.',
	secondaryID: 'student-assistance-program-sap'
};

export const service2Data = {
	serviceName: 'My SSP',
	school: 'sfu',
	organization: 'Morneau Shepell (LifeWorks)',
	serviceType: ['Counselling'],
	urgency: 'Immediate',
	targetClients: ['SFU students','FIC students'],
	website: 'https://www.sfu.ca/students/health/get-support/my-ssp.html',
	specialty: ['STRESS_AXTY','LONELINESS','CULTURAL_ADJST'],
	isOfferedOnline: true,
	delivery: ['Online','Phone','App'],
	description: 'My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics.',
	secondaryID: 'my-ssp'
};

// secondaryID excluded because this data will be used for testing POST which generates the ID
export const service3Data = {
	serviceName: 'UBC Psychology Clinic',
	school: 'sfu',
	organization: 'UBC Psychology',
	serviceType: ['Counselling'],
	urgency: 'Same Month',
	targetClients: ['Adults in Greater Vancouver'],
	website: 'https://clinic.psych.ubc.ca/services/',
	specialty: ['STRESS_AXTY', 'DEPRESSION'],
	isOfferedOnline: false,
	delivery: ['In Person'],
	description: 'The UBC Psychology Clinic offers comprehensive psychological services adults. Our clinical services are provided by graduate students from UBC’s doctoral programme in clinical psychology. Student clinicians are closely supervised by Registered Psychologists from our faculty and the community.Our Clinic is not able to provide psychiatric or emergency services or services where there is a risk of frequent or severe crisis or involvement with the law.'
};