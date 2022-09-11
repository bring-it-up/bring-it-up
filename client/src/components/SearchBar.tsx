import { ReactElement } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="background">
            <form>
                <input type="text" placeholder="Search"></input>
                <button>
                    <SearchIcon></SearchIcon>
                </button>
            </form>
        </div>

    );
}

export default SearchBar;