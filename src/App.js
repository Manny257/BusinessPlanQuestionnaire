import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router";
import Form from "./components/Form";
import Submitted from "./components/Submitted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/questionnaire" element={<Form />} />
      <Route path="/submitted" element={<Submitted />} />
    </Routes>
  );
}

export default App;
