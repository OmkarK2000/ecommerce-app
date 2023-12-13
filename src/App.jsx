import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./pages/Home"
import Product from "./Components/Product"
import Products from "./pages/Products"
import CategoryProducts from "./Components/CategoryProducts"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories/:name"element={<CategoryProducts/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App