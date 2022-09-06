import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
