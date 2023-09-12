import { useState } from "react";
import "./App.css";
import AddCounter from "./components/AddCounter";
import Counter from "./components/Counter";
import Headers from "./components/Headers";
import Footer from "./components/Footer";

function App() {
  const [counters, setCounters] = useState([0]);

  const addButton = () => {
    const newCounter = [...counters];
    newCounter.push(0);
    setCounters(newCounter);
    console.log(counters);
  };

  return (
    <div>
      <Headers />
      <AddCounter addButton={addButton} counters={counters} />
      <Counter counters={counters} setCounters={setCounters} />
      <Footer />
    </div>
  );
}

export default App;
