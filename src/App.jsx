import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./Components/Test";
import Store from "./Components/Store";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="store" element={<Store />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
