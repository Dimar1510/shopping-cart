import Subscribe from "./Subscribe";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { X } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import bean from "../assets/images/bean.svg";
import "../styles/Footer.css";
import { Divider } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Divider />
      <div className="footer_subscribe">
        <h3 className="subscribe-title">
          Be the first to know about discounts
        </h3>
        <p className="subscribe-text">
          Get a selection of new products every week
        </p>
        <Subscribe />
      </div>
      <Divider />
      <div className="footer_main">
        <div className="footer-links-wrapper">
          <ul className="footer-links">
            <h4 className="footer-link-title">Company</h4>
            <li className="footer-link">About</li>
            <li className="footer-link">Locations</li>
            <li className="footer-link">Manufacturing</li>
            <li className="footer-link">Partnership</li>
          </ul>
          <ul className="footer-links">
            <h4 className="footer-link-title">Coffee</h4>
            <li className="footer-link">Community</li>
            <li className="footer-link">Guidelines</li>
            <li className="footer-link">How to prepare</li>
            <li className="footer-link">How to choose</li>
          </ul>
          <ul className="footer-links">
            <h4 className="footer-link-title">Help</h4>
            <li className="footer-link">Shipping</li>
            <li className="footer-link">Billing</li>
            <li className="footer-link">Returns</li>
            <li className="footer-link">Contact us</li>
          </ul>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="footer-contacts-wrapper">
          <h3 className="footer-contacts-title">Let us know what you think</h3>
          <p className="footer-contacts-text">
            This will help us become even better!
          </p>
          <h3 className="footer-phone">
            <LocalPhoneOutlinedIcon />
            (000) 555-12-34
          </h3>
          <div className="footer-icongroup">
            <EmailOutlinedIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <X />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="developed">
          <a
            href="https://github.com/Dimar1510"
            className="gh-link"
            rel="noopener noreferrer"
            target="blank"
          >
            <GitHub />
            Developed by Dimar
          </a>
          <a
            href="https://fake-coffee-api.vercel.app/"
            className="gh-link"
            rel="noopener noreferrer"
            target="blank"
          >
            <img src={bean} alt="bean" className="gh-icon" />
            FAKE COFFEE API
          </a>
        </div>
        <small className="gh-copyright">© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}

export default Footer;
