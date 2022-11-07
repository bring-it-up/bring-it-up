import React, { FormEventHandler, MouseEventHandler, ReactElement, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

type Props = {
    searchStringFn: Function;
}

const SearchBar = ({ searchStringFn }: Props): ReactElement => {
    var [searchStr, setSearchStr] = useState<String>('');
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchStr(e.target.value);
        // console.log((document.getElementById("search") as HTMLInputElement).value); // value is correct 
        // getSearchStringFn((document.getElementById("search") as HTMLInputElement).value);
        console.log(searchStr);
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log("pressed and not refreshed")
        console.log(searchStr);
        searchStringFn(searchStr);
    }

    return (
        <div className="background">
            <form>
                <input id="search" type="text" placeholder="Search" onChange={handleChange}></input>
                <button onClick={handleClick}>
                    <SearchIcon className="searchIcon"></SearchIcon>
                </button>
            </form>
            {/* <div>
                <TextField value={searchStr} onChange={handleChange} />
            </div> */}
        </div>
    );
}

export default SearchBar;