import React from 'react';

export default function SearchBar(){
	function print() {
		console.log("changed");
	}
	return(
		<div className="searchBar">
			<input type="text" placeholder="Location ..." ></input>
		</div>
	)
}