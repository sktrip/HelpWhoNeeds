import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import AddressForm from './AddressForm';


const useStyles = {
  textFld: { width: '85%', height: 40, paddingLeft: 8 } , 
  button: {
    border: '4px',
    color: "default",
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: '10px',
  },
  p: {
     textAlign:"left"
  },
};

  export default function RegistrationPage(props) {

    const initialInputState = { firstName : "" , lastName:"" , DateOfBirth:"" } 
    
    const [formData, setFormData] = useState({initialInputState})

    const { firstName , lastName, DateOfBirth } = formData
    

    const handleChange= (e) => {
      setFormData({...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
      alert('Data has been successfully saved')
      console.log(formData)
      }

      const param = useParams();
      const user  = param.user;
                
   return (
     
   <React.Fragment>
     
      <Typography variant="h4" align="center"> Registration form</Typography>

      <p style = {useStyles.p}> Please enter your details here</p>
      <form onSubmit={handleSubmit} >      
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            type ="text"
            name="firstName"
            label="First name"
            variant="outlined"
            onChange = { handleChange }
            value= {firstName || ''}
            style = {useStyles.textFld}
            autoComplete="given-name"
          />
        </Grid>
         <Grid item xs={12} sm={6} >
          <TextField
            required
            id="lastName"
            name="lastName"
            type ="text"
            label="Last name"
            onChange = { handleChange }
            value= {lastName || ''}
            variant="outlined"
            style = {useStyles.textFld}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="DateOfBirth"
            name="DateOfBirth"
            type= "date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Date Of Birth"
            onChange = { handleChange }
            value= {DateOfBirth || ''}
            variant="outlined"
            style = {useStyles.textFld}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <AddressForm />
        </Grid>  
       
        <Grid item xs={12}>
         
         { (`${user}` === 'Volunteer') && 
          <FormControlLabel
            control={<Checkbox color="secondary" style = {{ marginLeft: '5px' }} name="dbsCheck" value="yes" />}
            label="I have a valid DBS certificate"
          /> }  

        </Grid>
        <Grid item xs={12} align="center">

        <Button variant = "contained"  className = "btn btn-primary w-100" type="submit">Submit</Button>
        </Grid>
        </Grid>
        </form>
    </React.Fragment>   
  
)}