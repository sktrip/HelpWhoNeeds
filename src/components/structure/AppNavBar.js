import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton,  Switch, FormControlLabel, FormGroup, MenuItem, Menu, SvgIcon } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& > svg": {
            margin: theme.spacing(2),
        },
    },   
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#9370db",
    },
}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
} /*For HomeIcons */

const AppNavBar = () => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(false); //change to true
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSignOut = () =>{
        setAuth(false);   
        //alert(auth);
        handleClose();
    };

    return (
        <div className={classes.root}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? "Logout" : "Login"}
                />
            </FormGroup>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <HomeIcon color="action" fontSize="large" onClick={event =>  window.location.href='/'} />
                    <Typography variant="h6" className={classes.title}>
                        Help Who Needs
            </Typography>

                    
                    <Button color="inherit" component={Link} to={"/about"}>
                        About
                    </Button>
                    <Button color="inherit" component={Link} to={"/contact"}>
                        Contact
                    </Button>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppNavBar;
