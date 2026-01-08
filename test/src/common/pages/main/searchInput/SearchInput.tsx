import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {type ChangeEvent, useState} from "react";
import {useNavigate} from "react-router";
import ClearIcon from "@mui/icons-material/Clear";
import OutlinedInput from "@mui/material/OutlinedInput";
import {useTheme} from "@mui/material/styles";

type Props ={
    disabled?: boolean
}

export const SearchInput = ({disabled}: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const theme = useTheme(); // для Light/Dark

    const colors = {
        light: {
            border: 'rgba(113,106,106,0.5)',
            background: "#f6f5f5",
            focusBorder: "#561be4",
            focusBackground: "#f6f5f5",
        },
        dark: {
            border: "#555",
            background: "#222",
            focusBorder: "#385477",

        },
    };

    const current = theme.palette.mode === "light" ? colors.light : colors.dark;

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
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <OutlinedInput
                           sx={{
                               width: { xs: "100%", sm: 400, md: 600 },
                               borderRadius: "35px",
                               backgroundColor: current.background,
                               "& .MuiOutlinedInput-notchedOutline": {
                                   borderColor: current.border,
                               },
                               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                   borderColor: current.focusBorder,
                                   boxShadow: `0 0 8px ${current.focusBorder}`,
                               },
                               transition: "all 0.25s ease",
                           }}
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
                    disabled={!searchValue}
                    sx= {{
                            borderRadius: "30px",
                            border: "2px solid #561be4",
                            color: "#fcf9ff",
                            backgroundColor: "#561be4",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                        padding: "8px 20px", // увеличиваем кнопку
                        fontSize: "18px",
                        "&.Mui-disabled": {   // состояние disabled
                            backgroundColor: "#222",  // любой цвет для неактивной кнопки
                            color: "#eee",            // цвет текста для неактивной
                            borderColor: "#888787",      // если нужно, меняем рамку
                        },

                        }}

                        >
                Search
            </Button>
        </div>
    );
}