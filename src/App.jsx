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
import AdminLogin from "./admin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";

function App() {

  return (

    <Routes>

      {/* User Routes */}

      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin Login */}

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/* Protected Admin Routes */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/add"
        element={
          <ProtectedRoute>
            <AddCar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/view"
        element={
          <ProtectedRoute>
            <ViewCars />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <ProtectedRoute>
            <EditCar />
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;