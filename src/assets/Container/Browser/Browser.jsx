import { useContext } from "react";
import "./Browser.scss";
import { MoreFilters, uncheckBoxes } from "./MoreFilters";
import { valueContext } from "../Container";

export function Browser() {
  const { setName, setType, type, setLocation } = useContext(valueContext);

  const filterByName = (e) => {
    setName(e.target.value);
  };
  const filterByType = (e) => {
    e.target.blur();
    setType(e.nativeEvent.target.value);
    uncheckBoxes(type);
  };

  const filterByLocation = (e) => {
    e.target.blur();
    setLocation(e.nativeEvent.target.value);
  };

  return (
    <>
      <div className="input-div">
        <input
          type="text"
          placeholder="Czego szukasz? "
          className=" w-3/12 input-style p-2 m-4"
          onChange={filterByName}
        ></input>
        <select
          type="option"
          className="w-3/12 input-style p-2 m-4"
          onChange={filterByType}
        >
          <option value="">-----</option>
          <option value="Sale weselne">Sale weselne</option>
          <option value="Hotele">Hotele</option>
          <option value="Spa">Spa</option>
          <option value="Wedding planner">Wedding planner</option>
          <option value="Dekoracje ślubne">Dekoracje ślubne</option>
        </select>
        <select
          type="option"
          className="w-3/12 input-style p-2 m-4"
          onChange={filterByLocation}
        >
          <option value="">Cała Polska</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Toruń">Toruń</option>
          <option value="Bydgoszcz">Bydgoszcz</option>
          <option value="Katowice">Katowice</option>
        </select>
      </div>
      <MoreFilters />
    </>
  );
}
