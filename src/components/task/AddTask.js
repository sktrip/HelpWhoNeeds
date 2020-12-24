import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PetsIcon from '@material-ui/icons/Pets';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import NewTaskForm from './NewTaskForm'

const useStyles =
    makeStyles(
        {
            largeButton: {
                border: 5,
                color: "#FF8E53",
                padding: "15px 15px",
                height: 100,
                width: 100,
            },
            largeIcon:
                { fontSize: 80 },

            label: {
                flexDirection: 'column'
            },
            icon: {
                fontSize: '32px !important',
                marginBottom: 5
            }
        })

function AddTask() {

    const [addingTaskOn, setAddingTask] = React.useState(false)

    const handleAddClick = () => {
        console.log("It's working!")
        return <NewTaskForm />
    }



    const classes = useStyles();
    // return <ThemeProvider theme={theme}>
    return <div className="App">
        <h1>I need help with...</h1>
        <Button startIcon={<ShoppingCartIcon className={classes.icons} />}
            className={classes.button} />
        <Button startIcon={<LocalPharmacyIcon style={{ fontSize: 80 }} />}
            className={classes.button} />
        <IconButton className={classes.largeButton} aria-label="Delete">
            <PetsIcon className={classes.largeIcon} />
        </IconButton>
        {/* className={classes.button} /> */}
        <Button classes={{ root: classes.largeButton, label: classes.label }}>
            <LocalHospitalIcon className={classes.icon} />
        Hospital
        </Button>
        <Button startIcon={<PhoneIcon />}
            className={classes.button} />
        <Button startIcon={<LiveHelpIcon />}
            className={classes.button} />
    </div>
    // </ThemeProvider>
}

export default AddTask