import React from 'react';
import "./index.css";

function App() {
  return (
    <div className="container">
    <a className="button--link" href="https://mr-front-end-dev.github.io/Currency-Converter--RU-LSG-/"><button className="button">RU</button></a>
    <a className="button--link" href="https://mr-front-end-dev.github.io/Currency-Converter--DE-LSG-/"><button className="button">DE</button></a>
    <a className="button--link" href="https://mr-front-end-dev.github.io/Currency-Converter--ES-LSG-/"><button className="button">ES</button></a>
    <a className="button--link" href="https://mr-front-end-dev.github.io/Currency-Converter--PL-LSG-/"><button className="button">PL</button></a>
    <a className="button--link" href="https://mr-front-end-dev.github.io/Currency-Converter--UA-LSG-/"><button className="button">UA</button></a>
    <a className="button--link" href="https://mr-front-end-dev.github.io/Currency-Converter--EN-LSGr-/"><button className="button button--lightseagreen">🌓</button></a>
    <form className="form js-form">
      <h1 className="form__header">Currency Converter</h1>
      <p>
        <p className="form__paragraphWarning">Converting from PLN (PL) <span className="form__span--asterisk">*</span></p>
        <label>
          <span className="form__labelText form__labelText--lightslategrey">Amount in <span
              className="form__span--asterisk">*</span> :</span>
          <input type="number" placeholder="Enter the amount in PLN" className="form__field js-amount" min="0" max="100000"
            step="0.01" required />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">Currency:</span>
          <select className="form__field js-currency">
            <option value="THB">1 Thailandian bat (THB)</option>
            <option value="USD">1 American dollar (USD)</option>
            <option value="AUD">1 Australian dollar (AUD)</option>
            <option value="HKD">1 Hongkong dollar (HKD)</option>
            <option value="CAD">1 Canadian dollar (CAD)</option>
            <option value="NZD">1 New Zealand dollar (NZD)</option>
            <option value="SGD">1 Singapore dollar (SGD)</option>
            <option value="EUR">1 European euro (EUR)</option>
            <option value="(* 100) HUF">100 Hungarian forint (HUF)</option>
            <option value="CHF">1 Swiss franc (CHF)</option>
            <option value="GBP">1 British pound (GBP)</option>
            <option value="UAH">1 Ukrainian hryvnia (UAH)</option>
            <option value="(* 100) JPY">100 Japanese yen (JPY)</option>
            <option value="CZK">1 Czech krone (CZK)</option>
            <option value="DKK">1 Danish krone (DKK)</option>
            <option value="(* 100) ISK">100 Icelandic krona (ISK)</option>
            <option value="NOK">1 Norway krone (NOK)</option>
            <option value="SEK">1 Swedish krona (SEK)</option>
            <option value="HRK">1 Croatian kuna (HRK)</option>
            <option value="RON">1 Romanian leu (RON)</option>
            <option value="BGN">1 Bulgarian lev (BGN)</option>
            <option value="TRY">1 Turkish lira (TRY)</option>
            <option value="ILS">1 New Israel shekel (ILS)</option>
            <option value="(* 100) CLP">100 Chilean ppeso (CLP)</option>
            <option value="PHP">1 Philippine peso (PHP)</option>
            <option value="MXN">1 Mexican peso (MXN)</option>
            <option value="ZAR">1 South Africa rand (ZAR)</option>
            <option value="BRL">1 Brazilian real (BRL)</option>
            <option value="MYR">1 Malaysian ringgit (MYR)</option>
            <option value="RUB">1 Russian rouble (RUB)</option>
            <option value="(* 10000) IDR">10000 Indonesian rupiah (IDR)</option>
            <option value="(* 100) INR">100 Indian rupiah (INR)</option>
            <option value="(* 100) KRW">100 South Korean won (KRW)</option>
            <option value="CNY">1 Chinese Yuan renminbi (CNY)</option>
            <option value="XDR">1 SDR (MFW)</option>
          </select>
        </label>
      </p>
      <p>
        <button className="form__buttonText">Convert!</button>
      </p>
      <p className="form__info">The rates are taken from the table nr 002/A/NBP/2021 from 2020-01-05</p>
      {/* UPDATE with time  */}
      <p className="form__result js-result"></p>
      <div className="underline--lightslategrey"></div>
    </form>
  </div>
  );
}

export default App;
