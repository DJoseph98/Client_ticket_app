
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
        res.status(200).send({ response: ticketsList });
    } catch (error) {
        res.status(500).send({ error: "error getting tickets" });
    }
}

const createTicket = async (req, res) => {
    const data = req.body;
    try {
        await Ticket.create({
            ...data,
            ticketNumber: v4()
        });
        res.status(201).send({ response: "Ticket created" });
    } catch (error) {
        res.status(500).send({ error: "Error creating ticket" });
    }
};

const updateTicket = async (req, res) => {
    const data = req.body.data;
    const { id } = req.body;
    try {
        await Ticket.update({
            ...data
        },
            {
                where: { ticketNumber: id }
            });
        res.status(200).send({ response: "Ticket udated" });
    } catch (error) {
        res.status(500).send({ error: "Error updating ticket" });
    }
};

const deleteTicket = async (req, res) => {
    const { id } = req.body;
    try {
        await Ticket.destroy({
            where: { ticketNumber: id }
        });
        res.status(204).send({ response: "Ticket deleted" })
    } catch (error) {
        res.status(500).send({ response: "Error deleting ticket" })
    }
};

module.exports = { getTickets, createTicket, updateTicket, deleteTicket }