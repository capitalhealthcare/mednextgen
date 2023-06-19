import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import { IoIosFlash } from "react-icons/io";

const AllProduct = () => {
  const { products } = useSelector((state) => state.product);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, "new", "");
    const filterSortedProducts = getSortedProducts(sortedProducts);
    sortedProducts = filterSortedProducts;

    setCurrentData(sortedProducts.slice(0, 20));
  }, [products]);

  return (
    <div className="shop-content">
      <Container>
        <div className="section-title section-title--style-two heading-s1 d-flex justify-content-between align-items-center space-mb--30">
          <h4>Products</h4>
          <Link href="/products" className="text-default">
            <IoIosFlash />
            View All
          </Link>
        </div>
        {/* shop products */}
        <ShopProducts layout={"grid"} products={currentData} />
      </Container>
    </div>
  );
};

export default AllProduct;
