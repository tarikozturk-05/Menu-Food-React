import React from 'react';

const Categories = ({setCatagory}) => {
  return (
    <div className="btn-container">
      <button onClick={()=>setCatagory("")} className="filter-btn">All</button>

      <button onClick={()=>setCatagory("breakfast") }className="filter-btn">Breakfast</button>

      <button onClick={()=>setCatagory("lunch")} className="filter-btn">Lunch</button>

      <button onClick={()=>setCatagory("shakes")}className="filter-btn">Shakes</button>
    </div>
  );
};

export default Categories;
