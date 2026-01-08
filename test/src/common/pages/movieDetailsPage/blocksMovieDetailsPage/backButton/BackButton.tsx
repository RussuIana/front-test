
import {useNavigate} from "react-router";
import {StyledBackButton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/backButton/StyledBackButton.tsx";


export const BackButton = () => {
    const navigate = useNavigate();

    return (

            <StyledBackButton  onClick={() => navigate(-1)}>
                Back
            </StyledBackButton>

    );
};
