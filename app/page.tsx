import Header from "./Components/Header/Header";
import TopSection from "./Components/TopSection/TopSection";
import CategoriesSection from "./Components/Categories/CategoriesSection";
import DishSection from "./Components/Dishes/Dish";
import TestimonialSection from "./Components/Testimonial/Testimonial";
import ServicesSection from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <TopSection />
      <CategoriesSection />
      <DishSection />
      <TestimonialSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
