const express = require('express');
const { uuid } = require('uuidv4');
const app = express();
const { Ticket_Activity, Ticket, Ticket_Levels_Priority, Ticket_Status } = require('./models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ticketList', async (req, res) => {
    try {
        const ticketsList = await Ticket.findAll({
            include: {
                model: Ticket_Activity,
                where: {
                    activity: "confirmed"
                }
            }
        });
        res.status(200).send(ticketsList);
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "error getting tickets" });
    }
});

app.post('/createTicket', async (req, res) => {

    const { title, email, problemDescription, idTicketStatus, idTicketLvl, idTicketActivity } = req.body;
    try {
        const ticketsList = await Ticket.create({
            title: title,
            email: email,
            ticketNumber: uuid(),
            problemDescription: problemDescription,
            idTicketStatus: idTicketStatus,
            idTicketLvl: idTicketLvl,
            idTicketActivity: idTicketActivity
        });
        res.status(201).send({ response: "Ticket created" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error creating ticket" });
    }
});

app.listen(3000);


