import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import "./index.css";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
