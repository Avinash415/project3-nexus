
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinUp from './Components/SinUp';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Footer/>
      <Routes>
        <Route  path='/'  element={<ProductList/>}/>
        <Route  path='/add'  element={<AddProduct/>}/>
        <Route  path='/update/:id'  element={<UpdateProduct/>}/>
        <Route  path='/logout'  element={<h1>Logout Component</h1>}/>
        <Route  path='/profile'  element={<h1>Profile Component</h1>}/>
        <Route  path='/sinup'  element={<SinUp/>}/>
        <Route  path='/login'  element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
