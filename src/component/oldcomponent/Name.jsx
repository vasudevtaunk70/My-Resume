import { useState , useEffect } from "react"; 
export default function Name(){
    const titles = [
        "Hello Vasudev-----Full Stack Developer",
        "Hello Vasudev-----Web Developer",
        "Hello Vasudev-----Shopify Developer"
    ];
    const [text, settext] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            settext("I am here")
        },5000);
    })
    useEffect(()=> {        
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }, 2000);
            return () => clearInterval(interval);        
    }, []);

    return(
        <div><h1><p>{text}
            </p><span style={{ color: "green" }}>{titles[currentIndex]}</span></h1></div>
    );
}