import { useState, HTMLChangeEvent, HTMLSubmitEvent } from "react";

export default function CoolInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState();

  const onChange = (e: HTMLChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="input-group mb-3">
        <form
          onSubmit={(e: HTMLSubmitEvent<HTMLFormElement>) => {
            e.preventDefault();
            onSubmit(inputValue);
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={onChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => onSubmit(inputValue)}
          >
            Button
          </button>
        </form>
      </div>
    </>
  );
}
