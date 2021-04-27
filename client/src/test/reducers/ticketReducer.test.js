import ticketFixtures from '../fixtures/tickets';
import ticketReducer from '../../reducers/ticketReducer';


describe('Ticket Reducer', () => {
    it('set tickets', () => {
        const action = {
            type: 'SET_TICKETS',
            tickets: ticketFixtures[0]

        }
        const result = ticketReducer(ticketFixtures, action);
        expect(result).toEqual(ticketFixtures[0]);
    })
    it('add tickets', () => {
        const ticket = {
            id: 3,
            ticketNumber: '123456854',
            email: "tes3@tes3",
            problemDescription: "fixture 3",
            ticketStatusId: 1,
            ticketLvlPriorId: 1,
            ticketActivitiesId: 1,
            createdAt: 0,
            updatedAt: 0
        }
        const action = {
            type: 'ADD_TICKET',
            ticket

        }
        const result = ticketReducer(ticketFixtures, action);
        expect(result).toEqual([...ticketFixtures, ticket]);
    })
    it('edit ticket', () => {
        const ticketToUpdate = {
            email: "tes3@tes3"
        }
        const action = {
            type: 'EDIT_TICKET',
            ticket : { 
                id: ticketFixtures[0].ticketNumber,
                updatedTicket: ticketToUpdate
            }

        }
        const result = ticketReducer(ticketFixtures, action);
        expect(result[0]).toEqual( {
            title: "test",
            ticketNumber: "123",
            email: "tes3@tes3",
            problemDescription: "dyddzader",
            createdAt: 0,
            Ticket_Activity: {
              id: 2,
              activity: "confirmed"
            },
            Ticket_Status: {
              id: 3,
              status: "CLOSED"
            },
            Ticket_Level_Priority: {
              id: 3,
              levelPriority: "High"
            }
          });
    })
    it('edit ticket wrong id', () => {
        const ticketToUpdate = {
            email: "tes3@tes3"
        }
        const action = {
            type: 'EDIT_TICKET',
            ticket : { 
                id: '12',
                updatedTicket: ticketToUpdate
            }

        }
        const result = ticketReducer(ticketFixtures, action);
        expect(result).toEqual(ticketFixtures);
    }) 
});