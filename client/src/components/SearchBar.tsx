import React, { ReactElement, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputUnstyled from '@mui/base/InputUnstyled';
import { IconButton } from '@mui/material';

type Props = {
    searchStringFn: (s: string) => void;
};

const SearchBar = ({ searchStringFn }: Props): ReactElement => {
	const [searchStr, setSearchStr] = useState<string>('');
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchStr(e.target.value);
	}

	function handleSearch(e: React.SyntheticEvent) {
		e.preventDefault();
		searchStringFn(searchStr);
	}

	const searchButton = (
		<IconButton onClick={handleSearch}>
			<SearchIcon className="searchIcon"></SearchIcon>
		</IconButton>
	);

	return (
		<div className="searchBarContainer">
			<form onSubmit={handleSearch} className="searchBarForm">
				<InputUnstyled
					type="text"
					endAdornment={searchButton}
					onChange={handleChange}
					className="searchInput"
					placeholder="Search"
				/>
			</form>
		</div>
	);
};

export default SearchBar;