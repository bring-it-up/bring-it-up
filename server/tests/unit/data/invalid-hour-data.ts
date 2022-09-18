/*
    This data is used to test invalid hour data
 */

export const invalidHourData = {
    mon: ['09:00',  '22.30'],
    tue: ['00:00', '23:59'],
    wed: ['10:30', '20:00'],
    thu: ['00:00', '23:59'],
    fri: ['07:15', '20:60'],
    sat: [],
    sun: []
    
};

export const invalidHourDataType = {
    mon: ['09:00',  '22:30'],
    tue: ['00:00', '23:59'],
    wed: ['10:30', '20:00'],
    thu: ['00:00', '23:59'],
    fri: ['07:15', '08:15'],
    sat: [7.15, 8.15],
    sun: []
};

export const invalidNumHours = {
    mon: ['09:00',  '22:30'],
    tue: ['00:00', '23:59'],
    fri: ['07:15', '08:15'],
    sat: [],
    sun: []
};

export const invalidDay = {
    mon: ['09:00',  '22:30'],
    tuesday: ['00:00', '23:59'],
    wed: ['10:30', '20:00'],
    thu: ['00:00', '23:59'],
    fri: ['07:15', '08:15'],
    sat: [],
    sun: []
};