import { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { SubscribeEmail } from "../Newsletter";
import {
  IoLogoInstagram,
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
} from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const FooterTwo = () => {
  return (
    <Fragment>
      <footer className="bg--grey">
        <div className="footer-top footer-top--style-two">
          <Container>
            <Row>
              <Col lg={4} sm={12}>
                <div className="widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="/assets/images/logo_light.png" alt="logo" />
                    </Link>
                  </div>
                  <p style={{ color: "white" }}>
                    We simplify pain management procurement. Experience the best
                    with transparent pricing, exceptional service, and unmatched
                    simplicity.
                  </p>
                  <ul className="contact-info">
                    <li>
                      <IoIosPin color="#F79C1D" />
                      <Link href="#">
                        2071 N Collins Blvd Suite A Richardson TX 75080
                      </Link>
                      <p></p>
                    </li>
                    <li>
                      <IoIosMailOpen color="#F79C1D" />
                      <a href="mailto:admin@mednextgen.com">
                        admin@mednextgen.com
                      </a>
                    </li>
                    <li>
                      <IoIosPhonePortrait color="#F79C1D" />
                      <p></p>
                      <Link href="#">+1 (469) 866-5222</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title" style={{ color: "#F79C1D" }}>
                    Useful Links
                  </h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>

                    <li>
                      <Link href="/blog/list-left-sidebar">Blogs</Link>
                    </li>

                    <li>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title" style={{ color: "#F79C1D" }}>
                    Categories
                  </h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/category/rf-cannulas">RF Cannulas</Link>
                    </li>
                    <li>
                      <Link href="/category/rf-electrodes">RF Electrodes</Link>
                    </li>
                    <li>
                      <Link href="/category/epidurals">Epidurals</Link>
                    </li>
                    <li>
                      <Link href="/category/spinal-needles">Spinal Needles</Link>
                    </li>
                    <li>
                      <Link href="/category/gloves">Gloves</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="widget">
                  <h6 className="widget-title" style={{ color: "#F79C1D" }}>
                    Instagram
                  </h6>
                  <ul className="widget-instafeed widget-instafeed--col4">
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img1.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img2.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img3.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img4.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img5.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img6.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img7.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/images/instagram/insta_img8.jpg"
                          alt="insta_img"
                        />
                        <span className="insta-icon">
                          <IoLogoInstagram />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-bottom space-pb--30">
          <Container>
            <Row className="align-items-center">
              <Col lg={4}>
                <p className="text-center text-lg-start mb-3 mb-lg-0">
                  Copyright &copy; 2023{" "}
                  <a href="/" target="_blank">
                    mednextgen
                  </a>
                  . All Rights Reserved.
                </p>
              </Col>
              <Col lg={4} className="order-lg-first">
                <ul className="social-icons text-center text-lg-start mb-3 mb-lg-0">
                  <li>
                    <a href="#" className="sc_facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_twitter">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_youtube">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="footer-payment text-center text-lg-end">
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/visa.png" alt="visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/discover.png"
                        alt="discover"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/master_card.png"
                        alt="master_card"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/paypal.png" alt="paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/amarican_express.png"
                        alt="american_express"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterTwo;
