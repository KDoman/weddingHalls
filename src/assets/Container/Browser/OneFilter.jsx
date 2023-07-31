export function OneFilter(props) {
  return (
    <div>
      <input type="checkbox" id={props.id} name={props.name}></input>
      <label htmlFor={props.for}>{props.text}</label>
    </div>
  );
}
