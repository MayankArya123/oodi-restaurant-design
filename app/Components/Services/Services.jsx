"use client";
import "./Services.css";
import { useRouter } from "next/navigation";

const ServicesSection = () => {
  const router = useRouter();

  return (
    <div className="services-section">
      <div className="left-section">
        <p className="special-dish"> Our Story & Services </p>
        <h2>Our Culinary Journey And Services</h2>
        <p>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <div className="call-to-action">
          <button className="order-now" onClick={() => router.push("/explore")}>
            {" "}
            Explore
          </button>
        </div>
      </div>
      <div className="right-section cards-wrapper">
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/services/services1.png"
            />{" "}
          </div>
          <h6>Catering</h6>
          <span>Delight your guests with our flavors and presentation</span>
        </div>
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/services/services2.png"
            />{" "}
          </div>
          <h6> Fast delivery </h6>
          <span> We deliver your order promptly to your door </span>
        </div>
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/services/services3.png"
            />{" "}
          </div>
          <h6> Online Ordering </h6>
          <span>
            {" "}
            Explore menu & order with ease using our Online Ordering{" "}
          </span>
        </div>
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/services/services4.png"
            />{" "}
          </div>
          <h6> Gift Cards </h6>
          <span>Give the gift of great food with our gift cards!</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
