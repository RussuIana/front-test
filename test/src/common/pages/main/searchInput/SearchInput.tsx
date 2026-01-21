import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {type ChangeEvent, useState} from "react";
import {useNavigate} from "react-router";
import ClearIcon from "@mui/icons-material/Clear";
import OutlinedInput from "@mui/material/OutlinedInput";
import {searchButtonSx, searchInputSx} from "@/common/styles";


type Props = {
    disabled?: boolean
}

export const SearchInput = ({disabled}: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    const handleClear = () => {
        setSearchValue("");
        navigate("/search");
    };

    const handleSearch = () => {
        if (!searchValue.trim()) return;
        navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    };

    const searchOnEnterHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
            <OutlinedInput
                fullWidth
                sx={searchInputSx}
                placeholder={"Search for a movie"}
                value={searchValue}
                disabled={disabled}
                onChange={changeInputHandler}
                onKeyDown={searchOnEnterHandler}
                endAdornment={
                    <InputAdornment position="end">
                        {searchValue && (
                            <IconButton onClick={handleClear} edge="end">
                                <ClearIcon/>
                            </IconButton>
                        )}
                    </InputAdornment>
                }
            />
            <Button variant="contained"
                    onClick={handleSearch}
                    disabled={!searchValue}
                    sx={searchButtonSx}
            >
                Search
            </Button>
        </div>
    );
}