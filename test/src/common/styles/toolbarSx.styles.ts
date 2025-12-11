import type {SxProps} from "@mui/material";

export const toolbarSx: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "80px",
    px: { xs: 3, sm: 4, md: 6 },
    gap:2,
    fontSize: "20px",


    // "@media (max-width: 600px)": {
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     minHeight: "auto",
    //     gap: "8px",
    //     padding: "10px 0",
    // },

}