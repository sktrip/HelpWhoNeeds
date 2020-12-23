import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Landing = () => {
    const handleClick = () => {
        setUser("Volunteer");
    };

    const [user, setUser] = useState(" ");
    return (
            <div id="content-wrapper" align="center">
                <h1>Help Who Needs</h1>
                <p>
                    Our TechForGood project aims to match a volunteer with a vulnerable
                    person who is shielding in these unprecedented times. Hence our
                    application is called HelpWhoNeeds. The app will aim to match a
                    volunteer with a vulnerable person in their immediate local area
                    helping with chores such as shopping, GP visits, prescriptions, dog
                    walking or just some social contact with the appropriate measures in
                    place. We hope this app brings some comfort and relief to the users
                    with a sense of moral and social obligation. {user}
        </p>

        <p id="info-p"> If you would like help or need any assistant using our system, please call <strong>0800 123 4567</strong>.</p>
                <Button
                    variant="outlined"
                    color="default"
                    component={Link}
                    to={"/login"}
                    onClick={() => {
                        setUser("Vulnerable");
                }}
                >
                    I need Help
        </Button>
                <Button
                    variant="outlined"
                    color="default"
                    component={Link}
                    to={"/login"}
                    onClick={handleClick}

                >
                    I can Help
        </Button>
        </div>
        
    );
};

export default Landing;
