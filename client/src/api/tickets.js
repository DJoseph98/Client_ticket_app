import axios from 'axios';

/* API CALL to fecth all the ticket from the server*/
const getTicketListAPI = async () => {
    try {
        const { data } = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/ticketList`);
        return data;
    } catch (error) {
        return error.response.data;
    }
};

/* API CALL to create new ticket
    param: formData from ticket form
*/
const createTickeAPI =  async (ticket) => {
    try {
        const { data } = await axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/createTicket`, ticket);
        return data;
    } catch (error) {
        return error.response.data;
    }
};

/* API CALL to udpate ticket
    param: is is ticket number to update from
        updates: formData from ticket form to update
*/
const updateTicketAPI = async (id, updates) => {
    try {
        const { data } = await axios.put(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/updateTicket/${id}`, updates);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export { getTicketListAPI, createTickeAPI, updateTicketAPI };