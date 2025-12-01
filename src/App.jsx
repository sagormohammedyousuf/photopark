
import { Link } from 'react-router-dom'
import './App.css'
import { Facebook, Instagram, LinkedinIcon, X, Youtube } from 'lucide-react'
import HomeCarouselLeft from './components/HomeCarouselLeft'
import HomeCarouselRight from './components/HomeCarouselRight'

function App() {


  return (
    <>
      <div className='row'>
        <div className="col-lg-2 pe-0">
          <div className="sidebar">
            <div className='logo-text'>
              <p className='mb-0'>The</p>
              <p className='mb-0'>Photo</p>
              <p className='park-text'>Park</p>
            </div>

            <div className="menus mt-0 mt-lg-5">
              <div>
                <h1 className='menu-title'>Portfolios</h1>
                <ul className='portfolio-list'>
                  <li>
                    Pre Wedding
                  </li>
                  <li>
                   Post Wedding
                  </li>
                  <li>
                     Model shoot
                  </li>
                  <li>
                    Product shoot
                  </li>
                </ul>
              </div>

              <div>
                <h1 className='menu-title'>Pricing</h1>
                <ul className='portfolio-list'>
                  <li>
                    Wedding photography 
                  </li>
                  <li>
                    Cinematography
                  </li>
                </ul>
              </div>

              <div>
                <h1 className='menu-title'>Address</h1>
                <ul className='portfolio-list'>
                  <li>
                    Photo park
                  </li>
                  <li>
                    5730 Palashbari
                  </li>
                  <li>
                    Gaibandha, Bangladesh
                  </li>
                </ul>
              </div>

              <div>
                <h1 className='menu-title'>About us</h1>
                <h1 className='menu-title'>Contact</h1>
              </div>


              <footer className="social-links">
                <ul className='mb-0'>
                  <li>
                    <a href='facebook.com'>
                      <Facebook />
                    </a>
                    <a href='instagram.com'>
                      <Instagram />
                    </a>
                    <a href='youtube.come'>
                      <Youtube />
                    </a>
                    <a href='linkedin.com'>
                      <LinkedinIcon />
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
        <div className="col-lg-10 ps-0">
          <div className="row">
            <div className="col-lg-6 pe-0">
              <div className='leftSlider'>
                <HomeCarouselLeft/>
              </div>
            </div>
            <div className="col-lg-6 ps-0">
              <div className="rightSlider">
                <HomeCarouselRight/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
