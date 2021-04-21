import { React, useState } from 'react';

const TicketForm = (props) => {
    const [formData, setFormData] = useState({
        title: props.ticket ? props.ticket.title : '',
        email: props.ticket ? props.ticket.email : '',
        problemDescription: props.ticket ? props.ticket.problemDescription : '',
        ticketLvlPriorId: props.ticket ? props.ticket.ticketLvlPriorId : 1,
        ticketStatusId: props.ticket ? props.ticket.ticketStatusId : 1,
    })
    const setChangedState = (stateName) => {
        setFormData(formData => ({ ...formData, ...stateName }));
    }
    const titleChange = (e) => {
        setChangedState({ title: e.target.value });
    }
    const emailChange = (e) => {
        setChangedState({ email: e.target.value });
    }
    const pbDescriptionChange = (e) => {
        setChangedState({ problemDescription: e.target.value });
    }
    const ticketStatusChange = (e) => {
        setChangedState({ ticketStatusId: e.target.value });
    }
    const ticketLvlPriorChange = (e) => {
        setChangedState({ ticketLvlPriorId: e.target.value });
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        props.onSubmit(Object.fromEntries(formData));
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="title" value={formData.title} onChange={titleChange} required></input>
                <input type="email" name="email" value={formData.email} onChange={emailChange} required></input>
                <textarea name="problemDescription" value={formData.problemDescription} onChange={pbDescriptionChange} required></textarea>
                <select name="ticketLvlPriorId" value={formData.ticketLvlPriorId} onChange={ticketLvlPriorChange} required>
                    <option value="1">Blocker</option>
                    <option value="2">Critical</option>
                    <option value="3">High</option>
                    <option value="4">Normal</option>
                    <option value="5">Low</option>
                </select>
                {props.isNew === 0 &&
                    <select name="ticketStatusId" value={formData.ticketStatusId} onChange={ticketStatusChange}>
                        <option value="2">IN PROGRESS</option>
                        <option value="3">CLOSED</option>
                    </select>
                }
                {props.isNew === 0
                    ? <button>Update Ticket</button>
                    : <button>Create Ticket</button>
                }
            </form>
        </div>
    );
};

export default TicketForm;