import "./MoreFilters.scss";
import { OneFilter } from "./OneFilter";

export function MoreFilters() {
  return (
    <div className="div-container">
      <fieldset>
        <legend>ILOŚĆ OSÓB:</legend>
        <OneFilter id="<50" name="<50" for="<50" text="< 50"></OneFilter>
        <OneFilter
          id="50-100"
          name="50-100"
          for="50-100"
          text="50 - 100"
        ></OneFilter>
        <OneFilter id=">100" name=">100" for=">100" text="> 100"></OneFilter>
      </fieldset>
      <fieldset>
        <legend>CENA:</legend>
        <OneFilter id="<150" name="<150" for="<150" text="< 150zł"></OneFilter>
        <OneFilter
          id="150-350"
          name="150-350"
          for="150-350"
          text="150 zł - 350 zł"
        ></OneFilter>
        <OneFilter id="<150" name=">350" for=">350" text="> 350zł"></OneFilter>
      </fieldset>
      <fieldset>
        <legend>RODZAJ SALI:</legend>
        <OneFilter id="dom" name="dom" for="dom" text="dom weselny"></OneFilter>
        <OneFilter
          id="hotel"
          name="hotel"
          for="hotel"
          text="hotel na wesele"
        ></OneFilter>
        <OneFilter
          id="restauracja"
          name="restauracja"
          for="restauracja"
          text="restauracja na wesele"
        ></OneFilter>
      </fieldset>
      <fieldset>
        <legend>LICZBA MIEJSC NOCLEGOWYCH:</legend>

        <OneFilter id="<20" name="<20" for="<20" text="< 20"></OneFilter>
        <OneFilter
          id="20-30"
          name="20-30"
          for="20-30"
          text="20 - 30"
        ></OneFilter>
        <OneFilter id="30" name="30" for="30" text="30"></OneFilter>
      </fieldset>
    </div>
  );
}
