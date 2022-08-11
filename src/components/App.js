import React, { useState } from "react";
import Nav from "./Nav";
import Body from "./Body.js"

import hogs from "../porkers_data";

function App() {
	// const [ filter, setFilter] = useState("")
	// const [ sortBy, setSortBy ] = useState("")
	// const [ hogList, setHogList ] = useState(hogs)
	const [ filter, setFilter ] = useState("All")
	const [ sortBy, setSortBy ] = useState("")

	function handleFilterChange(e){
		setFilter(e.target.value)
	}
	function handleSortChange(e){
		setSortBy(e.target.value)
	}

	const filteredHogList = hogs.filter( hog =>{
		if(filter === "All") return true
		else{
			return hog.greased.toString() === filter
		}
	})

	const hogList = filteredHogList.sort((a,b)=>{
		if(sortBy === "name"){
			if(a.name < b.name)return -1
			else if(a.name > b.name)return 1
		}
		else if(sortBy === "weight") return a.weight - b.weight
	})

	return (
		<div className="App">
			<Nav handleFilterChange={handleFilterChange} handleSortChange={handleSortChange}/>
			<Body hogs={hogList} />
		</div>
	);
}

export default App;
