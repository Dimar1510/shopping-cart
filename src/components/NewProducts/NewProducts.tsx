import Divider from "@mui/material/Divider";
import FeaturedProduct from "./FeaturedProduct";

function NewProducts() {
  return (
    <section className="flex flex-col items-center gap-8 w-full">
      <h3 className="self-baseline uppercase font-semibold">New Arrivals</h3>
      <div className="flex flex-col gap-8 justify-center w-full">
        <FeaturedProduct id={18} right />
        <Divider />
        <FeaturedProduct id={19} />
      </div>
    </section>
  );
}

export default NewProducts;
