import { useState } from "react";
import "./App.scss";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Header from "./components/Header/Header";

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div>
        <Header />
        <Search setResults={setResults} />
        <Results results={results} />
      </div>
    </div>
  );
}
