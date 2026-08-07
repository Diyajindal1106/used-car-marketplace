import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./admin/Dashboard";
import AddCar from "./admin/AddCar";
import ViewCars from "./admin/ViewCars";
import EditCar from "./admin/EditCar";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/cars" element={<Cars />} />

      <Route path="/cars/:id" element={<CarDetails />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      {/* Admin Routes */}

      <Route path="/admin" element={<Dashboard />} />

       <Route path="/admin/add" element={<AddCar />} />

      <Route path="/admin/view" element={<ViewCars />} />

      <Route path="/admin/edit/:id" element={<EditCar />} />

    </Routes>

  );

}

export default App;