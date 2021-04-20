
const { Ticket_Activity, Ticket } = require('../models/index');
const { v4 } = require('uuid');

const getTickets = async (req, res) => {
    try {
        const ticketsList = await Ticket.findAll({
            include: {
                model: Ticket_Activity,
                where: {
                    activity: "confirmed"
                }
            }
        });
        return res.status(200).send({ response: ticketsList });
    } catch (error) {
        return res.status(500).send({ error: "error getting tickets" });
    }
}

const createTicket = async (req, res) => {
    try {
        const openTicketStatusId = await Ticket_Activity.findOne({attributes: ['id'], where: {activity: "confirmed"}});
        const data = req.body;
        await Ticket.create({
            ...data,
            ticketNumber: v4(),
            ticketStatusId: openTicketStatusId.id,
        });
        return res.status(201).send({ response: "Ticket created" });
    } catch (error) {
        return res.status(500).send({ error: "Error creating ticket" });
    }
};

const updateTicket = async (req, res) => {
    try {
        const ticketNumber = req.params.id;
        const data = req.body;
        const [updated] = await Ticket.update({
            ...data
        },
            {
                where: { ticketNumber: ticketNumber }
            });
        if (!updated)
            throw new Error('Ticket not found');
        return res.status(200).send({ response: "Ticket udated" });
    } catch (error) {
        return res.status(500).send({ error: "Error updating ticket" });
    }
};

const deleteTicket = async (req, res) => {
    try {
        const ticketNumber = req.params.id;
        const deleted = await Ticket.destroy({
            where: { ticketNumber: ticketNumber }
        });
        if (!deleted)
            throw new Error('Ticket not found');
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).send({ error: "Error deleting ticket" })
    }
};

module.exports = { getTickets, createTicket, updateTicket, deleteTicket }