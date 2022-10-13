import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="seciton-center">
      {items.map((items) => {
        const { id, title, img, desc } = items;
        return (
          <main key={id} className="menu-main">
            <img src={img} alt={title} />
          </main>
        );
      })}
    </div>
  );
};

export default Menu;