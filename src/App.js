import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./container/MainPage";
import Basics from "./components/Basics";
import Work from "./components/Work";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<MainPage />}>
          <Route index element={<Basics />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
