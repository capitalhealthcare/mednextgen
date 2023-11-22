import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Fragment } from "react";
import { FaRegComments, FaCalendarAlt, FaQuoteRight } from "react-icons/fa";
const PostLeftSidebar = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Post Left Sidebar">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Post Left Sidebar</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={12}>
              <Fragment>
                <div className="single-post">
                  <h2 className="blog-title">
                    But I must explain to you how all this mistaken idea
                  </h2>
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog/grid-left-sidebar">
                        <FaCalendarAlt />
                        April 14, 2021
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <FaRegComments /> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <div className="blog-img">
                    <img
                      src="/assets/images/blog/blog_img1.jpg"
                      alt="blog_img1"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur malesuada malesuada metus ut placerat. Cras a
                        porttitor quam, eget ornare sapien. In sit amet
                        vulputate metus. Nullam eget rutrum nisl. Sed tincidunt
                        lorem sed maximus interdum. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus. Aenean scelerisque
                        efficitur mauris nec tincidunt. Ut cursus leo mi, eu
                        ultricies magna faucibus id.
                      </p>
                      <blockquote className="blockquote">
                        <FaQuoteRight />
                        <p>
                          Integer is metus site turpis facilisis customers.
                          elementum an mauris in venenatis consectetur east.
                          Praesent condimentum bibendum Morbi sit amet commodo
                          pellentesque at fringilla tincidunt risus.
                        </p>
                      </blockquote>
                      <Row>
                        <Col sm={6}>
                          <div className="single-img">
                            <img
                              className="w-100 mb-4"
                              src="/assets/images/blog/blog_single_img1.jpg"
                              alt="blog_single_img1"
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="single-img">
                            <img
                              className="w-100 mb-4"
                              src="/assets/images/blog/blog_single_img2.jpg"
                              alt="blog_single_img2"
                            />
                          </div>
                        </Col>
                      </Row>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent id dolor dui, dapibus gravida elit. Donec
                        consequat laoreet sagittis. Suspendisse ultricies
                        ultrices viverra. Morbi rhoncus laoreet tincidunt.
                        Mauris interdum convallis metus. Suspendisse vel lacus
                        est, sit amet tincidunt erat. Etiam purus sem, euismod
                        eu vulputate eget, porta quis sapien. Donec tellus est,
                        rhoncus vel scelerisque id, iaculis eu nibh.
                      </p>
                      <p>
                        Duis vestibulum quis quam vel accumsan. Nunc a vulputate
                        lectus. Vestibulum eleifend nisl sed massa sagittis
                        vestibulum. Vestibulum pretium blandit tellus, sodales
                        volutpat sapien varius vel. Phasellus tristique cursus
                        erat, a placerat tellus laoreet eget. Fusce vitae dui
                        sit amet lacus rutrum convallis. Vivamus sit amet lectus
                        venenatis est rhoncus interdum a vitae velit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card post-author space-mt--40 space-mb--40">
                  <div className="card-body">
                    <div className="post-author__img">
                      <img src="/assets/images/users/user1.jpg" alt="user1" />
                    </div>
                    <div className="post-author__info">
                      <h6 className="author-name">
                        <Link
                          href="/blog/grid-left-sidebar"
                          className="mb-1 d-inline-block"
                        >
                          Maria Redwood
                        </Link>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default PostLeftSidebar;
