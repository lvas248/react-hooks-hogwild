import React from "react";
import piggy from "../assets/porco.png";
import  Filter from "./Filter"
import Sort from "./Sort"

const Nav = ( { handleFilterChange, handleSortChange } ) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div id="filterSort">
				<Filter handleFilterChange={handleFilterChange}/>
				<Sort handleSortChange={handleSortChange}/>
			</div>
			
		</div>
	);
};

export default Nav;
