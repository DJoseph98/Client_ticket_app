const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/ticketList', controllers.getTickets);
router.post('/createTicket', controllers.createTicket);
router.get('/updateTicket', controllers.updateTicket);
router.get('/deleteTicket', controllers.deleteTicket);

module.exports = router;