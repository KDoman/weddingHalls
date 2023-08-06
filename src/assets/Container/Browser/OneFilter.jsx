export function OneFilter(props) {
  return (
    <div>
      <input type="checkbox" id={props.id} name={props.name}></input>
      <label htmlFor={props.for}>
        <b>{props.text}</b>
      </label>
    </div>
  );
}
