// import React from "react";

// const logos = [
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-01@2x.png", alt: "Scandinavian" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-05@2x.png", alt: "Fantastic Helsinki" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-06@2x.png", alt: "Stockholm" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-07@2x.png", alt: "Origami Studio" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-08@2x.png", alt: "Rental Properties" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-09@2x.png", alt: "Scandinavia Clothing" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-10@2x.png", alt: "Scandinavian" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-add@2x.png", alt: "Fantastic Helsinki" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-05@2x.png", alt: "Stockholm" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-01@2x.png", alt: "Origami Studio" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-06@2x.png", alt: "Rental Properties" },
//     { src: "https://cesis.co/wp-content/uploads/2015/05/logo-05@2x.png", alt: "Scandinavia Clothing" },
// ];

// const PartnerLogos = () => {
//     return (
//         <section className="bg-white py-16 px-4" id="partner">
//             <div className="max-w-7xl mx-auto text-center">
//                 <h2 className="text-3xl font-bold text-gray-800">
//                     OUR CORPORATE COLLABORATION
//                 </h2>
//                 <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 mb-12 rounded"></div>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-items-center">
//                     {logos.map((logo, index) => (
//                         <div
//                             key={index}
//                             className="transition-transform transform hover:scale-105 hover:grayscale-0 grayscale duration-300 ease-in-out hover:cursor-pointer"
//                         >
//                             <img
//                                 src={logo.src}
//                                 alt={logo.alt}
//                                 className="h-20 object-contain"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PartnerLogos;


import React from "react";
import logo1 from "../../assets/Collaborations/1.png"
import logo2 from "../../assets/Collaborations/2.jpg"
import logo3 from "../../assets/Collaborations/3.webp"
import logo4 from "../../assets/Collaborations/4.png"
import logo5 from "../../assets/Collaborations/5.webp"
import logo6 from "../../assets/Collaborations/6.png"

const logos = [
    { src: logo1, alt: "Scandinavian" },
    { src: logo2, alt: "Fantastic Helsinki" },
    { src: logo3, alt: "Stockholm" },
    { src: logo4, alt: "Origami Studio" },
    { src: logo5, alt: "Rental Properties" },
    { src: logo6, alt: "Scandinavia Clothing" },
];

const PartnerLogos = () => {
    return (
        <section className="bg-white py-16 px-4 overflow-hidden" id="partner">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#173263]">
                    Our Corporate Collaborations
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-1 mb-12 rounded"></div>

                {/* Scrolling logos */}
                <div className="relative overflow-hidden w-full">
                    <div
                        className="flex w-max animate-[slide_30s_linear_infinite]"
                        style={{
                            animationName: "slide",
                            animationDuration: "30s",
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            display: "flex",
                            width: "max-content",
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="mx-8 flex-shrink-0 hover:scale-105 transition duration-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline keyframes style tag */}
            <style>
                {`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </section>
    );
};

export default PartnerLogos;
