import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Courses from './pages/Courses';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
