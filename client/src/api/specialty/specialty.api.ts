import { BASE_URL } from '../../constants';

export const getSpecialties = async () => {
    const res = await fetch(`${BASE_URL}/specialties`);
    return await res.json();
};