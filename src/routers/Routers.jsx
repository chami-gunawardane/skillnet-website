import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Domain, Milestones, Documents, Slides, AboutUS, ContactUs } from "../pages"; 

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Domain" element={<Domain />} />
          <Route path="/Milestones" element={<Milestones />} />
          <Route path="/Milestones" element={<Milestones />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Slides" element={<Slides />} />
          <Route path="/AboutUs" element={<AboutUS />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          </Routes>
      </Router>
    </div>
  );
};

export default Routers;
