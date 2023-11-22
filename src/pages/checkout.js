import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";

const Checkout = () => {
  const [redirecting, setRedirecting] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Checkout">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/" style={{ color: "rgb(247, 156, 29)" }}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active text-light">Checkout</li>
        </ol>
      </BreadcrumbOne>
      <div className="checkout-content space-pt--r100 space-pb--r100">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col md={6}>
                <div className="heading-s1 space-mb--20">
                  <h4>Billing Details</h4>
                </div>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="fname"
                      placeholder="First name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="lname"
                      placeholder="Last name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="cname"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="custom_select">
                      <select className="form-control">
                        <option value="">Select an option...</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address"
                      required=""
                      placeholder="Address *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address2"
                      required=""
                      placeholder="Address line2"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="city"
                      placeholder="City / Town *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="zipcode"
                      placeholder="Postcode / ZIP *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="phone"
                      placeholder="Phone *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="email"
                      placeholder="Email address *"
                    />
                  </div>
                  <div className="heading-s1 space-mb--20">
                    <h4>Additional information</h4>
                  </div>
                  <div className="mb-3 mb-0">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Order notes"
                    ></textarea>
                  </div>
                </form>
              </Col>
              <Col md={6}>
                <div
                  className="order-review space-mt-mobile-only--40"
                  style={{ backgroundColor: "#f7f8fb" }}
                >
                  <div className="heading-s1 space-mb--20">
                    <h4>Your Orders</h4>
                  </div>
                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, i) => {
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);

                          cartTotalPrice += discountedPrice * product.quantity;
                          return (
                            <tr key={i}>
                              <td>
                                {product.name}{" "}
                                <span className="product-qty">
                                  x {product.quantity}
                                </span>
                              </td>
                              <td>
                                $
                                {(discountedPrice * product.quantity).toFixed(
                                  2
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className="product-subtotal">
                            ${cartTotalPrice.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">
                            ${cartTotalPrice.toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Link href="/products" className="btn btn-fill-out">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Checkout;
