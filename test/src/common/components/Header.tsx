import {NavLink} from "react-router";


export const Header = () => {
    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>

           <NavLink to="/">Main</NavLink>
           <NavLink to="/categoryMovies">Category Movies</NavLink>
           <NavLink to="/filteredMovies">Filtered Movies</NavLink>
           <NavLink to="/search">Search</NavLink>
           <NavLink to="/favorites">Favorites</NavLink>
        </div>
    );
};
