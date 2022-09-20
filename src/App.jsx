import './App.css';
import Navbar from './components/Navbar.jsx';
import Refprojects from './pages/Refprojects.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Feedback from './pages/Feedback';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Refprojects/>
    <Projects/>
    <About/>
    <Contactus/>
    <Feedback/> */}
      {/* 
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Refprojects />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Refprojects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
