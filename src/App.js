
import './App.css';
import data from "./data"
import List  from "./List"



 function App() {
  return (
    <div className="container">
      <List
      data={data}/>
      <button>Clear All</button>
    </div>
  );
}

export default App;
