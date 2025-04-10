import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHome } from "react-icons/fa";
import "./FabricPage.css";

const fabricData = {
  trending: [
    { name: "Festive Spark", price: "₹690/m", image: "/images/fabrics/trending1.jpg" },
    { name: "Elegant Bloom", price: "₹720/m", image: "/images/fabrics/trending2.jpg" },
    { name: "Minimal Gold", price: "₹750/m", image: "/images/fabrics/trending3.jpg" },
  ],
  cotton: [
    { name: "Cotton Soft", price: "₹400/m", image: "/images/fabrics/cotton1.jpg" },
    { name: "Cotton Premium", price: "₹450/m", image: "/images/fabrics/cotton2.jpg" },
    { name: "Cotton Handloom", price: "₹500/m", image: "/images/fabrics/cotton3.jpg" },
  ],
  silk: [
    { name: "Silk Shine", price: "₹950/m", image: "/images/fabrics/silk1.jpg" },
    { name: "Silk Luxe", price: "₹1050/m", image: "/images/fabrics/silk2.jpg" },
    { name: "Silk Royal", price: "₹1100/m", image: "/images/fabrics/silk3.jpg" },
  ],
  linen: [
    { name: "Linen Light", price: "₹670/m", image: "/images/fabrics/linen1.jpg" },
    { name: "Linen Organic", price: "₹710/m", image: "/images/fabrics/linen2.jpg" },
    { name: "Linen Premium", price: "₹740/m", image: "/images/fabrics/linen3.jpg" },
  ],
  printed: [
    { name: "Floral Print", price: "₹580/m", image: "/images/fabrics/printed1.jpg" },
    { name: "Tribal Print", price: "₹620/m", image: "/images/fabrics/printed2.jpg" },
    { name: "Geometric Print", price: "₹600/m", image: "/images/fabrics/printed3.jpg" },
  ],
  rayon: [
    { name: "Rayon Casual", price: "₹570/m", image: "/images/fabrics/rayon1.jpg" },
    { name: "Rayon Festive", price: "₹600/m", image: "/images/fabrics/rayon2.jpg" },
    { name: "Rayon Classic", price: "₹650/m", image: "/images/fabrics/rayon3.jpg" },
  ],
};

const fabricNames = ["Trending", "Cotton", "Silk", "Linen", "Printed", "Rayon"];

const FabricDesigns = () => {
  const { fabricName } = useParams();
  const designs = fabricData[fabricName.toLowerCase()] || [];

  return (
    <div className="fabric-page">
      {/* Header */}
      <header className="fabric-header">
        <div className="fabric-brand">
          <Link to="/" className="home-link">
            <FaHome className="icon" />
          </Link>
          <span className="brand-name">Kesavan Exports</span>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="icons">
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </header>

      {/* Fabric Section */}
      <div className="fabric-section">
        <h2 className="section-title">{fabricName} Designs</h2>

        {/* Navigation */}
        <nav className="fabric-nav">
          {fabricNames.map((name) => (
            <Link
              key={name}
              to={`/fabric/${name.toLowerCase()}`}
              className={`nav-link ${name.toLowerCase() === fabricName.toLowerCase() ? "active" : ""}`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Designs */}
        <div className="designs-grid">
          {designs.map((design, index) => (
            <div className="design-card" key={index}>
              <img src={design.image} alt={design.name} className="design-image" />
              <div className="design-info">
                <h3>{design.name}</h3>
                <p className="price">{design.price}</p>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FabricDesigns;
