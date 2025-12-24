import Button from "@mui/material/Button";
import {useNavigate} from "react-router";


export const BackButton = () => {
    const navigate = useNavigate();

    return (

            <Button variant="contained" onClick={() => navigate(-1)}>
                Back
            </Button>

    );
};
