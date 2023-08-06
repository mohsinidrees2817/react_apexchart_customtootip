import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chartclass from "./components/Chartclass";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chartclass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
