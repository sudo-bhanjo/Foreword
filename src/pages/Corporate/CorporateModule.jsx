import React from "react";
import ModuleCard from "./DropdownDesign";

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
        <div className=" p-6 md:p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-wider">
                Corporate Module Details
            </h1>
            <div className="max-w-3xl mx-auto">
                {modules.map((module, index) => (
                    <ModuleCard key={index} {...module} />
                ))}
            </div>
        </div>
    );
};

export default Corporate;
