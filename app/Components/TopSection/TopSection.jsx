"use client";
import "./TopSection.css";
import { useRouter } from "next/navigation";

const TopSection = () => {
  const router = useRouter();

  return (
    <div className="top-section">
      <div className="left-section">
        <h2>
          Dive into Delights Of Delectable{" "}
          <span className="green-color"> Food </span>
        </h2>
        <p>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="call-to-action">
          <button
            className="order-now"
            onClick={() => router.push("/order-now")}
          >
            {" "}
            Order Now{" "}
          </button>
          <div className="watch-video-wrapper">
            <button className="watch-video"> Watch Video</button>
            <div className="watch-circle">
              <img
                className="down-arrow"
                alt="down-arrow"
                src="assets/youtube.png"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="image-section">
          <img
            className="down-arrow"
            alt="down-arrow"
            src="assets/girl.png"
          />{" "}
        </div>
        <img
          className="hot-spicy-img"
          alt="down-arrow"
          src="assets/hot-spicy-food.png"
        />{" "}
        <div className="bottom-menus">
          <div className="bottom-menu">
            <div className="left">
              <div className="ratings-image-wrapper">
                <img
                  className=""
                  alt="down-arrow"
                  src="assets/maggi.png"
                />{" "}
              </div>
            </div>
            <div className="right">
              <p> Spicy noodles </p>
              <img
                className="ratings"
                alt="down-arrow"
                src="assets/ratings.png"
              />{" "}
              <div className="price">
                {" "}
                <span className="dollar"> $ </span> 18.00
              </div>
            </div>
          </div>
          <div className="bottom-menu second">
            <div className="left">
              <div className="ratings-image-wrapper">
                <img
                  className=""
                  alt="down-arrow"
                  src="assets/salad.png"
                />{" "}
              </div>
            </div>
            <div className="right">
              <p> Vegetarian salad </p>
              <img
                className="ratings"
                alt="down-arrow"
                src="assets/four-star-ratings.png"
              />{" "}
              <div className="price">
                {" "}
                <span className="dollar"> $ </span> 23.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
