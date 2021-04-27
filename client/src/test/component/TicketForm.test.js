import React from 'react';
import { shallow } from 'enzyme';
import TicketForm from '../../component/TicketForm';
import ticketFixtures from '../fixtures/tickets';

const entries = jest.fn()
const append = jest.fn()
global.FormData = () => ({ entries, append })

describe('Ticket Form page', () => {
    let wrapper;
    beforeAll(() => {  // This is Mocha; in Jest, use beforeAll
        wrapper = shallow(<TicketForm />);
    });

    it('should be form page without data', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('should be form page with data', () => {
        const wrapper = shallow(<TicketForm ticket={ticketFixtures[0]} />);
        expect(wrapper).toMatchSnapshot();
    })
    it('should test title change', () => {
        const value = 'hello';
        wrapper.find({ name: "title" }).simulate('change', {
            target: { value }
        });
        expect(wrapper.find({ name: "title" }).props().defaultValue).toBe(value);
    });
    it('should test email change', () => {
        const value = 'dza@dzea';
        wrapper.find({ name: "email" }).simulate('change', {
            target: { value }
        });
        expect(wrapper.find({ name: "email" }).props().defaultValue).toBe(value);
    });
    it('should test problemDescription change', () => {
        const value = 'probleme test ';
        wrapper.find({ name: "problemDescription" }).simulate('change', {
            target: { value }
        });
        expect(wrapper.find({ name: "problemDescription" }).props().defaultValue).toBe(value);
    });
    it('should test ticketLvlPriorId change', () => {
        const value = 3;
        wrapper.find({ name: "ticketLvlPriorId" }).simulate('change', {
            target: { value }
        });
        expect(wrapper.find({ name: "ticketLvlPriorId" }).props().value).toBe(value);
    });
    it('should test ticketStatusId change', () => {
        const value = 3;
        const wrapper = shallow(<TicketForm ticket={ticketFixtures[0]} />);
        wrapper.find({ name: "ticketStatusId" }).simulate('change', {
            target: { value }
        });
        expect(wrapper.find({ name: "ticketStatusId" }).props().value).toBe(value);
    });
    it('should test submit value from form', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<TicketForm ticket={ticketFixtures[0]} onSubmit={onSubmitSpy} />);

        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
            }
        });
        
         expect(onSubmitSpy).toHaveBeenLastCalledWith({
             title: ticketFixtures[0].title,
             email: ticketFixtures[0].email,
             problemDescription: ticketFixtures[0].problemDescription,
             ticketLvlPriorId: ticketFixtures[0].Ticket_Level_Priority.id.toString(),
             ticketStatusId: ticketFixtures[0].Ticket_Status.id.toString()
         });
    });
});