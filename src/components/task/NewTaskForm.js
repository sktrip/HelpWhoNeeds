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

function FormDialog({ open, handleClose, reqHeader }) {

    const [state, setState] = React.useState({
        checkedAM: true,
        checkedPM: true,
    });
    const [selectedDate, setSelectedDate] = React.useState(null);  //new Date());

    const handleChange = (event) => {
        console.log({ ...state, [event.target.name]: event.target.checked })
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const onClose = () => {
        setState({
            checkedAM: true,
            checkedPM: true,
        })
        setSelectedDate(null)
        handleClose()
    }

    let formState = {
        formData: {
            type: '',
            details: '',
            time_slots: [
                {
                    am: false,
                    pm: false,
                    date: '01.01.01'
                }
            ],
            dbs_req: false
        },
        submitted: false,
    }

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle id="form-add-task">{reqHeader}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, provide as many details as you can
                    </DialogContentText>

                    <TextField
                        // id="task-details"
                        name="taskDetails"
                        autoFocus
                        label="Details"
                        multiline
                        rows={6}
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            // disableToolbar
                            // variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker"
                            mask="__/__/____"
                            minDate={new Date()}
                            minDateMessage="Date cannot be in the past"
                            // label="Select date"
                            // autoOk={true}
                            // hintText="Select Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'Select date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedAM"
                                    checked={state.checkedAM}
                                    onChange={handleChange}
                                />}
                            label="AM"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedPM"
                                    checked={state.checkedPM}
                                    onChange={handleChange}
                                />}
                            label="PM"
                        />
                    </FormGroup>
                    <FormControlLabel disabled
                        control={
                            <Checkbox
                                name="dbsRequired"
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