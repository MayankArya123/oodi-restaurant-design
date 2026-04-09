"use client";
import "./Header.css";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="main-header">
      <div className="left">
        <div className="company-icon">
          <img alt="down-arrow" src="assets/f.png" />
        </div>
        <img alt="oodi-img" className="company-name" src="assets/oodi.png" />
      </div>
      <div className="middle">
        <a href="" className="active">
          Home
        </a>
        <div className="link-item">
          {" "}
          <a href="">Menu</a>{" "}
          <img
            className="down-arrow"
            alt="down-arrow"
            src="assets/down-arrow-icon.png"
          />{" "}
        </div>

        <div className="link-item">
          {" "}
          <a href="">Services</a>{" "}
          <img
            className="down-arrow"
            alt="down-arrow"
            src="assets/down-arrow-icon.png"
          />{" "}
        </div>
        <div className="link-item">
          {" "}
          <a href="">Offers</a>{" "}
          <img
            className="down-arrow"
            alt="down-arrow"
            src="assets/down-arrow-icon.png"
          />{" "}
        </div>
      </div>
      <div className="right">
        <img
          className="down-arrow"
          alt="search-icon"
          src="assets/search-icon.png"
        />{" "}
        <img
          className="down-arrow"
          alt="notification"
          src="assets/shopping-bag.png"
        />{" "}
        <button className="contact-btn" onClick={() => router.push("/contact")}>
          <img
            className="down-arrow"
            alt="notification"
            src="assets/phone-call.png"
          />{" "}
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
