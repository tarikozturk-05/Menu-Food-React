import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  return (<div>
<h1 style={{textAlign:"center",margin:"3rem"}}>TarikTarik Menu</h1>
    <Categories/>
 <Menu items={items} />

    </div>
  );
}

export default App;
