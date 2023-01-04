// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar'

function App() {
  return (
    <>  
      <Navbar/>
      <ItemListContainer greeting="Hola! Bienvenidos a donuts world"/>
    </>
  );
}

export default App;
