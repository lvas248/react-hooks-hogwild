import Tile from "./Tile"
import React, { useState } from "react"


function Body( {hogs}){

    const [ isClicked, setIsClicked ] = useState("")
    
    function handleClick(e){
        console.log(e.target.previousSibling.innerText)
        setIsClicked(e.target.previousSibling.innerText)
    }

    console.log("state:",isClicked)
    const tiles = hogs.map( hog =>{
        return <Tile key={hog.name} hog={hog} isClicked={isClicked} handleClick={handleClick}/>
    })

    return (
        <div className="ui grid container">
            {tiles}
        </div>
    )
}

export default Body