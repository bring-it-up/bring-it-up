import React, { ReactElement, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    searchStringFn: (s: string) => void;
};

const SearchBar = ({ searchStringFn }: Props): ReactElement => {
	const [searchStr, setSearchStr] = useState<string>('');
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchStr(e.target.value);
	}

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
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
		</div>
	);
};

export default SearchBar;