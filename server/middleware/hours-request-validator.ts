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
            } else if (Number(hours[day][0].toString().split('.')[1]) > 59 || Number(hours[day][1].toString().split('.')[1]) > 59) {
                return false;
            }
        }
    }
    return true;
}