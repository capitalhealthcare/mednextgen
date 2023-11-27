import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu =
      offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/#">Supplies</Link>
          <ul className="mobile-sub-menu">
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
          </ul>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/faq">F.A.Q</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>{" "}
        <li>
          <Link href="/terms">Terms & Conditions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
