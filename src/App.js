import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Topbar from "./components/Navigation/Topbar";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
