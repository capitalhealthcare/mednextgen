import { Container, Row, Col } from "react-bootstrap";

const BreadcrumbOne = ({ pageTitle, children }) => {
  const backgroundStyle = {
    backgroundImage: "url(/assets/images/breadcrumb/bg-img.jpg)", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "300px", // or use '50vh' for 50% of the viewport height, for example
  };
  return (
    <div
      className="breadcrumb-section bg--grey space-pt--r70 space-pb--r70"
      style={backgroundStyle}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="page-title">
              <h1 className="breadcrumb-title text-light">{pageTitle}</h1>
            </div>
          </Col>
          {/* <Col md={6}>{children}</Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbOne;