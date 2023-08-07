import { useState } from "react";
import "./OneWeddingHall.scss";
import { AvailabilityDiv } from "./ButtonsDiv/AvailabilityDiv";
import { PricingDiv } from "./ButtonsDiv/PricingDiv";

export function OneWeddingHall(props) {
  const [showComponent, setShowComponent] = useState(false);

  const showButtonDiv = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="one-wedding-hall">
      <img src={props.src} alt={props.alt} className="hall-img"></img>
      <div className="info-div">
        <p className="title">{props.name}</p>
        <div className=" flex">
          <p className="location">{props.location}</p>
          {props.numberOfPeople ? (
            <div className="number-of-people px-2 ml-2">
              <div className=" flex items-center justify-center">
                <img src="./person-icon.png"></img>
                <p className=" pl-1">{props.numberOfPeople}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="description">{props.description}</p>
        <p className="price">
          {props.price} zł
          {props.smallIcon !== "./Icons/decorations.png" &&
          props.smallIcon !== "./Icons/planner.png" ? (
            <>
              {" "}
              /
              <img
                src="./person-icon.png"
                className="person-icon"
                alt="Person Icon"
              />
            </>
          ) : (
            <></>
          )}
        </p>
        <img src={props.smallIcon} className="type-icon"></img>
        <button className="contact-button" onClick={showButtonDiv}>
          {props.buttonText}
        </button>
        {showComponent ? (
          props.buttonText === "Spytaj o dostępność" ? (
            <AvailabilityDiv />
          ) : (
            <PricingDiv />
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
