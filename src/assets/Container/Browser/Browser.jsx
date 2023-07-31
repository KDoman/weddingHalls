import "./Browser.scss";
import { MoreFilters } from "./MoreFilters";

export function Browser() {
  const blurAfterSelect = (e) => {
    e.target.blur();
  };
  return (
    <>
      <div className="input-div">
        <input
          type="text"
          placeholder="Czego szukasz? "
          className=" w-3/12 input-style p-2 m-4"
        ></input>
        <select
          type="option"
          className="w-3/12 input-style p-2 m-4"
          onChange={blurAfterSelect}
        >
          <option value="Sale weselne">Sale weselne</option>
          <option value="Hotele">Hotele</option>
          <option value="Spa">Spa</option>
          <option value="Planner">Wedding planner</option>
          <option value="Dekoracje">Dekoracje ślubne</option>
        </select>
        <select
          type="option"
          className="w-3/12 input-style p-2 m-4"
          onChange={blurAfterSelect}
        >
          <option value="Polska">Cała Polska</option>
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
