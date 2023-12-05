import { useState } from 'react';
import './App.css';
import data from "./data"
import List  from "./List"



 function App() {
  const[people,setPeople]=useState(data)
  return (
    <main>
    <div className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List
      people={people}/>
      <button onClick={()=>setPeople([])}>Clear All</button>
    </div>
    </main>
  );
}

export default App;
