import { useSelector } from "react-redux";
import { LayoutTwo } from "../layouts";
import { getProducts } from "../lib/product";
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
} from "../components/ProductSlider";

const FashionTwo = () => {
  const { products } = useSelector((state) => state.product);
  const featuredProducts = getProducts(products, "fashion", "featured", 8);
  const bestSellerProducts = getProducts(products, "fashion", "popular", 10);
  const saleProducts = getProducts(products, "fashion", "sale", 8);
  const trendingProducts = getProducts(products, "electronics", "popular", 10);

  return (
    <LayoutTwo navPositionClass="justify-content-start">
      {/* hero slider */}
      <HeroSliderTwo heroSliderData={heroSliderTwoData} />
      {/* icon box */}
      <IconBoxOne />
      {/* tab product */}
      {/* product slider */}
      <ProductSliderEightWrapper
        featuredTitle="Featured Products"
        bestSellerTitle="Bestseller Products"
        saleTitle="Sale Products"
        featuredProducts={featuredProducts}
        bestSellerProducts={bestSellerProducts}
        saleProducts={saleProducts}
      />
      {/* banner */}
      <BannerTwo />
      {/* product slider */}
      <ProductSliderNine
        title="Trending Products"
        bannerImage="/assets/images/banner/shop_banner_img10.jpg"
        products={trendingProducts}
      />
      {/* banner */}
      <BannerThree />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* blog grid */}
      <BlogGrid />
    </LayoutTwo>
  );
};

export default FashionTwo;
