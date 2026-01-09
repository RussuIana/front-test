import type {SxProps} from "@mui/material";

export const navCenterSx:SxProps= {
    display: "flex",
    gap: { xs: 1, sm: 2, md: 3 },  // spacing între butoane adaptiv
    flexGrow: 1,       // ocupă spațiul liber
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",  // se mută pe rând dacă e nevoie

};