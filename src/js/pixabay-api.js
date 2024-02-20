import axios from 'axios';

async function getImages(imgName, page = 1) {
    try {
        const BASE_URL = 'https://pixabay.com';
        const END_POINT = '/api/';
        const response = await axios.get(`${BASE_URL}${END_POINT}`, {
            params: {
                key: '42343826-37f50c073d3cb7aafd48234dd',
                q: imgName,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: page,
                per_page: 15
            }
        });
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

export { getImages };
