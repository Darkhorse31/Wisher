import React from "react";
import "./Form.css";
function Form() {
  return (
    <form action="">
      <div>
        <label htmlFor="">Enter Your name</label>
        <input></input>
      </div>
      <div>
        <label htmlFor="">Wish Reciver name</label>
        <input></input>
      </div>
      <div>
        <label htmlFor="">Enter Your name</label>
        <select name="cars" id="cars">
          <option value="Mother">Mother</option>
          <option value="Father">Father</option>
          <option value="Brother">Brother</option>
          <option value="Lover">Lover</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
