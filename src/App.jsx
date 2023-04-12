import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Navbar } from "./components";
import PlanProvider from "./context/PlanProvider";

const App = () => {

  return (
    <Router>
      <PlanProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PlanProvider>
    </Router>
  );
};

export default App;