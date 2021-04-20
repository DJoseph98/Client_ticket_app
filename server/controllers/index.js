
const { Ticket_Activity, Ticket_Status, Ticket } = require('../models/index');
const { v4 } = require('uuid');
const attributesToDisplay = ['title', 'ticketNumber', 'email', 'problemDescription', 'ticketStatusId', 'ticketLvlPriorId', 'ticketActivitesId', 'updatedAt'];
const ticketValueToDisplayFromModel = require('../utils/functions');

const getTickets = async (req, res) => {
    try {
        const ticketsList = await Ticket.findAll({ attributes: attributesToDisplay });
        return res.status(200).send({ response: ticketsList });
    } catch (error) {
        return res.status(500).send({ error: "error getting tickets" });
    }
}

const createTicket = async (req, res) => {
    try {
        const openTicketActivityId = await Ticket_Activity.findOne({ attributes: ['id'], where: { activity: "pending" } });
        const openTicketStatusId = await Ticket_Status.findOne({ attributes: ['id'], where: { status: "OPEN" } });
        const data = req.body;
        const newTicket = await Ticket.create({
            ...data,
            ticketNumber: v4(),
            ticketActivitesId: openTicketActivityId.id,
            ticketStatusId: openTicketStatusId.id
        });
        return res.status(201).send({ newTicket: ticketValueToDisplayFromModel(newTicket) });
    } catch (error) {
        return res.status(500).send({ error: "Error creating ticket" });
    }
};

const updateTicket = async (req, res) => {
    try {
        const ticketNumber = req.params.id;
        const data = req.body;
        let ticket = await Ticket.findOne({ where: { ticketNumber: ticketNumber } });
        if (!ticket)
            throw new Error('Ticket not found');
        ticket = await ticket.update(
            { ...data },
            { where: { ticketNumber: ticketNumber } });
        return res.status(200).send({ updatedTicket: ticketValueToDisplayFromModel(ticket) });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: "Error updating ticket" });
    }
};

module.exports = { getTickets, createTicket, updateTicket }