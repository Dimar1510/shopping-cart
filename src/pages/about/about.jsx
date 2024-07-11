import { useEffect } from "react";
import image from "src/assets/images/about_img.jpg";
import { Link } from "react-router-dom";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Divider } from "@mui/material";

function AboutPage() {
  useEffect(() => {
    document.title = `About | CoffeeShop`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center flex-1">
      <section className="px-16 py-6 flex flex-col gap-4 w-full laptop:px-4">
        <div className="flex gap-2 self-start">
          <Link to={"/"}>Home</Link>/
          <Link to={"/about"} className="font-semibold">
            About
          </Link>
        </div>
        <div className="flex gap-4 justify-center tablet:flex-col mt-8">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-semibold uppercase">
              We are young, bold and hungry! We love coffee very much and want
              to share it with you.
            </h2>
            <p>
              Every day we are looking for ways to improve the quality of our
              work in order to give you the pleasure of ordering your favorite
              drink.
            </p>
            <p>
              We have our own warehouse with coffee and we can deliver your
              order to anywhere in the capital in two days. Or maybe faster...
            </p>
          </div>
          <div className="flex-1">
            <img
              src={image}
              alt="about"
              className="w-full h-full object-left object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="px-16 py-6 flex flex-col gap-12 w-full laptop:px-4">
        <Divider />
        <h2 className="uppercase text-center font-semibold">
          CoffeeShop - everything here is arranged for convenience
        </h2>
        <div className="flex gap-8 tablet:flex-col">
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="font-semibold flex gap-1 items-center">
              <AttachMoneyOutlinedIcon fontSize="large" />
              Advantageous prices
            </h3>
            <p>
              CoffeeShop sets minimum prices for the most popular products, and
              offers discounts and promotions every week.
            </p>
          </div>
          <div className="flex flex-col gap-2  flex-1">
            <h3 className="font-semibold flex gap-1 items-center">
              <DeliveryDiningOutlinedIcon fontSize="large" />
              Free shipping
            </h3>
            <p>
              Fast delivery to your home or office within two days. We deliver
              free of charge (minimum order is $20).
            </p>
          </div>
          <div className="flex flex-col gap-2  flex-1">
            <h3 className="font-semibold flex gap-1 items-center">
              <WorkspacePremiumOutlinedIcon fontSize="large" />
              Premium quality
            </h3>
            <p>
              CoffeeShop checks the quality of all our products. We work only
              with the strongest suppliers who undergo strict checks.
            </p>
          </div>
        </div>
      </section>
      <section className="px-16 py-6 flex flex-col gap-12 w-full laptop:px-4">
        <Divider />
        <div className="flex flex-col gap-6 p-2">
          <h2 className="font-semibold uppercase">Briefly about us:</h2>
          <ul className="pl-8 flex flex-col gap-8">
            <li className="list-disc">
              We are driven by a constant desire to improve the quality of
              everything: from texts on the website to equipment in production;
            </li>
            <li className="list-disc">
              We are &apos;customer first&apos;: if the order is lost or the
              taste is upset;
            </li>
            <li className="list-disc">
              We are experts in what we do: top business officials are the main
              product specialists;
            </li>
            <li className="list-disc">
              We hear you, always! We consider all requests regarding the site,
              without exception;
            </li>
            <li className="list-disc">
              We work like clockwork: we haven&apos;t missed a single roast
              since the day we opened.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
