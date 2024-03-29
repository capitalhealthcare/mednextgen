import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";

const GridLeftSidebar = () => {
  const { products } = useSelector((state) => state.product);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 12;

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, "category", "rf-cannulas");
    const filterSortedProducts = getSortedProducts(sortedProducts);
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products]);

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="RF Cannulas">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link style={{ color: "rgb(247, 156, 29)" }} href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active text-light">RF Cannulas</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={12}>
              {/* shop products */}
              <ShopProducts layout={"grid"} products={currentData} />

              {/* shop product pagination */}
              <div className="pagination pagination-style pagination-style--two justify-content-center">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default GridLeftSidebar;
