import { LayoutTwo } from "../layouts";
import { HeroSliderTwo } from "../components/HeroSlider";
import { IconBoxOne } from "../components/IconBox";
import RecentBlogs from "../components/RecentBlogs";

import heroSliderTwoData from "../data/hero-sliders/hero-slider-two.json";
import AllProduct from "../components/AllProduct";

const FashionTwo = () => {
  return (
    <LayoutTwo navPositionClass="justify-content-start">
      {/* hero slider */}
      <HeroSliderTwo heroSliderData={heroSliderTwoData} />
      {/* icon box */}
      <IconBoxOne />
      {/* all products */}
      <AllProduct />
      {/* recent blogs */}
      <RecentBlogs />
    </LayoutTwo>
  );
};

export default FashionTwo;
