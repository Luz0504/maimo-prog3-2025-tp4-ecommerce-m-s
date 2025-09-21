import Image from "next/image";
import FGFooter from "./components/FGFooter";
import GridContainer from "./components/GridContainer";
import BurgerMenu from "./components/BurgerMenu";

export default function Home() {
  return (
    <div className="min-h-lvh flex px-30 py-10 bg-purple-50">
      <BurgerMenu/>
      <GridContainer />

    </div>
  );
}
