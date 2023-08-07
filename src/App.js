import { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";

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
        <Bill handleBillAmountChange={handleBillAmountChange} />
        <div>
          <Tip handleTipOneChange={handleTipOneChange}>
            <span>How did you like the service</span>
          </Tip>
        </div>
        <div>
          <Tip handleTipTwoChange={handleTipTwoChange}>
            <span>How did your friend like the service</span>
          </Tip>
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
