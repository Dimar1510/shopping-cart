import Subscribe from "./Subscribe";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { X } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import bean from "src/assets/images/bean.svg";
import { Divider } from "@mui/material";

function Footer() {
  return (
    <footer className="flex flex-col">
      <Divider />
      <div className="flex gap-4 p-10 items-center justify-center desktop:flex-col tablet:px-4 tablet:mx-0">
        <h3 className="uppercase font-semibold text-center">
          Be the first to know about discounts
        </h3>
        <p>Get a selection of new products every week</p>
        <Subscribe />
      </div>
      <Divider />
      <div className="flex px-8 pt-8 pb-16 justify-center gap-8 laptop:flex-col">
        <div className="flex gap-8 justify-center phone:flex-col">
          <ul className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold">Company</h4>
            <li className="link">About</li>
            <li className="link">Locations</li>
            <li className="link">Manufacturing</li>
            <li className="link">Partnership</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold">Coffee</h4>
            <li className="link">Community</li>
            <li className="link">Guidelines</li>
            <li className="link">How to prepare</li>
            <li className="link">How to choose</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold">Help</h4>
            <li className="link">Shipping</li>
            <li className="link">Billing</li>
            <li className="link">Returns</li>
            <li className="link">Contact us</li>
          </ul>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="flex flex-col items-center gap-4">
          <h3 className="uppercase font-semibold text-center">
            Let us know what you think
          </h3>
          <p>This will help us become even better!</p>
          <h3 className="text-2xl font-semibold">
            <LocalPhoneOutlinedIcon />
            (000) 555-12-34
          </h3>
          <div className="flex w-full justify-evenly">
            <EmailOutlinedIcon className="cursor-pointer" />
            <ChatBubbleOutlineOutlinedIcon className="cursor-pointer" />
            <X className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-text-clr justify-center items-center p-2 text-body-clr ">
        <div className="flex gap-x-8 gap-y-2 w-full justify-center flex-wrap">
          <a
            aria-label={"Github"}
            href={"https://github.com/Dimar1510/shopping-cart"}
            className=" inline-flex rounded-lg p-1 justify-center group"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-center group-hover:scale-125  transition-transform duration-500 group-hover:rotate-[360deg] will-change-transform ">
                <GitHub />
              </span>
              <span className="group-hover:underline underline-offset-4">
                Dmitry Martynov
              </span>
            </div>
          </a>

          <a
            href="https://fake-coffee-api.vercel.app/"
            rel="noopener noreferrer"
            target="blank"
            className="inline-flex gap-2 rounded-lg p-1 justify-center group"
          >
            <img
              src={bean}
              alt="bean"
              className="size-5 text-body-clr invert"
            />
            <span className="group-hover:underline underline-offset-4">
              Fake Coffee Api
            </span>
          </a>
        </div>
        <small className="gh-copyright">© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}

export default Footer;
