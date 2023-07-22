import { Routes, Route } from "react-router-dom";
import MainlayOut from "../Pages/MainlayOut.jsx";
import Home from "../Pages/Home.jsx";
import Shop from "../Pages/Shop.jsx";
import Featuredprdct from "../Pages/Featuredprdct.jsx";
// import Contact from "../Pages/Contact.jsx";
import View from "../Pages/View.jsx";
// import Cart from "../Pages/Cart.jsx";
import About from "../Pages/About.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainlayOut />}>
          {/* <Route path="/cart" element={<Cart />} /> */}

          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Features" element={<Featuredprdct />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/viewcart" element={<View />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
