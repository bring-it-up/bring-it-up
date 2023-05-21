import { BASE_URL } from '../../constants';

export const getSchools = async () => {
    const res = await fetch(`${BASE_URL}/schools`);
    return await res.json();
};