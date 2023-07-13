import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { FindAnimalName } from "./pages/FindAnimalName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/findName" element={<FindAnimalName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
