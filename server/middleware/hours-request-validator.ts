export const isValidHour = (hours: any) => {
    const days = new Set(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])

    if (Object.keys(hours).length < 7 || Object.keys(hours).length > 7) {
        return false;
    }

    for (const day in hours) {
        if (!(days.has(day))) {
            return false;
        } else if (hours[day].length === 1) {
            if (hours[day][0] !== 0 && hours[day][0] !== 1) {
                return false;
            }
        } else if (hours[day].length === 2) {
            if (hours[day][0] >= hours[day][1]) {
                return false;
            } else if (hours[day][0] < 0 || hours[day][1] >= 24) {
                return false;
            } else if (floatToMinutes(hours[day][0]) > 0.59 || floatToMinutes(hours[day][1]) > 0.59) {
                return false;
            }
        }
    }
    return true;
}

const floatToMinutes = (hour: any) => {
    return Number((hour % 1).toFixed(2));
}