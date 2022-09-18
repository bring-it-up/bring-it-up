export const isValidHour = (hours: any) => {
    const days = new Set(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
    const re = /([01]?[0-9]|2[0-3]):[0-5][0-9]/

    if (Object.keys(hours).length < 7 || Object.keys(hours).length > 7) {
        return false;
    }

    for (const day in hours) {
        if (!(days.has(day))) {
            console.log('failed day');
            return false;
        } else if (hours[day].length == 0) {
            continue;
        } else if (hours[day].length == 1 || hours[day].length > 2) {
            return false;
        } else if (typeof(hours[day][0]) != 'string' || typeof(hours[day][1]) != 'string') {
            return false;
        } else if (!re.test(hours[day][0]) || !re.test(hours[day][1])) {
            return false;
        }
    }
    
    return true; 
}