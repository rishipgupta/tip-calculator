import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);

  const handleBillAmountChange = (e) => {
    setBill(bill => e.target.value);
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <div>
        <span>How much was the bill? </span> <input type="text" onChange={handleBillAmountChange} />
      </div>
      <div>
        {/* Display */}
        <h1>You pay ${bill ? bill : 0}</h1>
      </div>
    </div>
  );
}

export default App;
