import './App.css';
import { one, two, three } from "../src/components/Card/Images";
import {Card, listObject, Navbar, Card1} from './components'



function App() {
  
  return (
    <>
     <Card1 imgUrl={one} content='hello my friends'></Card1>
     <Navbar/>
     <listObject/>
    </>
  );
}

export default App;
