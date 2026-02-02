import { useEffect , useState } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './component/nav.jsx'
import Hero from './component/hero.jsx'
import Skill from './component/skill.jsx'
import Education from './component/education.jsx'
import Projects from './component/projects.jsx'
import About from './component/about.jsx'
import Exp from './component/exp.jsx'

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