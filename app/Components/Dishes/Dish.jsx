import "./Dish.css";

const DishSection = () => {
  return (
    <div className="dish-section-wrapper">
      <div className="header">
        <div className="left-section">
          <p> Special Dishes </p>
          <h2>Standout Dishes From Our Menu</h2>
        </div>

        <div className="right-section">
          <div className="icon left">
            <img
              className="left-arrow"
              alt="category"
              src="assets/arrows/left-arrow.png"
            />{" "}
          </div>
          <div className="icon right">
            <img
              className="right-arrow"
              alt="category"
              src="assets/arrows/right-arrow.png"
            />{" "}
          </div>
        </div>
      </div>

      <div className="menu-wrapper">
        <div className="menu-item">
          <div className="corner-curve">
            <img
              className="green-curve"
              alt="category"
              src="assets/green-curve.png"
            />{" "}
            <img className="heart" alt="category" src="assets/heart.png" />{" "}
          </div>

          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/menu/dish1.png"
            />{" "}
          </div>
          <h6> Fattoush salad </h6>
          <span> Description of the item </span>

          <div className="footer">
            <div className="left-item">
              <img alt="category" src="assets/price-footer.png" />{" "}
            </div>

            <div className="right-item">
              <img alt="category" src="assets/star.png" /> <span> 4.9</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="corner-curve">
            <img
              className="green-curve"
              alt="category"
              src="assets/green-curve.png"
            />{" "}
            <img
              className="heart"
              alt="category"
              src="assets/empty-heart.png"
            />{" "}
          </div>

          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/menu/dish2.png"
            />{" "}
          </div>
          <h6> Vegetable salad </h6>
          <span>Description of the item</span>

          <div className="footer">
            <div className="left-item">
              <img alt="category" src="assets/price2.png" />{" "}
            </div>

            <div className="right-item">
              <img alt="category" src="assets/star.png" /> <span> 4.9</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="corner-curve">
            <img
              className="green-curve"
              alt="category"
              src="assets/green-curve.png"
            />{" "}
            <img
              className="heart"
              alt="category"
              src="assets/empty-heart.png"
            />{" "}
          </div>

          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/menu/dish3.png"
            />{" "}
          </div>
          <h6> Egg vegi salad </h6>
          <span>Description of the item</span>

          <div className="footer">
            <div className="left-item">
              <img alt="category" src="assets/price2.png" />{" "}
            </div>

            <div className="right-item">
              <img alt="category" src="assets/star.png" /> <span> 4.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishSection;
