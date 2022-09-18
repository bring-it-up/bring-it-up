export const isValidHour = (hours: any) => {
    const days = new Set(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])

    if (Object.keys(hours).length < 7 || Object.keys(hours).length > 7) {
        return false;
    }

    for (const day in hours) {
        if (!(days.has(day))) {
            return false;
        } 
    }
    return true;
}

const floatToMinutes = (hour: any) => {
    return Number((hour % 1).toFixed(2));
}