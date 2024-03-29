import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import RegisterForm from "./pages/register";
import axios from "axios";
import Dashboard from "./pages/dashboard";
import FullPDFView from "./components/others/full-pdf-viewer";
import EditPDFPages from "./components/others/edit-pdf";
import Home from "./pages/home";
const App = () => {
  if (import.meta.env.MODE === "production") {
    const baseUrl = import.meta.env.VITE_PRODUCTION_BACKEND_URL!;
    axios.defaults.baseURL = baseUrl;
  } else {
    axios.defaults.baseURL = "http://localhost:4000";
  }
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pdf/:pdfId" element={<FullPDFView />} />
        <Route path="/pdf/edit/:pdfId" element={<EditPDFPages />} />
        <Route path="*" element={<h1>Invalid Route</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
