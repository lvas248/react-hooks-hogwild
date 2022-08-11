

function Sort( {handleSortChange} ){

    return (
        <div id="sort">
            <label>Sort By: </label>
            <select onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="weight ">Weight</option>
            </select>
        </div>
    )
}

export default Sort