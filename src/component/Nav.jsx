export default function Nav({ theme, setTheme }) {
  return (
    <>    
    <nav className="navbar fixed top-0 w-full bg-[#F3F4F4] shadow-md z-50">
      <ul className="flex justify-center gap-8 py-4 text-[#5F9598] font-medium">
        <li><a href="#hero" className="hover:text-[#1D546D] transition">Home</a></li>
        <li><a href="#about" className="hover:text-[#1D546D] transition">About</a></li>
        <li><a href="#education" className="hover:text-[#1D546D] transition">Education</a></li>
        <li><a href="#skills" className="hover:text-[#1D546D] transition">Skills</a></li>        
        <li><a href="#experience" className="hover:text-[#1D546D] transition">Experience</a></li>               
        <li><a href="#projects" className="hover:text-[#1D546D] transition">Projects</a></li>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "Switch Theme" : "Switch Theme"}
        </button>
      </ul>
    </nav>    
    </>
  )
}
