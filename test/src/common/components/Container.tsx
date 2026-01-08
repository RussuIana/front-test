import Box from "@mui/material/Box";
import type {ReactNode} from "react";


type ContainerProps ={
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
    <Box
        sx={{
            width: "100%",
            maxWidth: "1600px",
            mx: "auto",
            px: { xs: 2, md: 3 },
            boxSizing: "border-box",
        }}
    >
        {children}
    </Box>
);