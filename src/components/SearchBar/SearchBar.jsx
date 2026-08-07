import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }) {

    return (

        <div className="search-bar">

            <FiSearch className="search-icon" />

            <input

                type="text"

                placeholder="Search by company or model..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

        </div>

    );

}

export default SearchBar;