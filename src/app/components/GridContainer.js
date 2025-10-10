import Banner from "./Banner";
import ProductGrid from "./ProductGrid";
const GridContainer = () => {
  return (
    <div className="flex flex-col items-center px-10">
      <Banner />
      <ProductGrid />
    </div>
  );
};

export default GridContainer;
