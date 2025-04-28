// src/components/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; // Ensure the correct path to your CSS

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/fabric">Manage Fabrics</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
