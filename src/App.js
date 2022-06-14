import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./container/MainPage";
import Basics from "./components/Basics";
import Work from "./components/Work";
import Education from "./components/Education";
import Life from "./components/Life";
import Templet from "./components/Templet";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<MainPage />}>
          <Route index element={<Basics />} />
          <Route path="work" element={<Work />} />
          <Route path="education" element={<Education />} />
          <Route path="summary" element={<Life />} />
        </Route>
        <Route path="/templet" element={<Templet />} />
      </Routes>
    </div>
  );
}

export default App;
