import Homepage from './Component/homepage/homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './Component/shop/shop'
import Page from './Component/page'
import Blog from './Component/blog/Blog'
import Allpages from './pages/allpages'
import Blogdetails from './Component/blog/Blogdetails';
import Contact from './Component/contact/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Allpages />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<Blogdetails />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/shop" element={<Shop />} /> 
         <Route path="/cart" element={<Cart />} />
        <Route path="/shop-category" element={<ShopCategory/>} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/checkout" element={<Checkout />} />  */}
      </Routes>
    </Router>

  )
}
export default App
