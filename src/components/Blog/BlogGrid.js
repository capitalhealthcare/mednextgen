import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegComments, FaCalendarAlt } from "react-icons/fa";

const BlogGrid = ({ customClass }) => {
  return (
    <div className="blog-grid-area space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="section-title text-center  space-mb--25">
              <h2 style={{ color: "black" }}>Latest Blogs</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {[1, 2, 3].map(() => {
            return (
              <Col lg={4} md={6}>
                <div
                  className={`blog-post blog-post--style-two ${
                    customClass ? customClass : ""
                  }`}
                >
                  <div className="blog-post__image">
                    <Link href="/blog/post-left-sidebar">
                      <img
                        src="/assets/images/blog/furniture_blog_img1.jpg"
                        alt="blog_small_img1"
                      />
                    </Link>
                  </div>
                  <div className="blog-post__content">
                    <div className="blog-text">
                      <h6 className="blog-title">
                        <Link
                          href="/blog/post-left-sidebar"
                          style={{ color: "black" }}
                        >
                          But I must explain to you how all this mistaken idea
                        </Link>
                      </h6>
                      <ul className="blog-meta">
                        <li>
                          <Link
                            href="/blog/post-left-sidebar"
                            style={{ color: "black" }}
                          >
                            <FaCalendarAlt />
                            April 14, 2021
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blog/post-left-sidebar"
                            style={{ color: "black" }}
                          >
                            <FaRegComments />
                            10 Comments
                          </Link>
                        </li>
                      </ul>
                      <p style={{ color: "black" }}>
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogGrid;
