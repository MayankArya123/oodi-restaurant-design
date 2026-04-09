import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <div className="left">
          <div className="info">
            <div className="company-icon">
              <img alt="down-arrow" src="assets/f.png" />
            </div>
            <img
              alt="oodi-img"
              className="company-name"
              src="assets/oodi.png"
            />
          </div>
          Savor the artistry where every dish is a culinary masterpiece
        </div>

        <div className="right-section">
          <div className="list">
            <div className="heading">Useful links</div>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="list">
            <div className="heading">Main Menu</div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/offers">Offers</a>
              </li>
              <li>
                <a href="/menus">Menus</a>
              </li>
              <li>
                <a href="/reservation">Reservation</a>
              </li>
            </ul>
          </div>

          <div className="list">
            <div className="heading">Contact Us</div>
            <ul>
              <li>
                <a href="mailto:example@email.com">example@email.com</a>
              </li>
              <li>
                <a href="tel:+64958248966">+64 958 248 966</a>
              </li>
              <li>
                <a href="tel:+64958248966">+64 958 248 966</a>
              </li>
              <li>
                <a href="#">Social media</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-botttom">
        <div className="logos-wrapper">
          <div className="logo logo-first">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/footer/fb.png" alt="Facebook" />
            </a>
          </div>

          <div className="logo">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/footer/instagram.png" alt="Instagram" />
            </a>
          </div>

          <div className="logo">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/footer/twitter.png" alt="Twitter" />
            </a>
          </div>

          <div className="logo">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/footer/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="copyright">
          Copyright 2023 Dscode | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
