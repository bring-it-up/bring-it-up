/*
    This data is used to test valid requests
 */

    export const validHourData = {
        serviceName: "Valid Test One",
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
            fri: [7.15, 20.59],
            sat: [0],
            sun: [0]
        }
    };
    
    export const validSpecialHourData = {
        serviceName: "Valid Test Two",
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
            mon: [1],
            tue: [1],
            wed: [1],
            thu: [1],
            fri: [1],
            sat: [0],
            sun: [0]
        }
    };