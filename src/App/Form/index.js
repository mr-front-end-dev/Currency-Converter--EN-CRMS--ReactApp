import React, { useState } from 'react';
import { currencies } from "../currencies";
import { Clock } from "./Clock";
import { Result } from "./Result";
import Projects from "./Projects";
import { Button, Field, Header, Info, LabelText, Asterisk, ParagraphWarning } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[1].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Clock />
      <Projects />
      <Header>Currency Converter</Header>
      <p>
        <ParagraphWarning>Converting from PLN (PL)<Asterisk> *</Asterisk></ParagraphWarning>
        <label>
          <LabelText lightslategrey>Amount in 
          <Asterisk> *</Asterisk> :</LabelText>
          <Field 
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
          <LabelText crimson>Currency:</LabelText>
          <Field 
            as="select"
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
          </Field>
        </label>
      </p>
      <p>
        <Button>Convert!</Button>
      </p>

      <Info>
        The rates are taken from the table nr 002/A/NBP/2021 from 2020-01-05
      </Info>
      
      <Result result={result} />
    </form>
  );
}; 
