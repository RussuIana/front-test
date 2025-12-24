import Button from "@mui/material/Button";


type Props = {
    onReset: () => void;
};

export const ResetFiltersButton = ({ onReset }: Props) => {
    return (
        <Button
            variant="outlined"
            color="secondary"
            onClick={onReset}
            sx={{ mt: 2 }}
        >
            Reset filters
        </Button>
    );
};
