import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Menu, X } from "lucide-react";
import TextLogo from "../../components/TextLogo";
import Footer from "../../components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Portfolio = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [images, setImages] = useState([]);

  // Fetch images from free API
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=20")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

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
            <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry columnsCount={4} gutter="12px">
            {images.map((img) => (
              <img
                key={img.id}
                src={`https://picsum.photos/id/${img.id}/600/800`}
                alt="gallery"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "12px"
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        </div>
        <div className="col-lg-1"></div>
       </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default Portfolio;
