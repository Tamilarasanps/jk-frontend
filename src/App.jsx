import { useState } from "react";
import Header from "./components/Client/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-500">
        <h1>Hello world</h1>
      </div>
      <Header/>
    </>
  );
}

export default App;
