import { useContext } from "react";
import "./MoreFilters.scss";
import { OneFilter } from "./OneFilter";
import { valueContext } from "../Container";

export function uncheckBoxes(type) {
  if (type !== "Sale weselne" && type !== "Hotele") {
    document
      .querySelectorAll("#people-counter")
      .forEach((checkbox) => (checkbox.checked = false));
  }
}
export function MoreFilters() {
  const { type } = useContext(valueContext);

  return (
    <div className="div-container">
      <fieldset
        className={
          type === "Sale weselne" || type === "Hotele" || !type
            ? ""
            : "fieldset-off"
        }
      >
        <legend>
          <b>ILOŚĆ OSÓB</b>
        </legend>
        <OneFilter
          id="people-counter"
          name="<50"
          for="<50"
          text="< 50"
        ></OneFilter>
        <OneFilter
          id="people-counter"
          name="50-100"
          for="50-100"
          text="50 - 100"
        ></OneFilter>
        <OneFilter
          id="people-counter"
          name=">100"
          for=">100"
          text="> 100"
        ></OneFilter>
      </fieldset>
      <fieldset>
        <legend>
          <b>CENA</b>
        </legend>
        <OneFilter
          id="<150"
          name="<150"
          for="<150"
          text="< 150zł"
          value={150}
        ></OneFilter>
        <OneFilter
          id="150-350"
          name="150-350"
          for="150-350"
          text="150 zł - 350 zł"
          value={151}
        ></OneFilter>
        <OneFilter
          id=">350"
          value={350}
          name=">350"
          for=">350"
          text="> 350zł"
        ></OneFilter>
      </fieldset>
    </div>
  );
}
