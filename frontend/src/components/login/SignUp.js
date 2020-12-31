import React, {Alert, useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useParams, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useAuth } from "../../contexts/AuthContext"
import { AuthContext } from "../../contexts/AuthContext"


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="https://material-ui.com/">
                Your Website
    </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// export const AuthContext = React.createContext();

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const classes = useStyles();
  const param = useParams();
  const user = param.user;
  

    async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords does not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)  
}

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
           </Typography>
           {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="email" 
                    ref={emailRef} 
                    // id="email"
                    label="Email Address"
                    // name="email"
                    // autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    // name="password"
                    type="password" 
                    ref={passwordRef}
                    label="Password"
                    // id="password"
                    // autoComplete="current-password"
                />
                 <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    // name="confirmPassword"
                    type="password" 
                    ref={passwordConfirmRef}
                    label="Confirm Password"
                    // id="password"
                    // autoComplete="current-password"
                />
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled = {loading}
                                color="primary"
                                component={Link}
                                to={`/registrationPage/${user}`}

                            >Sign Up
                    </Button>
              </form>
      {/* <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
      </div>  <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
  )
}