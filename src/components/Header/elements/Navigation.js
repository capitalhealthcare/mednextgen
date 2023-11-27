import Link from "next/link";
import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  const router = useRouter();
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
        {router.pathname !== "/" && (
          <li>
            <Link href="/" className="nav-link">
              Supplies
              <IoIosArrowDown />
            </Link>

            <ul className="sub-menu sub-menu--one-column">
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
        )}
        <li>
          <Link href="/about-us" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="nav-link">
            CONTACT US
          </Link>
        </li>
        <li>
          <Link href="/faq" className="nav-link">
            F.A.Q
          </Link>
        </li>

        <li>
          <Link href="/terms" className="nav-link">
            Terms & Conditions
          </Link>
        </li>

        <li>
          <Link href="/blog" className="nav-link">
            BLOG
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
