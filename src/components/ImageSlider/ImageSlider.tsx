import { useEffect, useRef, useState } from "react";
import slide1 from "src/assets/images/slider_1.jpg";
import slide2 from "src/assets/images/slider_2.jpg";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MobileStepper from "@mui/material/MobileStepper";

const ImageSlider = ({ productImage }: { productImage: string }) => {
  const images = [productImage, slide1, slide2];
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.width = images.length * 100 + "%";
      container.style.left = position * -100 + "%";
    }
  }, [position]);

  function slideRight() {
    if (position === images.length - 1) {
      setPosition(0);
    } else setPosition((position) => position + 1);
  }

  function slideLeft() {
    if (position === 0) {
      setPosition(images.length - 1);
    } else {
      setPosition((position) => position - 1);
    }
  }

  return (
    <div className="relative flex overflow-hidden w-[300px] min-h-[400px] items-end">
      <div
        className="h-full flex absolute transition-all duration-500"
        ref={containerRef}
      >
        {images.map((image, index) => {
          return (
            <div key={index} className="flex-1 group">
              <img
                src={image}
                alt="product slide"
                className="size-full object-contain object-center group-first:object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-evenly w-full">
        <MobileStepper
          variant="dots"
          steps={images.length}
          position="static"
          activeStep={position}
          sx={{
            flexGrow: 1,
            "& .MuiMobileStepper-dotActive": {
              backgroundColor: "black",
            },
          }}
          nextButton={
            <button
              className="pointer z-10 bg-none size-9 flex items-center justify-center transition-all rounded-full hover:bg-text-clr hover:text-body-clr"
              onClick={slideRight}
            >
              <ArrowForwardIosOutlinedIcon fontSize="small" />
            </button>
          }
          backButton={
            <button
              className="pointer z-10 bg-none size-9 flex items-center justify-center transition-all rounded-full hover:bg-text-clr hover:text-body-clr"
              onClick={slideLeft}
            >
              <ArrowBackIosOutlinedIcon fontSize="small" />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default ImageSlider;
