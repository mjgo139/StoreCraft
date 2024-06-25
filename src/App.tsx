import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListContainer from "./views/Product/ProductListContainer";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/productList' Component={ProductListContainer}/>

      </Routes>

    </>
  )
}

export default App
