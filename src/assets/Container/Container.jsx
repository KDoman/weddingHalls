import { createContext, useState } from "react";
import { Browser } from "./Browser/Browser";
import "./Container.scss";
import { WeddingHalls } from "./WeddingHalls/WeddingHalls";

export const numberContext = createContext();

export function Container() {
  const [imgNumber, setImgNumber] = useState(1);

  return (
    <numberContext.Provider value={{ imgNumber, setImgNumber }}>
      <div className="main-contianer">
        <Browser />
        <WeddingHalls />
      </div>
    </numberContext.Provider>
  );
}
