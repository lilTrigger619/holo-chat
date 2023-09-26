import {useState} from "react";

export default function CoolInput(socket) {
  const [inputValue, setInputValue] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", inputValue);
  };
  const oChange = (e) => {
    socket.emit("typing", { owner: "test_user" });
  };
  return (
    <>
      <div className="input-group mb-3">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
						onClick={onSubmit}
          >
            Button
          </button >
        </form>
      </div>
    </>
  );
}
