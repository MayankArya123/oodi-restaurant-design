import "./Testimonial.css";

const TestimonialSection = () => {
  return (
    <div className="testimionial-section">
      <div className="right-section">
        <div className="image-section">
          <img
            className="down-arrow"
            alt="down-arrow"
            src="assets/testimonial/chef.png"
          />{" "}
        </div>
        <img
          className="hot-spicy-img"
          alt="down-arrow"
          src="assets/hot-spicy-food.png"
        />{" "}
      </div>
      <div className="left-section">
        <p className="special-dish"> Testimonials </p>
        <h2>What Our Customers Say About Us</h2>
        <p>
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <div className="call-to-action">
          <div className="watch-video-wrapper">
            <div className="watch-circle">
              <img
                className="down-arrow"
                alt="down-arrow"
                src="assets/testimonial/customer1.png"
              />{" "}
            </div>
            <div className="watch-circle">
              <img
                className="down-arrow"
                alt="down-arrow"
                src="assets/testimonial/customer2.png"
              />{" "}
            </div>
            <div className="watch-circle">
              <img
                className="down-arrow"
                alt="down-arrow"
                src="assets/testimonial/customer3.png"
              />{" "}
            </div>
          </div>
          <div className="customer-feedback">
            <div className="">
              <h6> Customer Feedback </h6>
              <div className="flex">
                <img
                  className="hot-spicy-img"
                  alt="down-arrow"
                  src="assets/star.png"
                />{" "}
                <span> 4.9 </span>
                <span> (18.6k Reviews) </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
