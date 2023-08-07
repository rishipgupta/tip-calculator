import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tipOne, setTipOne] = useState(0)

  const handleBillAmountChange = (e) => {
    setBill(bill => e.target.value);
  }

  const handleTipOneChange = (e) => {
    setTipOne(tipOne => e.target.value);
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
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
        {/* Display */}
        <h1>{`You pay $${bill ? bill : 0} (${bill} + ${Math.round((tipOne * bill) / 100)})`}</h1>
      </div>
    </div>
  );
}

export default App;
