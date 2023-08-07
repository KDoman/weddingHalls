import "./AvailabilityDiv.scss";
export function AvailabilityDiv() {
  return (
    <div className="availability-form ">
      <h1 className=" text-center">Napisz do nas! </h1>
      <form>
        <input
          id="name"
          type="text"
          placeholder="Imię"
          className="input-form-style"
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="input-form-style"
        />
        <textarea
          id="email"
          placeholder="O co chcesz nas spytać?"
          rows={10}
          className="input-form-style"
        />
        <button type="button" className="button-form">
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}
