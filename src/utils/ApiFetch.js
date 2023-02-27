import Axios from 'axios';

const BASE_URL = 'https://berita-indo-api.vercel.app/v1';

export const ApiFetch = async (category) => {
    const { data } = await Axios.get(`${BASE_URL}/${category}`);
    return data;
}


