import { Path } from "@/common/routing/Routing";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import error404 from "../../../assets/error404.jpg";
import error404 from "@/assets/error404.jpg";
import { Container } from "../Container";
import {buttonReturnHomeSx, pageNotFoundSx} from "@/common/styles";
import {capitalizeFirst} from "@/common/utils";

export const PageNotFound = () => (

    <Container>
        <Box
            sx={{
                pt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
            }}
        >
            <Box
                sx={{
                    height: 450,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="img"
                    src={error404}
                    alt="404 page not found"
                    sx={{
                        borderRadius: 10,
                        height: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            <Typography  sx={pageNotFoundSx}>
                We can’t find what you’re looking for
            </Typography>

            <Button
                variant="contained"
                component={Link}
                to={Path.Main}
                sx={ buttonReturnHomeSx}
            >
                {capitalizeFirst("return to home page")}

            </Button>
        </Box>
    </Container>
);
