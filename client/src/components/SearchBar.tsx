import { ReactElement } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    getSearchStringFn: Function;
}

const SearchBar = ({ getSearchStringFn }: Props): ReactElement => {
    function handleClick() {
        // console.log((document.getElementById("search") as HTMLInputElement).value); // value is correct 
        getSearchStringFn((document.getElementById("search") as HTMLInputElement).value);
    }
    return (
        <div className="background">
            <form>
                <input id="search" type="text" placeholder="Search"></input>
                <button onClick={handleClick}>
                    <SearchIcon className="searchIcon"></SearchIcon>
                </button>
            </form>
        </div>

    );
}

export default SearchBar;