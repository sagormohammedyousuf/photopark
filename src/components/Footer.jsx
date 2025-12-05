import { Facebook, Instagram, Linkedin } from "lucide-react"
import TextLogo from "./TextLogo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerStyles = `
    footer {
      background-color: #000;
      color: #fff;
      padding-top: 60px;
      padding-bottom: 30px;
      margin-top: auto;
      border-top: 1px solid #333;
    }

    footer h2, footer h3 {
      font-weight: 700;
      margin-bottom: 20px;
      font-size: 1.1rem;
    }

    footer h2 {
      font-size: 1.5rem;
      letter-spacing: 2px;
    }

    .footer-column {
      margin-bottom: 40px;
    }

    .footer-tagline {
      color: #999;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .footer-links {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
    }

    .footer-links a:hover {
      color: #fff;
      padding-left: 8px;
    }

    .footer-links a::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #fff, #666);
      transition: width 0.3s ease;
    }

    .footer-links a:hover::before {
      width: 100%;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #222;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .social-link:hover {
      background-color: #fff;
      color: #000;
      transform: translateY(-3px);
    }

    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #333, transparent);
      margin: 40px 0;
    }

    .footer-bottom {
      display: flex;
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    .footer-copyright {
      color: #999;
      font-size: 0.9rem;
      margin: 0;
    }

    .footer-bottom-text {
      color: #777;
      font-size: 0.9rem;
      margin: 0;
    }

    .heart {
      color: #ff6b6b;
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }

    @media (max-width: 768px) {
      footer {
        padding-top: 40px;
      }

      footer h2 {
        font-size: 1.2rem;
      }

      footer h3 {
        font-size: 1rem;
      }

      .footer-column {
        margin-bottom: 30px;
      }

      .social-links {
        justify-content: center;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 10px;
      }
    }
  `

  return (
    <>
      <style>{footerStyles}</style>
      <footer>
        <div className="container">
          {/* Main Footer Content */}
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3 footer-column">
              <TextLogo/>
              <p className="footer-tagline">Creating exceptional digital experiences</p>
            </div>

            {/* Product Links */}
            <div className="col-md-2 footer-column">
              <h3>Product</h3>
              <ul className="footer-links">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#demo">Demo</a>
                </li>
                <li>
                  <a href="#changelog">Changelog</a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-md-2 footer-column">
              <h3>Company</h3>
              <ul className="footer-links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-md-2 footer-column">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li>
                  <a href="#privacy">Privacy</a>
                </li>
                <li>
                  <a href="#terms">Terms</a>
                </li>
                <li>
                  <a href="#cookies">Cookies</a>
                </li>
                <li>
                  <a href="#security">Security</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-md-3 footer-column">
              <h3>Follow</h3>
              <div className="social-links">
                <a href="#twitter" className="social-link" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                  <Linkedin/>
                </a>
                <a href="#github" className="social-link" aria-label="GitHub">
                  <Instagram/>
                </a>
                <a href="#dribbble" className="social-link" aria-label="Dribbble">
                  <Facebook/>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">© {currentYear} PHOTOPARK All rights reserved.</p>
            <p className="footer-bottom-text">
              Crafted with <span className="heart">♥</span> by Sagor Mohammed Yusuf
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
