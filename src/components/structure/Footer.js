import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer:{
        boxSizing: "border-box",
        height: "50px",
        padding: "15px",
        backgroundColor: "#eee",
        borderTop: "1px solid #e0e0e0",
       // bottom: "0",
        position: "absolute",
        width: "100%",
        textAlign: "center",
    },

});

function Footer(){

    const classes = useStyles();
    return(
        <footer className= {classes.footer}>
        <div>
            Made by <a href="https://github.com/YourTechAngels">YourTechAngels</a>
        </div>
        </footer>
    )  
}


export default Footer;