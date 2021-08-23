import React from 'react'
import ReactStars from "react-rating-stars-component";

const SearchText = ({filtertext,filterrate}) => {
    return (
        <div style = {{display:"flex", justifyContent: "space-around", alignItems:"center"}}>
           
        <div style = {{display:"flex"}}>
            <form className="search">
        <input
          onChange={(event)=>filtertext(event.target.value)}
          placeholder='Search Movies'

          type="text"
        />

      </form>
      <ReactStars
    count={5}
    onChange={(newRating)=>filterrate(newRating)}
    size={24}
    activeColor="#ffd700"
  />,
        </div>
        </div>
    )
}

export default SearchText
