import { Container, Row, Col } from "react-bootstrap";

const IconBoxOne = () => {
  return (
    <div className="space-pb--r100 space-pt--25">
      <Container>
        <Row>
          <Col>
            <div className="shopping-info" >
              <Row className="justify-content-center">
                <Col md={4}>
                  <div className="icon-box icon-box--style3">
                    <div className="icon-box__icon">
                      <i className="flaticon-shipped" />
                    </div>
                    <div className="icon-box__content">
                      <h5>Free Delivery</h5>
                      <p>
                        Phasellus blandit massa enim elit of passage varius
                        nunc.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="icon-box icon-box--style3">
                    <div className="icon-box__icon">
                      <i className="flaticon-money-back" />
                    </div>
                    <div className="icon-box__content">
                      <h5>30 Days Return Guarantee</h5>
                      <p>
                        Phasellus blandit massa enim elit of passage varius
                        nunc.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="icon-box icon-box--style3">
                    <div className="icon-box__icon">
                      <i className="flaticon-support" />
                    </div>
                    <div className="icon-box__content">
                      <h5>24/7 Online Support</h5>
                      <p>
                        Phasellus blandit massa enim elit of passage varius
                        nunc.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxOne;
