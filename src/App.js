import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import AllProducts from "./components/allproduct";
import CartPage from "./components/cartpage";
import ProductDetails from "./components/product-details";
import PageNotFround from "./components/404";
function App() {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <Routes>
            <Route path="/" element={<Navigate to="/home-page" />} />
            <Route path="/all-products/:id" element={<AllProducts />} />
            <Route path="/home-page" element={<Homepage />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />

            <Route path="/my-cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFround />} />
          </Routes>
        </section>
      </section>
    </>
  );
}

export default App;
