import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { X } from "@mui/icons-material";
import { Divider } from "@mui/material";

const pageLinks: { title: string; links: string[] }[] = [
  {
    title: "Company",
    links: ["About", "Locations", "Manufacturing", "Partnership"],
  },
  {
    title: "Coffee",
    links: ["Community", "Guidelines", "How to prepare", "How to choose"],
  },
  {
    title: "Help",
    links: ["Shipping", "Billing", "Returns", "Contact us"],
  },
];

const FooterMain = () => {
  return (
    <div className="flex px-8 pt-8 pb-16 justify-center gap-8 laptop:flex-col">
      <div className="flex gap-8 justify-center phone:flex-col">
        {pageLinks.map((list) => (
          <ul key={list.title} className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold">{list.title}</h4>
            {list.links.map((link) => (
              <li className="cursor-pointer text-xs hover:underline" key={link}>
                {link}
              </li>
            ))}
          </ul>
        ))}
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
  );
};

export default FooterMain;
