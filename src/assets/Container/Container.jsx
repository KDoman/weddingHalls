import { createContext, useState } from "react";
import { Browser } from "./Browser/Browser";
import "./Container.scss";
import { WeddingHalls } from "./WeddingHalls/WeddingHalls";

export const valueContext = createContext();

export function Container() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [prices, setPrices] = useState([]);

  return (
    <valueContext.Provider
      value={{
        name,
        setName,
        type,
        setType,
        location,
        setLocation,
        prices,
        setPrices,
      }}
    >
      <div className="main-contianer">
        <Browser />
        <WeddingHalls />
      </div>
    </valueContext.Provider>
  );
}
