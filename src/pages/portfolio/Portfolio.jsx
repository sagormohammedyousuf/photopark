import { useState, } from "react";
import Sidebar from "../../components/Sidebar";
import { Menu, X } from "lucide-react";
import TextLogo from "../../components/TextLogo";
import Footer from "../../components/Footer";


const Portfolio = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  



  return (
    <div className="row pricing-page position-relative bg-dark">
      <div className="pricing-main-logo mb-5">
        <TextLogo />
      </div>

      {/* Mobile Toggle Buttons */}
      <div className="mobile-menu-toggle">
        {!showSidebar ? (
          <Menu
            className="text-dark menu-icon"
            size={32}
            onClick={() => setShowSidebar(true)}
          />
        ) : (
          <X
            className="text-white menu-icon close-icon"
            size={32}
            onClick={() => setShowSidebar(false)}
          />
        )}
      </div>

      {/* Sidebar */}
      <div className={`sidebar-container ${showSidebar ? "active" : ""}`}>
        <Sidebar />
      </div>

      {/* ---- IMAGE GALLERY ---- */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Image Gallery</h2>

        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
         
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
