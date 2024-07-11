import { useEffect } from "react";
import notfound from "src/assets/images/404.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = `404 | CoffeeShop`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center flex-1">
      <div className="flex flex-col max-w-[600px] justify-center items-center gap-8 self-center p-8">
        <div>
          <img src={notfound} alt="404" className="max-w-[300px]" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="uppercase">Would you look at that</h3>
          <p>
            The page you&apos;re looking for doesn&apos;t exist, not yet at
            least.
            <br /> Meanwhile you can visit our
            <Link to={"/shop"} className="font-bold hover:underline">
              <span> shop </span>
            </Link>
            or go to the
            <Link to={"/"} className="font-bold hover:underline">
              <span> main page</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
