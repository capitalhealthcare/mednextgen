import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const GridLeftSidebar = () => {
  const columns = "";

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Blog">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Blog</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={12}>
              {/* blog post grid wrapper */}
              <Row>
                {[1, 2, 3, 4, 5].map(() => (
                  <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
                    <div className="blog-post">
                      <div className="blog-post__image">
                        <Link href="/blog/post-left-sidebar">
                          <img
                            src="/assets/images/blog/blog_small_img1.jpg"
                            alt="blog_small_img1"
                          />
                        </Link>
                      </div>
                      <div className="blog-post__content">
                        <div className="blog-text">
                          <h6 className="blog-title">
                            <Link href="/blog/post-left-sidebar">
                              But I must explain to you how all this mistaken
                              idea
                            </Link>
                          </h6>
                          <hr />
                          <p>
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default GridLeftSidebar;
