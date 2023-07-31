import { Browser } from "./Browser/Browser";
import "./Container.scss";
import { WeddingHalls } from "./WeddingHalls/WeddingHalls";

export function Container() {
  return (
    <div className="main-contianer">
      <Browser />
      <WeddingHalls />
    </div>
  );
}
