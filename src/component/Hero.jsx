import { useState , useEffect } from "react"; 
import myVideo from '../assets/images/hero.mp4';
export default function Hero() {
    const titles = [
            "Web Developer",
            "Shopify Developer",            
            "SEO Developer"
        ];        
        const [currentIndex, setCurrentIndex] = useState(0);        
        useEffect(()=> {        
                const interval = setInterval(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }, 2000);
                return () => clearInterval(interval);        
        }, []);
  return (
    <section id="hero" className="hero pt-[100px] pb-[100px] flex items-center justify-center min-h-screen w-full bg-[#5F9598] text-[#F3F4F4]">        
        <div className="items-center">
            <h1 className="text-6xl leading-[1.5] font-500">Hello, I am Vasu Dev Taunk</h1>
            <h2 className="text-6xl leading-[1.5] font-[Bungee_Spice] font-black"><span style={{ color: "white" }}>{titles[currentIndex]}</span></h2>
            <p className="text-2xl leading-[1.5]">I build web using modern technologies.</p>
            <button className="text-white hover:text-black bg-sky-900 p-[10px] pl-[30px] pr-[30px] mt-[40px] ...">Know More</button>
      </div>
    </section>
  )
}
