import Link from "next/link";
import { LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegMap, FaRegEnvelopeOpen, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Contact Us">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Contact Us</li>
        </ol>
      </BreadcrumbOne>
      <div className="contact-content space-pt--r100 space-pb--r100">
        <div className="contact-icon-area space-pb--r70">
          <Container>
            <Row>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegMap />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Address</span>
                    <p>2071 N Collins Blvd Richardson TX 75080</p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Email Address</span>
                    <a href="mailto:admin@mednextgen.com">
                      admin@mednextgen.com
                    </a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaMobileAlt />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Phone</span>
                    <p>+1 (469) 866-5222</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-form-map-area">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="heading-s1 space-mb--20">
                  <h2>Get In touch</h2>
                </div>
                <p className="leads">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus blandit massa enim. Nullam id varius nunc id varius
                  nunc.
                </p>
                <div className="field-form">
                  <form method="post">
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <input
                          required
                          placeholder="Enter Name *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <input
                          required
                          placeholder="Enter Email *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <input
                          required
                          placeholder="Enter Phone No. *"
                          id="phone"
                          className="form-control"
                          name="phone"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <input
                          placeholder="Enter Subject"
                          id="subject"
                          className="form-control"
                          name="subject"
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        <textarea
                          required
                          placeholder="Message *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          title="Submit Your Message!"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
              <Col lg={6} className="pt-2 pt-lg-0 mt-4 mt-lg-0">
                <div className="google-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.002225044616!2d-96.7221171!3d32.9773431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f30af23e6b7%3A0x7d04121ca34f4c79!2s2071%20N%20Collins%20Blvd%20a%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2s!4v1687165999746!5m2!1sen!2s"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutOne>
  );
};

export default ContactUs;
