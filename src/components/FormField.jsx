export default function FormField({ type, name, id, text }) {
  let placeholderName =
    type == "text" ? "Candle Kingsley" : "candlekingg29@gmail.com";

    if (name == "billing")
        placeholderName = "No 67 Atiku Street ";

  if (type == "special") {
    return (
      <div className="form-field-div">
        <label htmlFor={id}>{text}</label>
        <input
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          maxLength="19"
          autoComplete="cc-number"
          placeholder="1111 2222 555"
          required
          type={type}
          name={name}
          id={id}
        />
      </div>
    );
  } else {
    return (
      <div className="form-field-div">
        <label id={id + "-label"} htmlFor={id}>
          {text}
        </label>
        <input type={type} name={name} id={id} placeholder={placeholderName} />
      </div>
    );
  }
}
