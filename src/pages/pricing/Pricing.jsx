import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import './pricing.css'
import { Check, Menu, TextAlignJustify, X } from 'lucide-react'
import TextLogo from '../../components/TextLogo'
import Footer from '../../components/Footer'
const Pricing = () => {
    const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='row pricing-page position-relative'>
      <div className="pricing-main-logo">
        <TextLogo />
      </div>
  
          {/* Mobile Toggle Buttons */}
        <div className="mobile-menu-toggle">
          {!showSidebar ? (
            <Menu 
              className='text-dark menu-icon' 
              size={32}
              onClick={() => setShowSidebar(true)}
            />
          ) : (
            <X 
              className='text-white menu-icon close-icon' 
              size={32}
              onClick={() => setShowSidebar(false)}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className={`sidebar-container ${showSidebar ? 'active' : ''}`}>
          <Sidebar />
        </div>
{/*     
      <div className="col-xl-2 col-lg-3 pe-0 position-relative">
      </div> */}
      <div className="col-12 col-lg- pe-0 ps-0">
        <div className="pricing-banner">
          <img src='https://shtheme.org/demosd/ckarla/wp-content/uploads/2021/09/5-1.jpg' alt='banner img' />

          <div className="banner-title-card">
            Prices & Packages
          </div>

        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className='pricing-heading'>
                Clear Prices & Complete Packages
              </h2>
            </div>
            <div className="col-lg-8">
              <p className='pricing-para'>
                Are you looking for an experienced destination photographer for affordable prices? You found me! My pricing and packages are designed to appeal to everyone.

                <br /><br />
                Whether you are looking for a wedding, elopement, engagement, family, maternity, or solo travel photography session, I have the perfect package for you. My pricing is transparent and straightforward, with no hidden fees or surprises. I believe that everyone deserves beautiful photos, and I strive to make my services accessible to all.
              </p>
            </div>
          </div>

          <div className="row mt-5 p-3 p-lg-0">
            <div className="col-lg-4 p-lg-4">
              <div className="pricing-card">
                <div className="pricing-card-img">
                  <img src='https://shtheme.org/demosd/ckarla/wp-content/uploads/2021/09/1-2.jpg' alt='dsf' />
                </div>
                <div className="pricing-card-content">
                  <h3 className='pricing-card-title'>Wedding photography</h3>
                  <p className='pricing-card-para'>$300</p>
                  <ul className='pricing-card-list'>
                    <li><Check className='text-success' size={16} /> 1 Hour Session</li>
                    <li><Check className='text-success' size={16} /> 20 Edited Photos</li>
                    <li><Check className='text-success' size={16} /> Online Gallery</li>
                    <li><X className='text-danger' size={16} /> Print Release</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-lg-4">
              <div className="pricing-card">
                <div className="pricing-card-img">
                  <img src='https://shtheme.org/demosd/ckarla/wp-content/uploads/2021/09/1-2.jpg' alt='dsf' />
                </div>
                <div className="pricing-card-content">
                  <h3 className='pricing-card-title'>Cinematography</h3>
                  <p className='pricing-card-para'>$600</p>
                  <ul className='pricing-card-list'>
                    <li><Check className='text-success' size={16} /> 1 Hour Session</li>
                    <li><Check className='text-success'size={16} /> 20 Edited Photos</li>
                    <li><Check className='text-success'  size={16} /> Online Gallery</li>
                    <li><X className='text-danger' size={16} /> Print Release</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-lg-4">
              <div className="pricing-card">
                <div className="pricing-card-img">
                  <img src='https://shtheme.org/demosd/ckarla/wp-content/uploads/2021/09/1-2.jpg' alt='dsf' />
                </div>
                <div className="pricing-card-content">
                  <h3 className='pricing-card-title'>Model Photography</h3>
                  <p className='pricing-card-para'>$200</p>
                  <ul className='pricing-card-list'>
                    <li><Check className='text-success' size={16} /> 1 Hour Session</li>
                    <li><Check className='text-success' size={16} /> 20 Edited Photos</li>
                    <li><Check className='text-success' size={16} /> Online Gallery</li>
                    <li><X className='text-danger' size={16} /> Print Release</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Pricing


