import Link from "next/link";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={clsx(
          "d-flex",
          positionClass ? positionClass : "justify-content-end"
        )}
      >
        <li>
          <Link href="/" className="nav-link">
            HOME
          </Link>
        </li>

        <li>
          <Link href="/other/about-us" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/other/contact-us" className="nav-link">
            CONTACT US
          </Link>
        </li>
        <li>
          <Link href="/other/faq" className="nav-link">
            F.A.Q
          </Link>
        </li>

        <li>
          <Link href="/other/terms" className="nav-link">
            Terms & Conditions
          </Link>
        </li>

        <li>
          <Link href="/blog/list-left-sidebar" className="nav-link">
            BLOG
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
