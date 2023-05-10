import { Fragment } from "react";
import { HeaderOne } from "../components/Header";
import { FooterTwo } from "../components/Footer";

import ScrollToTop from "../components/scroll-to-top";

const LayoutOne = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderOne navPositionClass={navPositionClass} />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutOne;
