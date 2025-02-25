// import { RevealOnScroll } from "../RevealOnScroll";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Hi, I'm Leo Ortega
//           </h1>

//           <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
//             I’m a full-stack developer who loves crafting clean, scalable web
//             applications. My goal is to build solutions that offer both
//             exceptional performance and a delightful user experience.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-lg"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-orange-500 text-orange-500 py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-orange-500 hover:text-white"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };



import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-gradientBackground"></div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hello, I'm Leo Ortega
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I craft immersive digital experiences that merge creativity with technology.
            Let's transform ideas into extraordinary realities.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-lg animate-pulse"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-orange-500 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
