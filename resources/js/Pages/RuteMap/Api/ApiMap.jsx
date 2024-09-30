import axios from 'axios';

export const fetchDockData = async () => {
    const response = await axios.get('/api/tracking-data');
    return response.data;
};

export const fetchTrackingHistory = async () => {
    const response = await axios.get('/api/tracking-history');
    return response.data;
};
