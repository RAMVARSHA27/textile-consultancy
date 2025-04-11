import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHome } from "react-icons/fa";
import "./FabricPage.css";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";



const fabricData = {
  trending: [
    { name: "Festive Spark", price: "₹690/m", image: "/images/fabrics/trending1.jpg" },
    { name: "Elegant Bloom", price: "₹720/m", image: "/images/fabrics/trending2.jpg" },
    { name: "Minimal Gold", price: "₹750/m", image: "/images/fabrics/trending3.jpg" },
    { name: "Golden Gleam", price: "₹770/m", image: "/images/fabrics/trending4.jpg" },
    { name: "Bright Bloom", price: "₹800/m", image: "/images/fabrics/trending5.jpg" },
  ],
  cotton: [
    { name: "Cotton Soft", price: "₹400/m", image: "/images/fabrics/cotton1.jpg" },
    { name: "Cotton Premium", price: "₹450/m", image: "/images/fabrics/cotton2.jpg" },
    { name: "Cotton Handloom", price: "₹500/m", image: "/images/fabrics/cotton3.jpg" },
    { name: "Cotton Floral", price: "₹480/m", image: "/images/fabrics/cotton4.jpg" },
    { name: "Cotton Classic", price: "₹520/m", image: "/images/fabrics/cotton5.jpg" },
  ],
  silk: [
    { name: "Silk Shine", price: "₹950/m", image: "/images/fabrics/silk1.jpg" },
    { name: "Silk Luxe", price: "₹1050/m", image: "/images/fabrics/silk2.jpg" },
    { name: "Silk Royal", price: "₹1100/m", image: "/images/fabrics/silk3.jpg" },
    { name: "Silk Elegant", price: "₹980/m", image: "/images/fabrics/silk4.jpg" },
    { name: "Silk Heritage", price: "₹1150/m", image: "/images/fabrics/silk5.jpg" },
  ],
  linen: [
    { name: "Linen Light", price: "₹670/m", image: "/images/fabrics/linen1.jpg" },
    { name: "Linen Organic", price: "₹710/m", image: "/images/fabrics/linen2.jpg" },
    { name: "Linen Premium", price: "₹740/m", image: "/images/fabrics/linen3.jpg" },
    { name: "Linen Classic", price: "₹720/m", image: "/images/fabrics/linen4.jpg" },
    { name: "Linen Gold", price: "₹760/m", image: "/images/fabrics/linen5.jpg" },
  ],
  printed: [
    { name: "Floral Print", price: "₹580/m", image: "/images/fabrics/printed1.jpg" },
    { name: "Tribal Print", price: "₹620/m", image: "/images/fabrics/printed2.jpg" },
    { name: "Geometric Print", price: "₹600/m", image: "/images/fabrics/printed3.jpg" },
    { name: "Modern Print", price: "₹630/m", image: "/images/fabrics/printed4.jpg" },
    { name: "Royal Print", price: "₹650/m", image: "/images/fabrics/printed5.jpg" },
  ],
  rayon: [
    { name: "Rayon Casual", price: "₹570/m", image: "/images/fabrics/rayon1.jpg" },
    { name: "Rayon Festive", price: "₹600/m", image: "/images/fabrics/rayon2.jpg" },
    { name: "Rayon Classic", price: "₹650/m", image: "/images/fabrics/rayon3.jpg" },
    { name: "Rayon Designer", price: "₹620/m", image: "/images/fabrics/rayon4.jpg" },
    { name: "Rayon Soft", price: "₹640/m", image: "/images/fabrics/rayon5.jpg" },
  ],
};

const fabricNames = ["Trending", "Cotton", "Silk", "Linen", "Printed", "Rayon"];

const FabricDesigns = () => {
  const { fabricName } = useParams();
  const formattedName = fabricName.charAt(0).toUpperCase() + fabricName.slice(1).toLowerCase();
  const designs = fabricData[fabricName.toLowerCase()] || [];

  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (design) => {
    const designWithType = { ...design, fabricType: formattedName };
    addToCart(designWithType);
    
  };

  return (
    <>
      <Navbar showSearch={true} />
  
      <div className="fabric-page">
        {/* Fabric Section */}
        <div className="fabric-section">
          <h2 className="section-title">{formattedName} Designs</h2>
  
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
  
          {/* Designs Grid */}
          <div className="designs-grid">
            {designs.map((design, index) => {
              const isInCart = cartItems.some((item) => item.name === design.name);
  
              return (
                <div className="design-card" key={index}>
                  <img src={design.image} alt={design.name} className="design-image" />
                  <div className="design-info">
                    <h3>{design.name}</h3>
                    <p className="price">{design.price}</p>
                    <div className="button-group">
                      <button
                        className={`action-btn ${isInCart ? "added" : ""}`}
                        onClick={() => handleAddToCart(design)}
                        disabled={isInCart}
                      >
                        {isInCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                      <button
                        className="action-btn order"
                        onClick={() =>
                          navigate("/order", {
                            state: {
                              item: {
                                ...design,
                                fabricType: formattedName,
                              },
                            },
                          })
                        }
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
  
};

export default FabricDesigns;
