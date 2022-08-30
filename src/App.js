import "./App.css";
import ComponentA from "./components/ComponentA"; // default import
import { ComponentB } from "./components/ComponentB"; //named import
import Data from "./components/Data";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ComponentA />
      <ComponentB />
      <Data />
      <ComponentC />
    </div>
  );
}

export default App;
