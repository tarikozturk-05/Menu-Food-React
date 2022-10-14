import React from "react";

const Menu = ({ items,catagory }) => {



  return (
    <div className="section-center">
      {items.filter((item)=>(catagory !=="" ? item.category === catagory : true )).map((items) => {
        const { id, title, img, desc,price } = items;
        return (
          <main key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <h3>{title}</h3>
              <h4 className="price">{price}</h4>
            </div>
            
            <p className="item-text">{desc}</p>
          </main>
        );
      })}
    </div>
  );
};

export default Menu;