import { Fragment } from "react";
import { HeaderTwo } from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/scroll-to-top";

const LayoutTwo = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderTwo navPositionClass={navPositionClass} />
      {children}
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutTwo;
