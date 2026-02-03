export default function About() {
  return (
    <section id="about" className="min-h-screen w-full bg-[#1D546D] text-[#F3F4F4]">    
        <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">                    
                <div className="flex justify-center">
                    <img src={profileImg} alt="Profile" className="w-72 h-72 object-cover rounded-2xl shadow-lg"/>
                </div>            
                <div>
                    <h2 className="text-4xl font-bold mb-4"> About Me </h2>
                    <p>Hi, I’m Vasu Dev Taunk, a passionate Shopify and WordPress Developer with over 4.5 years of experience in Shopify development and 1.5 years of experience in WordPress development.</p><br></br>
                    <p>I specialize in building high-performance, responsive, and conversion-focused websites that not only look great but also load fast and perform well in search engines. From custom Shopify theme development to WordPress customization and working with other CMS platforms, I help businesses turn their ideas into scalable digital solutions.</p><br></br>
                    <p>One of my core strengths is PageSpeed Optimization. I focus on improving Core Web Vitals, reducing load time, and optimizing website performance without compromising design or functionality.</p>                    
                </div>
            </div>
        </div>        
    </section>
  )
}
