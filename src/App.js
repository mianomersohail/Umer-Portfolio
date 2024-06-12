import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './com/nav.js';
import './App.css'
import Home from './com/home.js';
import Resume from './com/resume.js';
import Project from './com/project.js';
import Contact from './com/contact.js';
// import Footer from './com/footer.js';

function App() {
 

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/Umer-Portfolio"
            element={''}
          />
          <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/resume"
            element={<Resume/>}
         
          />
          <Route
            path="/projects"
          element={<Project/>}       
          />

<Route
            path="/contact"
          element={<Contact/>}       
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
