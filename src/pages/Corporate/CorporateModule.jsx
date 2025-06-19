import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const modules = [
    {
        number: 1,
        title: "Business Communication",
        description:
            "Effective communication is the cornerstone of workplace productivity. This module equips your team with the skills to communicate ideas clearly, confidently, and professionally—whether in person, over email, or across digital platforms.",
        takeaways: [
            "Understanding formal vs. informal communication",
            "Active listening techniques",
            "Structuring clear and concise messages",
            "Tone, clarity, and professionalism in business conversations",
            "Giving and receiving feedback constructively",
        ],
        idealFor:
            "All employees and managers involved in internal/external communication",
    },
    {
        number: 2,
        title: "Presentation Skills for Leadership",
        description:
            "Leadership is not just about decisions—it's about how you communicate them. This module helps managers, team leads, and executives present with clarity, charisma, and confidence.",
        takeaways: [
            "Structuring impactful presentations",
            "Speaking with authority and empathy",
            "Storytelling techniques for business settings",
            "Managing nerves and body language",
            "Using visual aids and slides effectively",
        ],
        idealFor:
            "Mid to senior-level professionals, startup founders, team leaders",
    },
    {
        number: 3,
        title: "Email & Report Writing",
        description:
            "Master the art of written communication in the workplace. This module focuses on clarity, tone, and formatting for business emails, reports, and formal communication documents.",
        takeaways: [
            "Writing professional and error-free emails",
            "Tone modulation for different contexts (internal/external)",
            "Subject lines that get attention",
            "Structuring business reports and executive summaries",
            "Common grammar and punctuation issues to avoid",
        ],
        idealFor:
            "All employees handling communication, admin, HR, and team leaders",
    },
    {
        number: 4,
        title: "Meeting Étiquettes",
        description:
            "Make meetings more productive, inclusive, and respectful. This module fosters the right professional behaviours before, during, and after meetings—both online and in person.",
        takeaways: [
            "Punctuality and pre-meeting preparation",
            "Clear agendas and time management",
            "Participating with purpose",
            "Respectful listening and note-taking",
            "Virtual meeting best practices (video calls, online etiquette)",
        ],
        idealFor:
            "Cross-functional teams, remote workers, executives, junior staff",
    },
    {
        number: 5,
        title: "Leadership & Team Management",
        description:
            "Great leaders inspire, align, and empower. This leadership development module trains participants to lead with vision, empathy, and accountability.",
        takeaways: [
            "Leadership styles and when to apply them",
            "Emotional intelligence for team dynamics",
            "Delegation, motivation, and decision-making",
            "Managing diverse teams effectively",
            "Coaching and mentoring team members",
        ],
        idealFor:
            "First-time managers, team leads, department heads, startup founders",
    },
    {
        number: 6,
        title: "Cross-Cultural Communication",
        description:
            "In today’s global and hybrid workplaces, understanding diverse perspectives is essential. This module enhances intercultural awareness and teaches inclusive communication practices.",
        takeaways: [
            "Understanding cultural values and communication styles",
            "Overcoming language and tone barriers",
            "Adapting to global client and colleague expectations",
            "Avoiding unconscious bias in professional communication",
            "Practicing empathy across cultures",
        ],
        idealFor:
            "Teams working with international clients, remote/global teams, customer support professionals",
    },
    {
        number: 7,
        title: "Conflict Resolution & Negotiation",
        description:
            "Disagreements are inevitable—how you manage them matters. This module teaches effective strategies to resolve conflicts while maintaining professionalism and trust.",
        takeaways: [
            "Identifying the root causes of workplace conflict",
            "Conflict management styles",
            "Negotiation techniques for win-win outcomes",
            "Staying calm and professional under pressure",
            "Mediating team disputes effectively",
        ],
        idealFor:
            "HR teams, managers, team leaders, project leads",
    },
    {
        number: 8,
        title: "Customer Handling & Empathy Training",
        description:
            "Delight your customers by training your teams in empathy, clarity, and service excellence. This customer interaction module focuses on emotional intelligence in customer service.",
        takeaways: [
            "Understanding customer needs and pain points",
            "Building rapport and trust",
            "Tone modulation for difficult conversations",
            "Turning complaints into loyalty",
            "Practicing empathy and emotional awareness",
        ],
        idealFor:
            "Customer service teams, sales professionals, front-desk staff, hospitality personnel",
    },
];

const Corporate = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12 tracking-tight">
                    Corporate Module Details
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {modules.map((mod, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="group relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Border Accent */}
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl" />

                            <div className="mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {mod.number}
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                                    {mod.title}
                                </h2>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                {mod.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="font-semibold text-sm text-indigo-700 mb-2">
                                    Key Takeaways
                                </h4>
                                <ul className="space-y-2">
                                    {mod.takeaways.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                                    Ideal For: {mod.idealFor}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Corporate;
