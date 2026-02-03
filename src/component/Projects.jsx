import shopifyImg from "../assets/images/2.jpg";
import wordImg from "../assets/images/3.jpg";
import devImg from "../assets/images/4.png";
import seoImg from "../assets/images/5.webp";

export default function Projects() {
  return (
    <section id="projects"  className="min-h-screen w-full bg-[#1D546D] text-[#F3F4F4]">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        {/* Project 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={seoImg}
              alt="SEO"
              className="w-40 md:w-48 rounded-xl shadow-lg project_img"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              SEO Developement
            </h3>
            <p className="text-gray-600 mb-2">
              A package that allows you to convert your data between different formats.
            </p>
            <p className="text-gray-600 mb-5">
              Supports YAML, JSON, CSV and INI with multiple conversion options.
            </p>            
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

          {/* Image */}
          <div className="flex justify-center md:order-2">
            <img
              src={shopifyImg}
              alt="Shopify"
              className="w-40 md:w-48 rounded-xl shadow-lg project_img"
            />
          </div>

          {/* Content */}
          <div className="md:order-1">
            <h3 className="text-2xl font-semibold mb-3">
              Shopify Speed Optimization
            </h3>
            <p className="text-gray-600 mb-2">
              Offline drawing app with a clean and user-friendly interface.
            </p>
            <p className="text-gray-600 mb-5">
              Play with creative tools and enjoy a smooth drawing experience.
            </p>            
          </div>
        </div>
        {/* Project 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={devImg}
              alt="Shopify"
              className="w-40 md:w-48 rounded-xl shadow-lg project_img"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Shopify Developement
            </h3>
            <p className="text-gray-600 mb-2">
              A package that allows you to convert your data between different formats.
            </p>
            <p className="text-gray-600 mb-5">
              Supports YAML, JSON, CSV and INI with multiple conversion options.
            </p>            
          </div>
        </div>        
        {/* Project 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

          {/* Image */}
          <div className="flex justify-center md:order-2">
            <img
              src={wordImg}
              alt="Wordpress"
              className="w-40 md:w-48 rounded-xl shadow-lg project_img"
            />
          </div>

          {/* Content */}
          <div className="md:order-1">
            <h3 className="text-2xl font-semibold mb-3">
              Wordpress Speed Optimization
            </h3>
            <p className="text-gray-600 mb-2">
              Offline drawing app with a clean and user-friendly interface.
            </p>
            <p className="text-gray-600 mb-5">
              Play with creative tools and enjoy a smooth drawing experience.
            </p>            
          </div>
        </div>
      </div>
    </section>
  )
}
