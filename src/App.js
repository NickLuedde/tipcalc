import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>

    // <h1> How Did you Like the Service</h1><Rating></Rating><h1>How did your friends like the service?</h1><Rating></Rating><Total /><Reset></Reset></>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * ((percentage1 + percentage2) / 2)) / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you enjoy the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your guest enjoy the service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset onHandleReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How Much Was The Bill?</label>{" "}
      <input
        type="text"
        placeholder="Total Bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>

      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisified</option>
        <option value="10">Okay</option>
        <option value="15">Good</option>
        <option value="20">Great</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      {" "}
      You pay x (${bill + tip}) (${bill} + ${tip}){" "}
    </h3>
  );
}

function Reset({ onHandleReset }) {
  return <button onClick={onHandleReset}>Reset</button>;
}

export default App;
