import { GitHub } from "@mui/icons-material";
import { ReactNode } from "react";
import bean from "src/assets/images/bean.svg";

interface Link {
  name: string;
  href: string;
  children: ReactNode;
  text: string;
}

const FooterLink: React.FC<Link> = ({ name, href, text, children }) => {
  return (
    <a
      aria-label={name}
      href={href}
      className=" inline-flex rounded-lg p-1 justify-center group"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-center group-hover:scale-125  transition-transform duration-500 group-hover:rotate-[360deg] will-change-transform ">
          {children}
        </span>
        <span className="group-hover:underline underline-offset-4">{text}</span>
      </div>
    </a>
  );
};

const FooterLinks = () => {
  return (
    <div className="flex flex-col bg-text-clr justify-center items-center p-2 text-body-clr ">
      <div className="flex gap-x-8 gap-y-2 w-full justify-center flex-wrap">
        <FooterLink
          text="Dmitry Martynov"
          href="https://github.com/Dimar1510/shopping-cart"
          name="GitHub"
        >
          <GitHub />
        </FooterLink>
        <FooterLink
          text="Fake Coffee Api"
          href="https://fake-coffee-api.vercel.app"
          name="API"
        >
          <img src={bean} alt="bean" className="size-5 text-body-clr invert" />
        </FooterLink>
      </div>
      <small className="gh-copyright">© {new Date().getFullYear()}</small>
    </div>
  );
};

export default FooterLinks;
