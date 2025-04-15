import React from "react";

const logos = [
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-01@2x.png", alt: "Scandinavian" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-05@2x.png", alt: "Fantastic Helsinki" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-06@2x.png", alt: "Stockholm" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-07@2x.png", alt: "Origami Studio" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-08@2x.png", alt: "Rental Properties" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-09@2x.png", alt: "Scandinavia Clothing" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-10@2x.png", alt: "Scandinavian" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-add@2x.png", alt: "Fantastic Helsinki" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-05@2x.png", alt: "Stockholm" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-01@2x.png", alt: "Origami Studio" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-06@2x.png", alt: "Rental Properties" },
    { src: "https://cesis.co/wp-content/uploads/2015/05/logo-05@2x.png", alt: "Scandinavia Clothing" },
];

const PartnerLogos = () => {
    return (
        <section className="bg-white py-16 px-4" id="partner">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    OUR CORPORATE COLLABORATION
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 mb-12 rounded"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="transition-transform transform hover:scale-105 hover:grayscale-0 grayscale duration-300 ease-in-out hover:cursor-pointer"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
