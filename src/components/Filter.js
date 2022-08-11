
function Filter({ handleFilterChange }){

    return (
      
        <div id="filter">
            <label>Filter: </label>
            <select onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value={true} >Greased</option>
                <option value={false}>Not Greased</option>
            </select>
        </div>
        
    )
}

export default Filter