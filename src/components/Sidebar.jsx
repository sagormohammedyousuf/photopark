
import { Facebook, Instagram, LinkedinIcon, X, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import TextLogo from './TextLogo'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">

               <TextLogo/>

                <div className="menus mt-0 mt-lg-5">
                    <div>
                        <h1 className='menu-title'>Portfolios</h1>
                        <ul className='portfolio-list'>
                            <li>
                                <Link to="/portfolio">Wedding photography</Link>
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
                                <Link to="/pricing">Wedding photography</Link>

                            </li>
                            <li>
                                <Link to="/pricing">Cinematography</Link>

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


                    <div className="social-links">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar