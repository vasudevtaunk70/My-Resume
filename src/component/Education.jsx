export default function Education() {
    return (
        <section id="education" className="min-h-screen w-full bg-[#5F9598] text-[#F3F4F4]">      
            <div className="max-w-7xl mx-auto px-6 py-20">        
                <h2 className="text-4xl font-bold text-center mb-12">Education</h2>        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-[150px]">
                    <div className="bg-[#2e2f34] rounded-xl p-6 flex flex-col items-center shadow-lg">
                        <h3 className="text-xl font-semibold mb-1">Graduation</h3>
                        <p className="text-sm text-gray-300 mb-4">2011 – 2015</p>
                        <img src="src/assets/images/btech.webp" alt="Graduation" className="w-16 h-16 mb-4" />
                        <div className="text-sm space-y-2">
                            <p><b>Course :</b> B-Tech</p>
                            <p><b>Stream :</b> Electronics & Communication Engineering</p>
                            <p><b>Percentage :</b> 70%</p>
                            <p><b>University :</b> Rajasthan Technical University</p>
                        </div>
                    </div>                
                    <div className="bg-[#2e2f34] rounded-xl p-6 flex flex-col items-center shadow-lg">
                        <h3 className="text-xl font-semibold mb-1">Higher Secondary</h3>
                        <p className="text-sm text-gray-300 mb-4">2009 – 2011</p>
                        <img src="src/assets/images/10.png"  alt="Higher Secondary" className="w-16 h-16 mb-4" />
                        <div className="text-sm space-y-2">
                            <p><b>Course :</b> 12th</p>
                            <p><b>Stream :</b> Physics, Chemistry & Maths</p>
                            <p><b>Percentage :</b> 61.08%</p>
                            <p><b>Board :</b> RBSE</p>
                        </div>
                    </div>                
                    <div className="bg-[#2e2f34] rounded-xl p-6 flex flex-col items-center shadow-lg">
                        <h3 className="text-xl font-semibold mb-1">Secondary School</h3>
                        <p className="text-sm text-gray-300 mb-4">2009</p>
                        <img src="src/assets/images/10.png" alt="Secondary School" className="w-16 h-16 mb-4"/>
                        <div className="text-sm space-y-2">
                            <p><b>Course :</b> 10th</p>
                            <p><b>Stream :</b> All</p>
                            <p><b>Percentage :</b> 75.17%</p>                            
                            <p><b>Board :</b> RBSE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}