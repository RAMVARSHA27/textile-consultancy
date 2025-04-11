import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menswear from './pages/collections/Menswear';
import Womenswear from './pages/collections/Womenswear';
import Kidswear from './pages/collections/Kidswear';
import Nightwear from './pages/collections/Nightwear';
import Fabric from './pages/collections/Fabric';
import FabricDesign from './pages/collections/FabricDesign'; // ✅ Corrected
import AdminDashboard from './pages/AdminDashboard';
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/menswear" element={<Menswear />} />
        <Route path="/collections/womenswear" element={<Womenswear />} />
        <Route path="/collections/kidswear" element={<Kidswear />} />
        <Route path="/collections/nightwear" element={<Nightwear />} />
        <Route path="/collections/fabric" element={<Fabric />} />

        {/* Dynamic Fabric Route */}
        <Route path="/fabric/:fabricName" element={<FabricDesign />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin + Cart + Order */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
