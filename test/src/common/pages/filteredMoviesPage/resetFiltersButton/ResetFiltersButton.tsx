
import {ButtonFilterReset} from "@/common/pages/filteredMoviesPage/resetFiltersButton/ButtonFilterReset.tsx";

type Props = {
    onReset: () => void;
};

export const ResetFiltersButton = ({ onReset }: Props) => {
    return (
        <ButtonFilterReset
            onClick={onReset}
            sx={{ mt: 2 }}
        >
            Reset filters
        </ButtonFilterReset>
    );
};
