import "./OneWeddingHall.scss";

export function OneWeddingHall(props) {
  return (
    <div className="one-wedding-hall">
      <div className="img-arrow-div">
        <div class="next"></div>
        <img src={props.src} alt={props.alt} className="hall-img"></img>
        <div class="prev"></div>
      </div>
      <div className="info-div">
        <p className="title">{props.name}</p>
        <p className="localization">{props.localization}</p>
        <p className="description">{props.description}</p>
        <p className="price">
          {props.price} /
          <img
            src="./person-icon.png"
            className="person-icon"
            alt="Person Icon"
          />
        </p>
        <img src={props.smallIcon} className="type-icon"></img>
        <button className="contact-button">{props.buttonText}</button>
      </div>
    </div>
  );
}
