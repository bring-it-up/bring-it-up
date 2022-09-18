/*
    This data is used to test invalid hour data
 */

export const invalidHourData = {
    mon: [9.00,  22.30],
    tue: [1],
    wed: [10.30, 20.00],
    thu: [1],
    fri: [7.15, 20.60],
    sat: [0],
    sun: [0]
    
};

export const invalidSpecialHourData = {
    mon: [9.00,  22.30],
    tue: [1],
    wed: [10.30, 20.00],
    thu: [1],
    fri: [7.15, 8.15],
    sat: [2],
    sun: [0]
};

export const invalidNumHours = {
    mon: [9.00,  22.30],
    tue: [1],
    fri: [7.15, 8.15],
    sat: [2],
    sun: [0]
};

export const invalidDay = {
    mon: [9.00,  22.30],
    tuesday: [1],
    wed: [10.30, 20.00],
    thu: [1],
    fri: [7.15, 8.15],
    sat: [0],
    sun: [0]
};