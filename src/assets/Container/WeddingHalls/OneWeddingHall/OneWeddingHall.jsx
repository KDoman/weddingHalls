import "./OneWeddingHall.scss";

export function OneWeddingHall(props) {
  return (
    <div className="one-wedding-hall">
      <img src={props.src} alt={props.alt} className="hall-img"></img>
      <div className="info-div">
        <p className="title">{props.name}</p>
        <p className="location">{props.location}</p>
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

        <button className="contact-button">{props.buttonText}</button>
      </div>
    </div>
  );
}
