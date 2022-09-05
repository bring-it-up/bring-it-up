/*
    This data is used to test invalid requests
 */

export const missingServiceNameData = {
    school: "UBC",
    organization: "Aspiria",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["UBC students"],
    isAllDay: true,
    website: "https://students.ubc.ca/health/ubc-student-assistance-program-sap",
    specialty: ["Stress", "Anxiety"],
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
    isAllDay: true,
    website: "https://students.ubc.ca/health/ubc-student-assistance-program-sap",
    specialty: ["Stress", "Anxiety"],
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
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Homesickness","Cultural Adjustment"],
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
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Homesickness","Cultural Adjustment"],
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
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Homesickness","Cultural Adjustment"],
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
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Homesickness","Cultural Adjustment"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const invalidIsAllDayData = {
    serviceName: "Student Assistance Program (SAP)",
    school: "UBC",
    organization: "Aspiria",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["UBC students"],
    isAllDay: 1000,
    website: "https://students.ubc.ca/health/ubc-student-assistance-program-sap",
    specialty: ["Stress", "Anxiety"],
    delivery: ["Online","Phone"],
    description: "Offered by Aspiria, the UBC Student Assistance Program (SAP) is a free, 24/7 wellness resource for students. Services include personal counselling, life coaching, group programs and more based on your needs."
};

export const invalidDeliveryData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Homesickness","Cultural Adjustment"],
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
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety",true,"Cultural Adjustment"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics."
};

export const invalidHourData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Cultural Adjustment"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics.",
    hours: {
        mon: [9.00,  22.30],
        tue: [1],
        wed: [10.30, 20.00],
        thu: [1],
        fri: [7.15, 20.60],
        sat: [0],
        sun: [0]
    }
};

export const invalidSpecialHourData = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Cultural Adjustment"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics.",
    hours: {
        mon: [9.00,  22.30],
        tue: [1],
        wed: [10.30, 20.00],
        thu: [1],
        fri: [7.15, 8.15],
        sat: [2],
        sun: [0]
    }
};

export const invalidNumHours = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students","FIC students"],
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress","Anxiety","Cultural Adjustment"],
    isOfferedOnline: true,
    delivery: ["Online","Phone","App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics.",
    hours: {
        mon: [9.00,  22.30],
        tue: [1],
        fri: [7.15, 8.15],
        sat: [2],
        sun: [0]
    }
};

export const invalidDay = {
    serviceName: "My SSP",
    school: "SFU",
    organization: "Morneau Shepell (LifeWorks)",
    serviceType: ["Counselling"],
    urgency: "Immediate",
    targetClients: ["SFU students", "FIC students"],
    isAllDay: true,
    website: "https://www.sfu.ca/students/health/get-support/my-ssp.html",
    specialty: ["Stress", "Anxiety", "Cultural Adjustment"],
    isOfferedOnline: true,
    delivery: ["Online", "Phone", "App"],
    description: "My SSP (My Student Support Program) is an app dedicated to supporting SFU/FIC students through its 24/7 crisis line, short-term counselling appointments and relevant resources on a range of mental health topics.",
    hours: {
        mon: [9.00, 22.30],
        tuesday: [1],
        wed: [10.30, 20.00],
        thu: [1],
        fri: [7.15, 8.15],
        sat: [0],
        sun: [0]
    }
};