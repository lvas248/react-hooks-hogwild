

function Tile( {hog, isClicked, handleClick} ){

    return(
        <div className="ui eight wide column"
             onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img alt={hog.name} className="pigImg" src={hog.image}/>
            <div style={{display : isClicked === hog.name? "" : "none"}}>
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased? "True" : "False"}</p>
                <p>Highest Medal Acheived: {hog["highest medal achieved"]}</p>
            </div>
        </div>
    )
}

export default Tile