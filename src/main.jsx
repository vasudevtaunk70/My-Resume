import { useEffect , useState } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './component/Nav.jsx'
import Hero from './component/Hero.jsx'
import Skill from './component/Skill.jsx'
import Education from './component/Education.jsx'
import Projects from './component/Projects.jsx'
import About from './component/About.jsx'
import Exp from './component/Exp.jsx'

function Root() {
  const getTheme = () =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Nav setTheme={setTheme} theme={theme} />
      <Hero />
      <About />
      <Exp />
      <Skill />
      <Education />
      <Projects /> 
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
