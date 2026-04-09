import "./Categories.css";

const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <div className="heading">Customer Favorites</div>

      <h2 className="sub-heading">Popular Catagories</h2>

      <div className="cards-wrapper">
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/categories/burger.png"
            />{" "}
          </div>
          <h6>Main Dish</h6>
          <span>(86 dishes)</span>
        </div>
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/categories/sandwich.png"
            />{" "}
          </div>
          <h6>Break Fast</h6>
          <span> (12 break fast) </span>
        </div>
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/categories/icecream.png"
            />{" "}
          </div>
          <h6> Dessert </h6>
          <span> (48 dessert) </span>
        </div>
        <div className="card">
          <div className="circle">
            <img
              className="category"
              alt="category"
              src="assets/categories/juice.png"
            />{" "}
          </div>
          <h6> Browse All </h6>
          <span> (255 Items) </span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
