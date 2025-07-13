import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Customer from "./pages/customer";
import NotFound from "./pages/notfound";
import Chart from "./pages/chart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {/*  */}
      {/* <h1>この中に処理を記述</h1>
      <Home /> */}
      {/*  */}
    </>
  );
}

export default App;