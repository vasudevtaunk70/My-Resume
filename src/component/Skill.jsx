import shImg from "../assets/images/sh.svg";
import wordImg from "../assets/images/wordpress.png";
import wixImg from "../assets/images/wix.png";
import webImg from "../assets/images/web.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import jsImg from "../assets/images/js.png";
import linuxImg from "../assets/images/team.png";
import teamImg from "../assets/images/team.png";
import speedImg from "../assets/images/speed.jpg";
import themeImg from "../assets/images/theme.png";
import liqImg from "../assets/images/liq.jpg";
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
            { img: shImg, name: "Shopify" },
            { img: wordImg, name: "Wordpress" },
            { img: wixImg, name: "Wix" },
            { img: webImg, name: "Webflow" },
            { img: htmlImg, name: "HTML" },
            { img: cssImg, name: "CSS" },
            { img: jsImg, name: "JavaScript" },
            { img: linuxImg, name: "CMS" },
            { img: teamImg, name: "Team Lead" },
            { img: speedImg, name: "Page Speed Optimization" },
            { img: themeImg, name: "Theme Customization" },
            { img: liqImg, name: "Liquid Templating Language" },
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
