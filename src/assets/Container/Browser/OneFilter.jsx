import { useContext } from "react";
import { valueContext } from "../Container";

export function OneFilter(props) {
  const { prices, setPrices } = useContext(valueContext);
  const setPriceRange = (e) => {
    e.target.checked
      ? setPrices([...prices, e.target.value])
      : setPrices(prices.filter((price) => price !== e.target.value));
  };

  return (
    <div>
      {console.log(prices)}
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={setPriceRange}
      ></input>
      <label htmlFor={props.for}>
        <b>{props.text}</b>
      </label>
    </div>
  );
}
