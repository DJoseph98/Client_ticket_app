const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/ticketList', controllers.getTickets);
router.post('/createTicket', controllers.createTicket);
router.put('/updateTicket/:id', controllers.updateTicket);
router.delete('/deleteTicket/:id', controllers.deleteTicket);

module.exports = router;