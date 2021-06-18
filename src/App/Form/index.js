import React, { useState } from 'react';
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./index.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[7].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">Currency Converter</h1>
      <p>
        <p className="form__paragraphWarning">Converting from PLN (PL) <span className="form__span--asterisk">*</span></p>
        <label>
          <span className="form__labelText form__labelText--lightslategrey">Amount in <span
              className="form__span--asterisk">*</span> :</span>
          <input 
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            type="number" 
            placeholder="Enter the amount in PLN" 
            className="form__field" 
            min="0" 
            max="100000"
            step="0.01" 
            required />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">Currency:</span>
          <select 
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__buttonText">Convert!</button>
      </p>
      <p className="form__info">The rates are taken from the table nr 002/A/NBP/2021 from 2020-01-05</p>
      <Result result={result} />
      </form>
  );
}; 
