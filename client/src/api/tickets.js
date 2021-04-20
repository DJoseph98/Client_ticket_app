import axios from 'axios';

const getTicketListAPI = async () => {
    try {
        const { data } = await axios.get('/api/ticketList');
        return data;
    } catch (error) {
        return error.response.data;
    }
};

const createTickeAPI = async (ticket) => {
    try {
        const { data } = await axios.post('/api/createTicket', ticket );
        return data;
    } catch (error) {
        return error.response.data;
    }
};

const updateTicketAPI = async (id, updates) => {
    try {
        const { data } = await axios.put(`/api/updateTicket/${id}`, updates);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export { getTicketListAPI, createTickeAPI, updateTicketAPI };