import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menswear from './pages/collections/Menswear';
import Womenswear from './pages/collections/Womenswear';
import Kidswear from './pages/collections/Kidswear';
import Nightwear from './pages/collections/Nightwear';
import Fabric from './pages/collections/Fabric';
import FabricDesigns from './pages/collections/FabricDesign';
import AdminDashboard from './pages/AdminDashboard'; // ✅ Add this line

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/collections/menswear" element={<Menswear />} />
        <Route path="/collections/womenswear" element={<Womenswear />} />
        <Route path="/collections/kidswear" element={<Kidswear />} />
        <Route path="/collections/nightwear" element={<Nightwear />} />
        <Route path="/collections/fabric" element={<Fabric />} />

        {/* Dynamic Fabric Route */}
        <Route path="/fabric/:fabricName" element={<FabricDesigns />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
