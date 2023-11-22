import Link from "next/link";
import { LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { TextWithImageOne } from "../components/TextWithImage";
import { IconBoxTwo } from "../components/IconBox";

const AboutUs = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="About Us">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">About Us</li>
        </ol>
      </BreadcrumbOne>
      {/* icon box */}
      <IconBoxTwo />
      {/* text with image */}
      <TextWithImageOne />
    </LayoutOne>
  );
};

export default AboutUs;
