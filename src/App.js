import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import ProductHome from './Components/ProductHome';


function App() {
  const navigate = useNavigate();

  function Notfound () { return (
      <div> Path Not Found.   

        <button onClick={ ()=> {
          navigate ('/');
        }} > Get back to Home Page </button>
       
      </div> 
  )}

  return (
    <div>

      <div>
        <Link to="/" > Home </Link> <br/>
        <Link to="about" > About </Link>  <br/>
        <Link to="products" > Products </Link> <br/>
        <Link to={"products/Mobile"} > Mobile </Link> <br/>
        <button onClick={ ()=> {
          navigate ('/products/Mobile');
        }} > Display Mobile Page using useNavigate dynamically </button>

      </div>

      <h1> React Router Class </h1>


      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='about' element= {<About/>} />
        
        <Route path='products' element= {<Product/>} >
          {/* <Route path='/' element= {<ProductHome/>} /> */}
          <Route path=':productId' element= {<ProductDetails/>} />
        </Route>

        <Route path='*' element= {<Notfound/>} />
      </Routes>
      

    </div>
  );
}

export default App;
