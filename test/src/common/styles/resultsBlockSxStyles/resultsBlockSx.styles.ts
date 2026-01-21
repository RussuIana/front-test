import type {SxProps} from "@mui/material";

export const resultsBlockSx: SxProps = ()=>( {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    gap: 4,
    justifyContent: "center",
})