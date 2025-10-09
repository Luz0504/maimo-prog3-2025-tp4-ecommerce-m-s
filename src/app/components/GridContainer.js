import ProductGrid from "./ProductGrid";
import Banner from "./Banner";

const GridContainer = () => {
  return (
    <div className="flex flex-col items-center px-10">
      <Banner />
      <ProductGrid />
    </div>
  );
};

export default GridContainer;
