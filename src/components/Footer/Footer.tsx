import Subscribe from "./Subscribe";
import { Divider } from "@mui/material";
import FooterMain from "./FooterMain";
import FooterLinks from "./FooterLinks";

const FooterHead = () => {
  return (
    <div className="flex gap-4 p-10 items-center justify-center desktop:flex-col tablet:px-4 tablet:mx-0">
      <h3 className="uppercase font-semibold text-center">
        Be the first to know about discounts
      </h3>
      <p>Get a selection of new products every week</p>
      <Subscribe />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <Divider />
      <FooterHead />
      <Divider />
      <FooterMain />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
