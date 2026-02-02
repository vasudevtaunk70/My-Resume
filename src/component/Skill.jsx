export default function Skill() {
  return (
    <section id="skills" className="min-h-screen w-full bg-[#1D546D] text-[#F3F4F4]">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">

          {[
            { img: "src/assets/images/sh.svg", name: "Shopify" },
            { img: "src/assets/images/wordpress.png", name: "Wordpress" },
            { img: "src/assets/images/wix.png", name: "Wix" },
            { img: "src/assets/images/web.png", name: "Webflow" },
            { img: "src/assets/images/html.avif", name: "HTML" },
            { img: "src/assets/images/css.png", name: "CSS" },
            { img: "src/assets/images/js.png", name: "JavaScript" },
            { img: "src/assets/images/linux.svg", name: "CMS" },
            { img: "src/assets/images/team.png", name: "Team Lead" },
            { img: "src/assets/images/speed.jpg", name: "Page Speed Optimization" },
            { img: "src/assets/images/theme.png", name: "Theme Customization" },
            { img: "src/assets/images/liq.jpg", name: "Liquid Templating Language" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:scale-105 transition duration-300 pt-[50px]"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-3"
              />
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
