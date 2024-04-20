import { useState } from "react";
import "./App.css";
import FormWithRHF from "./components/FormWithRHF";
import FormWithoutRHF from "./components/FormWithoutRHF";

function App() {
  const [rhf, setRhf] = useState<boolean>(false);
  console.log(rhf ? "YES" : "NO");

  const renderForm = () => {
    return rhf ? <FormWithRHF /> : <FormWithoutRHF />;
  };

  return (
    <div className="container">
      <div>
        <button disabled={!rhf} onClick={() => setRhf(false)}>
          사용X
        </button>
        <button disabled={rhf} onClick={() => setRhf(true)}>
          사용O
        </button>
      </div>
      {renderForm()}
    </div>
  );
}

export default App;
