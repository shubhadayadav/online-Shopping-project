import { Routes, Route } from "react-router-dom";
import MainlayOut from "../Pages/MainlayOut.jsx";
import Home from "../Pages/Home.jsx";
import Shop from "../Pages/Shop.jsx";
import Featuredprdct from "../Pages/Featuredprdct.jsx";
import Contact from "../Pages/Contact.jsx";
import View from "../Pages/View.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainlayOut />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<View />} />
          <Route path="/Features" element={<Featuredprdct />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
