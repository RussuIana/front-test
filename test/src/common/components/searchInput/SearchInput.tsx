import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {type ChangeEvent, useState} from "react";
import {useNavigate} from "react-router";
import ClearIcon from "@mui/icons-material/Clear";
import OutlinedInput from "@mui/material/OutlinedInput";


type Props ={
    disabled?: boolean
}

export const SearchInput = ({disabled}: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    //Ввод текста обновляет стейт
    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    // Очистка поля
    const handleClear = () => {
        setSearchValue("");
    };
    // Основной поиск
    const handleSearch = () => {
        if (!searchValue.trim()) return;
        navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    };
    // Поиск по Enter
    const searchOnEnterHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div>
            <OutlinedInput
                placeholder={"Search for a movie"}
                value={searchValue}
                disabled={disabled}
                onChange={changeInputHandler}
                onKeyDown={searchOnEnterHandler}
                endAdornment={
                    <InputAdornment position="end">
                        {searchValue && (
                            <IconButton onClick={handleClear} edge="end">
                                <ClearIcon />
                            </IconButton>
                        )}
                    </InputAdornment>
                }
            />
            <Button variant="contained"
                onClick={handleSearch}
                    disabled={!searchValue}>
                Search
            </Button>
        </div>
    );
}