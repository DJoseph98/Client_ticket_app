import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const TicketForm = (props) => {
    const classes = useStyles();
    const [hasError, sethasError] = useState(false);
    const [hasErrorEmail, setHasErrorEmail] = useState(false);
    const [formData, setFormData] = useState({
        title: props.ticket ? props.ticket.title : '',
        email: props.ticket ? props.ticket.email : '',
        problemDescription: props.ticket ? props.ticket.problemDescription : '',
        ticketLvlPriorId: props.ticket ? props.ticket.Ticket_Level_Priority.id : 1,
        ticketStatusId: props.ticket ? props.ticket.Ticket_Status.id : 1,
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
        sethasError(false);
        setHasErrorEmail(false);
        if (props.ticket && formData.ticketStatusId === 1) {
            sethasError(true);
            return false;
        } else if (formData.email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/) === null) {
            setHasErrorEmail(true);
            return false;
        }

        let newFormData = new FormData(e.target);
        props.onSubmit(Object.fromEntries(newFormData));
    };
    return (
        <div>
            <form className={classes.root} onSubmit={handleFormSubmit}>
                <FormControl style={{ margin: 8 }} fullWidth>
                    <TextField
                        labelId="label_title"
                        name="title"
                        label="Title"
                        type="text"
                        onChange={titleChange}
                        variant="outlined"
                        inputProps={{
                            maxLength: 50
                        }}
                        helperText={`${formData.title.length}/50`}
                        defaultValue={formData.title}
                        value={formData.title}
                        placeholder="Title"
                        fullWidth
                        required />
                </FormControl>
                <FormControl style={{ margin: 8 }} fullWidth>
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        onChange={emailChange}
                        defaultValue={formData.email}
                        placeholder="Email"
                        variant="outlined"
                        error={hasErrorEmail}
                        required
                    />
                    {hasErrorEmail && <FormHelperText>Incorrect email format</FormHelperText>}
                </FormControl>
                <TextField
                    type="text"
                    name="problemDescription"
                    style={{ margin: 8 }}
                    inputProps={{
                        maxLength: 700
                    }}
                    helperText={`${formData.problemDescription.length}/700`}
                    label="Description"
                    multiline
                    rows={10}
                    variant="outlined"
                    defaultValue={formData.problemDescription}
                    onChange={pbDescriptionChange}
                    fullWidth
                    required
                />
                <FormControl variant="outlined" fullWidth style={{ margin: 8 }}>
                    <InputLabel id="label_priority">Priority</InputLabel>
                    <Select
                        labelId="label_priority"
                        value={formData.ticketLvlPriorId}
                        onChange={ticketLvlPriorChange}
                        required
                        label="Priority"
                        name="ticketLvlPriorId"
                    >
                        <MenuItem value={1}>Blocker</MenuItem>
                        <MenuItem value={2}>Critical</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                        <MenuItem value={4}>Normal</MenuItem>
                        <MenuItem value={5}>Low</MenuItem>
                    </Select>
                </FormControl>

                {props.ticket && props.ticket.Ticket_Activity.activity !== 'pending' &&
                    <FormControl variant="outlined" fullWidth style={{ margin: 8 }} error={hasError}>
                        <InputLabel id="label_status">Status</InputLabel>
                        <Select
                            labelId="label_status"
                            value={formData.ticketStatusId}
                            onChange={ticketStatusChange}
                            required
                            label="Status"
                            name="ticketStatusId"
                        >
                            <MenuItem value={2}>In progress</MenuItem>
                            <MenuItem value={3}>Closed</MenuItem>
                        </Select>
                        {hasError && <FormHelperText>This is required!</FormHelperText>}
                    </FormControl>
                }

                <div style={{ width: '100%' }}>
                    <Box display="flex" justifyContent="flex-end" style={{ margin: 8 }}>
                        {props.ticket
                            ? <Button id="upt" type="submit" variant="contained" size="large" color="primary">Update Ticket</Button>
                            : <Button type="submit" variant="contained" size="large" color="primary">Create Ticket</Button>
                        }
                    </Box>
                </div>
            </form>
        </div>
    );
};

export default TicketForm;