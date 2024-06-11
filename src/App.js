import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './com/nav.js';
import './App.css'
import Home from './com/home.js';
import Courses from './com/courses.js';
import Projects from './com/projects.js';
// import Footer from './com/footer.js';

function App() {
 

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/Umer-Portfolio"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
         
          />
          <Route
            path="/courses"
            element={<Courses />}
       
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
