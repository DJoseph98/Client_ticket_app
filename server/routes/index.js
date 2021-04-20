const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/ticketList', controllers.getTickets);
router.post('/createTicket', controllers.createTicket);
router.put('/updateTicket/:id', controllers.updateTicket);

module.exports = router;