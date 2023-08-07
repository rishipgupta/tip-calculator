import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tipOne, setTipOne] = useState(0)
  const [tipTwo, setTipTwo] = useState(0)

  const handleBillAmountChange = (e) => {
    setBill(bill => e.target.value);
  }

  const handleTipOneChange = (e) => {
    setTipOne(tipOne => e.target.value);
  }

  const handleTipTwoChange = (e) => {
    setTipTwo(tipTwo => e.target.value);
  }

  const handleReset = (e) => {
    // e.preventDefault();
    setBill("");
    setTipOne(0);
    setTipTwo(0);
  }

  const tipAvg = Math.round(((Number(tipOne) + Number(tipTwo)) / 200) * Number(bill));

  return (
    <div>
      <h1>Tip Calculator</h1>
      <form onSubmit={handleReset}>
        <div>
          <span>How much was the bill? </span> <input type="text" onChange={handleBillAmountChange} />
        </div>
        <div>
          <span>How did you like the service</span><select onChange={handleTipOneChange}>
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Absolutely amazing (20%)</option>
          </select>
        </div>
        <div>
          <span>How did you like the service</span><select onChange={handleTipTwoChange}>
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Absolutely amazing (20%)</option>
          </select>
        </div>
        <div>
          {/* Display */}
          <h1>{`You pay $${Number(bill) + Number(tipAvg) ? Number(bill) + Number(tipAvg) : 0} (${bill ? bill : 0} + ${tipAvg})`}</h1>
        </div>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default App;
