import { useEffect } from "react";
import video from "src/assets/video.mp4";
import Divider from "@mui/material/Divider";
import NewProducts from "src/components/NewProducts/NewProducts";
import HeroLink from "../../components/ui/HeroLink";
import Posts from "../../components/Posts/Posts";

function HomePage() {
  useEffect(() => {
    document.title = `CoffeeShop`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center h-[650px] relative z-2 text-body-clr">
        <video
          src={video}
          autoPlay
          muted
          loop
          id="myVideo"
          playsInline
          type="video/mp4"
          className="size-full -z-[1] object-cover object-bottom brightness-50 absolute"
        />
        <div className="m-8 ml-[10%] flex flex-col gap-12 font-header ">
          <h2 className="text-5xl uppercase font-bold">
            <div>Hello!</div> <div>We make tasty coffee</div>
          </h2>
          <p className="text-2xl">And then we deliver it right to your door</p>
          <div>
            <HeroLink link={"/shop"}>Shop now</HeroLink>
          </div>
        </div>
      </div>
      <div className="py-12 px-20 flex flex-col items-center gap-8 tablet:px-4">
        <NewProducts />
        <Divider sx={{ width: "100%" }} />
        <Posts />
      </div>
    </div>
  );
}

export default HomePage;
