import { useSelector } from "react-redux";
import { LayoutTwo } from "../layouts";
import { getProducts,getSortedProducts } from "../lib/product";
import { BannerTwo, BannerThree } from "../components/Banner";
import { HeroSliderTwo } from "../components/HeroSlider";
import { IconBoxOne } from "../components/IconBox";
import heroSliderTwoData from "../data/hero-sliders/hero-slider-two.json";
import { BlogGrid } from "../components/Blog";
import testimonialOneData from "../data/testimonials/testimonial-one.json";
import { TestimonialOne } from "../components/Testimonial";
import {
  ProductSliderEightWrapper,
  ProductSliderNine,
  OnlyProductSlider,
} from "../components/ProductSlider";
import { CountdownOne } from "../components/Countdown";

const FashionTwo = () => {
  const { products } = useSelector((state) => state.product);
  const productss = useSelector((state) => state);

  const featuredProducts = getProducts(products, "fashion", "featured", 8);
  const bestSellerProducts = getProducts(products, "fashion", "popular", 10);
  const saleProducts = getProducts(products, "fashion", "sale", 8);
  let product = products.slice(0,8)
  const trendingProducts = getSortedProducts(product, "","");

  return (
    <LayoutTwo navPositionClass="justify-content-start">
      {/* hero slider */}
      <HeroSliderTwo heroSliderData={heroSliderTwoData} />
      {/* icon box */}
      <IconBoxOne />
      {/* product slider */}
      <OnlyProductSlider title="Products" products={trendingProducts} />
      {/* banner */}
      {/* <BannerTwo /> */}
      {/* <CountdownOne
        backgroundImage="/assets/images/banner/furniture_banner3.jpg"
        // title="Sale 40% Off"
        subtitle="Please explore our offerings and find the right item and size your needs. Quick and easy checkout to get your products to you faster. Just select, pay and get on with running your business."
        url="/shop/grid-left-sidebar"
        dateTime="July 07, 2024 12:12:00"
      /> */}
      {/* banner */}
      {/* <BannerThree /> */}
      {/* testimonial */}
      {/* <TestimonialOne testimonialData={testimonialOneData} /> */}
      {/* blog grid */}
      {/* <BlogGrid /> */}
    </LayoutTwo>
  );
};

export default FashionTwo;
