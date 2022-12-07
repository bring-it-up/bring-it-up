/*
    This data is used to test invalid requests
 */

export const missingServiceNameData = {
    school: "UBC",
    organization: "Aspiria",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["UBC students"],
    website: "https://students.ubc.ca/health/ubc-student-assistance-program-sap",
    specialty: ["STRESS_AXTY"],
    delivery: ["Online","Phone"],
    description: "Offered by Aspiria, the UBC Student Assistance Program (SAP) is a free, 24/7 wellness resource for students. Services include personal counselling, life coaching, group programs and more based on your needs."
};

export const invalidServiceNameData = {
    serviceName: 1000,
    school: "UBC",
    organization: "Aspiria",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["UBC students"],
    website: "https://students.ubc.ca/health/ubc-student-assistance-program-sap",
    specialty: ["STRESS_AXTY"],
    delivery: ["Online","Phone"],
    description: "Offered by Aspiria, the UBC Student Assistance Program (SAP) is a free, 24/7 wellness resource for students. Services include personal counselling, life coaching, group programs and more based on your needs."
};

export const invalidServiceTypeData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Invalid"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["STRESS_AXTY","LONELINESS","CULTURAL_ADJST"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const invalidUrgencyData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Invalid",
    targetClients: ["SFU students","FIC students"],
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["STRESS_AXTY","LONELINESS","CULTURAL_ADJST"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const invalidTargetClientsData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students",1000],
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["STRESS_AXTY","LONELINESS","CULTURAL_ADJST"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const nonArrayTargetClientsData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: "SFU students",
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["STRESS_AXTY","LONELINESS","CULTURAL_ADJST"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const invalidDeliveryData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["STRESS_AXTY","LONELINESS","CULTURAL_ADJST"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","Invalid"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const invalidSpecialtyData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["STRESS_AXTY",true,"CULTURAL_ADJST"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};