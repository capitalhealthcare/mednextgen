import { useState } from "react";
import Link from "next/link";
import { SlideDown } from "react-slidedown";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";

const CategoryMenu = () => {
  const [categoryMenuExpandStatus, setCategoryMenuExpandStatus] =
    useState(true);
  // const [categoryMenuItemExpandStatus, setCategoryMenuItemExpandStatus] =
  //   useState(false);
  return (
    <div className="header-categories-wrap">
      <button
        className="category-menu-trigger"
        onClick={() => setCategoryMenuExpandStatus(!categoryMenuExpandStatus)}
      >
        <IoIosMenu />Pain Management Supplies
      </button>
      <nav className="category-menu dark-skin">
        <SlideDown closed={categoryMenuExpandStatus ? false : true}>
          <ul>
            <li>
              <Link href="/category/rf-cannulas" className="nav-link">
                <i className=""></i> <span>RF Cannulas</span>
              </Link>
            </li>
            <li>
              <Link href="/category/rf-electrodes" className="nav-link">
                <i className=""></i> <span>RF Electrodes</span>
              </Link>
            </li>
            <li>
              <Link href="/category/epidurals" className="nav-link">
                <i className=""></i> <span>Epidurals</span>
              </Link>
            </li>
            <li>
              <Link href="/category/spinal-needles" className="nav-link">
                <i className=""></i> <span>Spinal Needles</span>
              </Link>
            </li>
            <li>
              <Link href="/category/gloves" className="nav-link">
                <i className=""></i> <span>Gloves</span>
              </Link>
            </li>
            {/* <SlideDown closed={categoryMenuItemExpandStatus ? false : true}>
              <li>
                <Link href="/shop/grid-left-sidebar" className="nav-link">
                  <i className="flaticon-pijamas"></i> <span>Sleepwear</span>
                </Link>
              </li>
              <li>
                <Link href="/shop/grid-left-sidebar" className="nav-link">
                  <i className="flaticon-scarf"></i> <span>Seasonal Wear</span>
                </Link>
              </li>
              <li>
                <Link href="/shop/grid-left-sidebar" className="nav-link">
                  <i className="flaticon-vintage"></i> <span>Ethnic Wear</span>
                </Link>
              </li>
              <li>
                <Link href="/shop/grid-left-sidebar" className="nav-link">
                  <i className="flaticon-pregnant"></i>{" "}
                  <span>Baby Clothing</span>
                </Link>
              </li>
            </SlideDown> */}
            {/* <li>
              <button
                className="category-menu-expand-trigger"
                onClick={() =>
                  setCategoryMenuItemExpandStatus(!categoryMenuItemExpandStatus)
                }
              >
                More Categories <span>+</span>{" "}
              </button>
            </li> */}
          </ul>
        </SlideDown>
      </nav>
    </div>
  );
};

export default CategoryMenu;
