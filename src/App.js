import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
const [catagory, setCatagory] = useState("")
  return (<div>
<h1 style={{textAlign:"center",margin:"3rem"}}>TarikTarik Menu</h1>
    <Categories setCatagory={setCatagory}/>
 <Menu items={items} catagory={catagory} />

    </div>
  );
}

export default App;
