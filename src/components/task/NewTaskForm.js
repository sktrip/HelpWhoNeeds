import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog({ open, onClose, reqHeader }) {

    const [state, setState] = React.useState({
        checkedAM: false,
        checkedPM: false,
    });
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-01T00:00:00'));

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle id="form-add-task">{reqHeader}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, provide as many details as you can
                    </DialogContentText>

                    <TextField
                        id="task-details"
                        autoFocus
                        label="Details"
                        multiline
                        rows={6}
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                    />
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="CheckedAM"
                                    state={state.checkedAM}
                                    onChange={handleChange}
                                />}
                            label="AM"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="CheckedPM"
                                    state={state.checkedPM}
                                    onChange={handleChange}
                                />}
                            label="PM"
                        />
                    </FormGroup>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            // disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'Select date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <FormControlLabel disabled
                        control={
                            <Checkbox
                                name="CheckedPM"
                                checked={false}
                            />}
                        label="Only volunteers with DBS certificate"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog