import React from 'react'
import card1 from '../../assets/Program/1.png'
import card2 from '../../assets/Program/2.png'
import card3 from '../../assets/Program/3.png'
import card4 from '../../assets/Program/4.png'

const topics = [
    {
        title: 'Acing Group Discussions',
        courses: '01 Course',
        icon: card1,
        delay: 0,
    },
    {
        title: 'Career Counselling',
        courses: '02 Courses',
        icon: card2,
        delay: 100,
    },
    {
        title: 'Business Communication',
        courses: '03 Course',
        icon: card3,
        delay: 200,
    },
    {
        title: 'Interview Preparation',
        courses: '04 Course',
        icon: card4,
        delay: 300,
    },
];

const Programs = () => {
    return (
        <div>
            <section className="py-36 px-4 md:px-12 lg:px-24 text-center bg-white text-gray-800">
                <p className="text-blue-600 font-semibold mb-2 text-sm">Browse Categories</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Our Programs</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={topic.delay}
                            className="group bg-white border border-transparent rounded-xl shadow-md transition-all duration-300 ease-in-out hover:border-t-3 hover:border-t-blue-600 hover:shadow-md cursor-pointer aspect-square flex flex-col items-center justify-center p-6"
                        >
                            <img src={topic.icon} alt={topic.title} className="h-36 mb-4" />
                            <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition duration-300">
                                {topic.title}
                            </h3>
                            <p className="text-sm text-black transition duration-300 mt-2">
                                {topic.courses}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Programs
