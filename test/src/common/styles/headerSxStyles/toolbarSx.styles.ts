import type {SxProps} from "@mui/material";

export const toolbarSx: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: { xs: 100, sm: 90, md: 80 }, // valoare minimă pentru mobile
    height: "auto",        // permite să crească automat
    px: { xs: 2, sm: 3, md: 6 },         // padding adaptiv
    gap: 2,
    fontSize: 20,
    flexWrap: "wrap", // permite ca elementele să se mute pe rând dacă e nevoie
}