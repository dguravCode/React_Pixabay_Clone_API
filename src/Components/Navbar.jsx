import React from "react";
import PixabayContext from "../Context/PixabayContext";
import { useContext } from "react";

const Navbar = () => {
  const {fetchApiByCategory, setQuery} = useContext(PixabayContext)

  return (
    <>
      <div className="container text-center my-3">
      <button onClick={()=> fetchApiByCategory("nature")} type="button" className="btn btn-outline-primary mx-3">
        Nature
      </button>
      <button onClick={()=> fetchApiByCategory("people")} type="button" className="btn btn-outline-secondary mx-3">
        People
      </button>
      <button onClick={()=> fetchApiByCategory("religion")} type="button" className="btn btn-outline-success mx-3">
        Religion
      </button>
      <button onClick={()=> fetchApiByCategory("animals")} type="button" className="btn btn-outline-danger mx-3">
        Animals
      </button>
      <button onClick={()=> fetchApiByCategory("food")} type="button" className="btn btn-outline-warning mx-3">
        Food
      </button>
      <button onClick={()=> fetchApiByCategory("places")} type="button" className="btn btn-outline-info mx-3">
        places
      </button>
      <button onClick={()=> fetchApiByCategory("backgrounds")} type="button" className="btn btn-outline-light mx-3">
        Backgrounds
      </button>
      <button onClick={()=> fetchApiByCategory("science")} type="button" className="btn btn-outline-success mx-3">
        Science
      </button>
    </div>

    <div className="container" style={{width:'800px'}}>
      <input onChange={(e)=> setQuery(e.target.value)} type="text" className="form-control bg-dark text-light" />
    </div>
    </>
  );
};

export default Navbar;
