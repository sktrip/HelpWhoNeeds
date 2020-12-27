import "date-fns";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { ErrorSharp } from '@material-ui/icons';

function FormDialog({ open, handleClose, reqHeader }) {

    // const [state, setState] = React.useState({
    //     checkedAM: true,
    //     checkedPM: true,
    // });

    // const handleStateChange = (event) => {
    // console.log({ ...state, [event.target.name]: event.target.checked })
    //     setState({ ...state, [event.target.name]: event.target.checked });
    // };

    // const [selectedDate, setSelectedDate] = React.useState(null);

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const onClose = () => {
        // setState({
        //     checkedAM: true,
        //     checkedPM: true,
        // })
        // setSelectedDate(null)
        handleClose()
    }

    // function required(displayName) {
    //     return function validateRequired(value) {
    //         // console.log("VALIDATING: ", displayName, value);
    //         return value !== null || `${displayName} is required.`;
    //     };
    // }

    // var isBefore = require('date-fns/is_before')

    const defaultTimeSlotValues = {
        startDate: null,
        startTime: new Date(2021, 11, 17, 8, 0, 0),
        endDate: null,
        endTime: new Date(2021, 11, 17, 20, 0, 0)
    };

    const { errors, getValues, handleSubmit, register, setValue, control } = useForm({
        defaultTimeSlotValues
    });

    const handleStartDate = date => {
        console.log("startDate CHANGED: ", date);
        setValue("startDate", date);
        if (!values.endDate)
            // || isBefore(values.endDate, values.startDate)) 
            setValue("endDate", date);
        return values
    };

    const handleStartTime = time => {
        setValue("startTime", time);
    };

    const handleEndDate = date => {
        console.log("endDate CHANGED: ", date);
        setValue("endDate", date);
    };

    const handleEndTime = time => {
        setValue("endTime", time);
    };

    // const { register, handleSubmit, errors } = useForm()

    const [submittedData, setSubmittedData] = React.useState({});

    const onSubmit = (data) => {
        console.log("SUBMITTED: ", data)
        setSubmittedData(data)
        handleClose()
    };

    // function useOnMount(handler) {
    //     return React.useEffect(handler, []);
    // }

    // useOnMount(() => {
    //     console.log("useEffect register");

    //     register({ name: "startDate", type: "custom" }, { required: true })
    //     register({ name: "startTime", type: "custom" }, { required: true })
    //     register({ name: "endDate", type: "custom" }, { required: true })
    //     register({ name: "endTime", type: "custom" }, { required: true })
    // });

    const values = getValues();

    console.log("RENDERING VALUES: ", values);
    console.log("RENDERING ERRORS: ", errors);

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id="form-add-task">{reqHeader}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, provide as many details as you can
                    </DialogContentText>

                        <TextField
                            name="taskDetails"
                            inputRef={register}
                            autoFocus
                            label="Details"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="outlined"
                            fullWidth
                        // rules={{required: true}}
                        // errors={errors.taskDetails}
                        // helperText={errors.taskDetails ? "Details are required": ""}
                        />


                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        as={
                                            <KeyboardDatePicker />
                                        }
                                        control={control}
                                        rules={{ required: true }}
                                        defaultValue={defaultTimeSlotValues.startDate}
                                        id="startDate"
                                        name="startDate"
                                        label="Date"
                                        format="dd.MM.yyyy"
                                        disablePast
                                        margin="normal"
                                        disableToolbar
                                        fullWidth
                                        value={values.startDate}
                                        onChange={handleStartDate}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date"
                                        }}
                                        error={errors.hasOwnProperty("startDate")}
                                        helperText={errors.startDate && errors.startDate.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        as={
                                            <KeyboardTimePicker />
                                        }
                                        control={control}
                                        rules={{ required: true }}
                                        defaultValue={defaultTimeSlotValues.startTime}
                                        id="startTime"
                                        name="startTime"
                                        label="Starts at"
                                        margin="normal"
                                        ampm={true}
                                        fullWidth
                                        value={values.startTime}
                                        onChange={handleStartTime}
                                        KeyboardButtonProps={{
                                            "aria-label": "change start time"
                                        }}
                                        error={errors.hasOwnProperty("startTime")}
                                        helperText={errors.startTime && errors.startTime.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        as={
                                            <KeyboardDatePicker />
                                        }
                                        control={control}
                                        rules={{ required: true }}
                                        defaultValue={defaultTimeSlotValues.endDate}
                                        id="endDate"
                                        name="endDate"
                                        label="Date"
                                        format="dd.MM.yyyy"
                                        clearable
                                        disablePast
                                        margin="normal"
                                        disableToolbar
                                        fullWidth
                                        value={values.endDate}
                                        onChange={handleEndDate}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date"
                                        }}
                                        error={errors.hasOwnProperty("needDate")}
                                        message='Hi!'
                                        helperText={errors.endDate && errors.endDate.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        as={
                                            <KeyboardTimePicker />
                                        }
                                        defaultValue={defaultTimeSlotValues.endTime}
                                        control={control}
                                        rules={{ required: true }}
                                        id="endTime"
                                        name="endTime"
                                        label="Ends at"
                                        margin="normal"
                                        ampm={true}
                                        fullWidth
                                        value={values.endTime}
                                        onChange={handleEndTime}
                                        KeyboardButtonProps={{
                                            "aria-label": "change end time"
                                        }}
                                        error={errors.hasOwnProperty("endTime")}
                                        helperText={errors.endTime && errors.endTime.message}
                                    />
                                </Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>

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
                        <Button type="Submit">
                            {/* onClick={onClose} color="primary"> */}
                            Add
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default FormDialog