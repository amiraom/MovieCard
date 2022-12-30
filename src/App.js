import logo from './logo.svg';
import './App.css';
import { CardList } from './CardList';
import Description from './Description';
import {Routes, Route, Link } from "react-router-dom";
import {data} from './data'
function App() {
  


  
  return (
    <div className="App">
 
<Routes>
<Route path="/" element={<CardList movie={data}/>}></Route>
<Route  path='/description/:id' element={<Description detail={data}/>}>
</Route>
</Routes>

    </div>
  );
}

export default App;
