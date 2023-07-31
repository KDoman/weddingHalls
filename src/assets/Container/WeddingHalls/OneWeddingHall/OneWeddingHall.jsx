import "./OneWeddingHall.scss";

export function OneWeddingHall(props) {
  return (
    <div className="one-wedding-hall">
      <img src={props.src} alt={props.alt}></img>
      <div>
        <h1>{props.name}</h1>
        <p>{props.localization}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
