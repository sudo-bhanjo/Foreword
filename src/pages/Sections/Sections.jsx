import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const moduleDetails = {
    'Business Communication': {
        title: '1. Business Communication',
        description:
            'Effective communication is the cornerstone of workplace productivity. This module equips your team with the skills to communicate ideas clearly, confidently, and professionally—whether in person, over email, or across digital platforms.',
        takeaways: [
            'Understanding formal vs. informal communication',
            'Active listening techniques',
            'Structuring clear and concise messages',
            'Tone, clarity, and professionalism in business conversations',
            'Giving and receiving feedback constructively',
        ],
        idealFor: 'All employees and managers involved in internal/external communication',
    },
    'Presentation Skills for Leadership': {
        title: '2. Presentation Skills for Leadership',
        description:
            "Leadership is not just about decisions—it's about how you communicate them. This module helps managers, team leads, and executives present with clarity, charisma, and confidence.",
        takeaways: [
            'Structuring impactful presentations',
            'Speaking with authority and empathy',
            'Storytelling techniques for business settings',
            'Managing nerves and body language',
            'Using visual aids and slides effectively',
        ],
        idealFor: 'Mid to senior-level professionals, startup founders, team leaders',
    },
    'Email & Report Writing': {
        title: '3. Email & Report Writing',
        description:
            'Master the art of written communication in the workplace. This module focuses on clarity, tone, and formatting for business emails, reports, and formal communication documents.',
        takeaways: [
            'Writing professional and error-free emails',
            'Tone modulation for different contexts (internal/external)',
            'Subject lines that get attention',
            'Structuring business reports and executive summaries',
            'Common grammar and punctuation issues to avoid',
        ],
        idealFor:
            'All employees handling communication, admin, HR, and team leaders',
    },
    'Meeting Etiquettes': {
        title: '4. Meeting Etiquettes',
        description:
            'Make meetings more productive, inclusive, and respectful. This module fosters the right professional behaviours before, during, and after meetings—both online and in person.',
        takeaways: [
            'Punctuality and pre-meeting preparation',
            'Clear agendas and time management',
            'Participating with purpose',
            'Respectful listening and note-taking',
            'Virtual meeting best practices (video calls, online etiquette)',
        ],
        idealFor:
            'Cross-functional teams, remote workers, executives, junior staff',
    },
    'Leadership & Team Management': {
        title: '5. Leadership & Team Management',
        description:
            'Great leaders inspire, align, and empower. This leadership development module trains participants to lead with vision, empathy, and accountability.',
        takeaways: [
            'Leadership styles and when to apply them',
            'Emotional intelligence for team dynamics',
            'Delegation, motivation, and decision-making',
            'Managing diverse teams effectively',
            'Coaching and mentoring team members',
        ],
        idealFor:
            'First-time managers, team leads, department heads, startup founders',
    },
    'Cross-Cultural Communication': {
        title: '6. Cross-Cultural Communication',
        description:
            'In today’s global and hybrid workplaces, understanding diverse perspectives is essential. This module enhances intercultural awareness and teaches inclusive communication practices.',
        takeaways: [
            'Understanding cultural values and communication styles',
            'Overcoming language and tone barriers',
            'Adapting to global client and colleague expectations',
            'Avoiding unconscious bias in professional communication',
            'Practicing empathy across cultures',
        ],
        idealFor:
            'Teams working with international clients, remote/global teams, customer support professionals',
    },
    'Conflict Resolution & Negotiation': {
        title: '7. Conflict Resolution & Negotiation',
        description:
            'Disagreements are inevitable—how you manage them matters. This module teaches effective strategies to resolve conflicts while maintaining professionalism and trust.',
        takeaways: [
            'Identifying the root causes of workplace conflict',
            'Conflict management styles',
            'Negotiation techniques for win-win outcomes',
            'Staying calm and professional under pressure',
            'Mediating team disputes effectively',
        ],
        idealFor: 'HR teams, managers, team leaders, project leads',
    },
    'Customer Handling & Empathy Training': {
        title: '8. Customer Handling & Empathy Training',
        description:
            'Delight your customers by training your teams in empathy, clarity, and service excellence. This customer interaction module focuses on emotional intelligence in customer service.',
        takeaways: [
            'Understanding customer needs and pain points',
            'Building rapport and trust',
            'Tone modulation for difficult conversations',
            'Turning complaints into loyalty',
            'Practicing empathy and emotional awareness',
        ],
        idealFor:
            'Customer service teams, sales professionals, front-desk staff, hospitality personnel',
    },
    'Communication Mastery': {
        title: '1. Communication Mastery',
        description:
            'Unlock the power of impactful communication—because what you say is only as effective as how you say it. This module lays the foundation for confident, clear, and purposeful communication in personal, academic, and professional settings.',
        takeaways: [
            'Verbal & non-verbal communication basics',
            'Listening skills for better understanding',
            'Clarity, tone, and expression in conversations',
            'Structuring thoughts before speaking',
            'Building conversational confidence in English',
        ],
        idealFor: 'Students, freshers, and professionals looking to enhance daily communication',
    },
    'Public Speaking & Presentation Skills': {
        title: '2. Public Speaking & Presentation Skills',
        description:
            'Overcome the fear of speaking in front of a group. This interactive module helps you become a confident speaker—whether you’re giving a presentation, participating in class discussions, or attending interviews.',
        takeaways: [
            'Managing stage fear and anxiety',
            'Structuring your speech or presentation',
            'Voice modulation, body language & eye contact',
            'Using storytelling & examples to engage an audience',
            'Practice rounds with live feedback',
        ],
        idealFor: 'Students, job aspirants, workshop facilitators, young professionals',
    },
    'Interview Skills & Mock Interviews': {
        title: '3. Interview Skills & Mock Interviews',
        description:
            'Crack your next interview with confidence and composure. This career-focused module prepares you for real-life interviews with coaching, role-plays, and feedback tailored to your industry and goals.',
        takeaways: [
            'Understanding interviewer psychology',
            'Crafting strong self-introduction & key responses',
            'Handling HR and situation-based questions',
            'Interview body language & etiquette',
            'Live mock interviews with performance analysis',
        ],
        idealFor: 'College students, fresh graduates, job seekers, scholarship applicants',
    },
    'Resume & LinkedIn Building': {
        title: '4. Resume & LinkedIn Building',
        description:
            'Your resume and LinkedIn profile are your first impression—make them count. This module walks you through creating a professional, ATS-friendly resume and a powerful online presence.',
        takeaways: [
            'Resume formatting and content strategy',
            'Writing impactful bullet points and summaries',
            'LinkedIn profile optimization',
            'Highlighting achievements, skills, and keywords',
            'Personal branding for job searches',
        ],
        idealFor: 'Final-year students, job changers, professionals entering new industries',
    },
    'Time & Stress Management': {
        title: '5. Time & Stress Management',
        description:
            'Master your schedule and your mindset. This practical module teaches techniques to boost productivity, handle academic/professional pressure, and maintain work-life balance.',
        takeaways: [
            'Prioritization techniques (Eisenhower Matrix, Pomodoro)',
            'Managing distractions and digital overload',
            'Stress triggers and calming strategies',
            'Positive routine-building and habit setting',
            'Goal setting and weekly planning',
        ],
        idealFor: 'Students juggling academics and career prep, young professionals, freelancers',
    },
    'Emotional Intelligence for Career Success': {
        title: '6. Emotional Intelligence for Career Success',
        description:
            'Success isn’t just IQ—it’s EQ. This self-awareness-focused module enhances emotional intelligence (EQ) to help individuals understand themselves and others in professional settings.',
        takeaways: [
            'Understanding your emotions and triggers',
            'Building empathy and active listening',
            'Responding vs. reacting in workplace situations',
            'Building resilience and emotional stability',
            'Relationship-building skills for the workplace',
        ],
        idealFor: 'Students, team players, leaders, and aspiring professionals',
    },
    'Etiquette, Grooming & Personal Branding': {
        title: '7. Etiquette, Grooming & Personal Branding',
        description:
            'Your first impression often becomes your lasting impression. This finishing-school-style module helps individuals create a polished, confident, and authentic presence—both online and offline.',
        takeaways: [
            'Professional & social etiquette basics',
            'Dress codes, grooming, and posture',
            'Communication etiquette: online & in-person',
            'Developing a personal style and presence',
            'Building a reputation that aligns with career goals',
        ],
        idealFor: 'College students, job seekers, young professionals entering the workforce',
    },
    'HR Process Audit': {
        title: '1. HR Process Audit',
        description:
            'Ensure that your people processes are compliant, efficient, and aligned with your organizational goals. Our HR Process Audit is a structured evaluation of your current HR policies, procedures, and practices.',
        takeaways: [
            'Comprehensive review of HR documents, policies, and SOPs',
            'Identification of compliance gaps and inefficiencies',
            'Recommendations for improvement in recruitment, onboarding, appraisal, and exit processes',
            'Assessment of alignment with company vision, values, and growth strategy',
            'Roadmap for HR transformation',
        ],
        idealFor: 'SMEs, startups, educational institutions, and growing companies without a formal HR framework',
    },

    'Internal Branding & Aesthetics': {
        title: '2. Internal Branding & Aesthetics',
        description:
            'Your internal environment speaks volumes about your work culture. This module focuses on aligning internal communication, visuals, and workspace aesthetics with your brand identity.',
        takeaways: [
            'Audit of current internal brand materials (emails, posters, notice boards, intranet, etc.)',
            'Visual and tonal consistency with brand language',
            'Development of internal design templates and cultural messages',
            'Suggesting workspace decor changes aligned with brand aesthetics',
            'Enhancing internal engagement through branded experiences',
        ],
        idealFor: 'Startups, creative offices, educational institutions, HR departments, culture-building teams',
    },

    'Team Structure Design': {
        title: '3. Team Structure Design',
        description:
            'Build agile, accountable, and scalable teams. This module helps you define clear reporting lines, functional responsibilities, and optimized team compositions to reduce overlaps and improve performance.',
        takeaways: [
            'Role clarity mapping and delegation strategy',
            'Designing functional and cross-functional teams',
            'Defining KPIs, reporting structures, and growth ladders',
            'Identifying talent gaps and succession planning',
            'Supporting remote and hybrid team dynamics',
        ],
        idealFor: 'Rapidly scaling businesses, family-run enterprises, NGOs, and educational institutions',
    },

    'Feedback Mechanisms': {
        title: '4. Feedback Mechanisms',
        description:
            'Foster a culture of trust and growth with meaningful feedback systems. This module builds customized feedback channels that empower employees and managers to engage constructively.',
        takeaways: [
            'Designing feedback loops (managerial, peer-to-peer, and 360° feedback)',
            'Training on giving and receiving feedback respectfully',
            'Creating anonymous feedback systems',
            'Embedding feedback in appraisal cycles',
            'Continuous improvement tracking with measurable outcomes',
        ],
        idealFor: 'Organizations building performance-driven or learning-focused cultures',
    },

    'Branding & Aesthetic Review': {
        title: '5. Branding & Aesthetic Review',
        description:
            'Evaluate your brand presence through a soft skills lens. This review explores how your brand is perceived through its visual, verbal, and behavioural cues—internally and externally.',
        takeaways: [
            'Review of external branding materials (brochures, website, social media, etc.)',
            'Alignment with internal brand identity and workplace culture',
            'Tone and voice analysis in communication',
            'Recommendations for enhancing professional appeal and credibility',
            'Suggestions for refining brand storytelling and positioning',
        ],
        idealFor: 'New-age companies, educational institutes, startups preparing for funding or scale',
    },

    'Organizational Restructuring Support': {
        title: '6. Organizational Restructuring Support',
        description:
            'Change is inevitable—growth is intentional. We support organizations undergoing transitions by facilitating restructuring with minimal disruption and maximum clarity.',
        takeaways: [
            'Understanding strategic goals for restructuring',
            'Workforce assessment and role realignment',
            'Internal communication planning during transition',
            'Managing morale and team buy-in',
            'Post-restructuring support: training, orientation, and integration',
        ],
        idealFor: 'Organizations undergoing mergers, expansions, leadership shifts, or process overhauls',
    },
    'Career Orientation & Self-Awareness': {
        title: '1. Career Orientation & Self-Awareness',
        description:
            'Help students make informed decisions about their future. This module fosters self-reflection, goal clarity, and awareness about strengths, interests, and potential career paths.',
        takeaways: [
            'Identifying personal strengths, values, and passions',
            'Understanding aptitude vs. interest',
            'Exposure to diverse career options across industries',
            'Aligning academic goals with long-term career planning',
            'Building self-confidence through self-awareness',
        ],
        idealFor: 'High school & college students (Classes 9–12, UG Year 1–2)',
    },

    'Communication & Public Speaking': {
        title: '2. Communication & Public Speaking',
        description:
            'Build confidence in expression—because every opportunity begins with a conversation. This beginner-friendly module introduces students to effective verbal and non-verbal communication.',
        takeaways: [
            'Speaking clearly and confidently in English or regional language',
            'Basic voice modulation and tone control',
            'Body language and eye contact',
            'Overcoming stage fright',
            'Practice with impromptu and prepared speeches',
        ],
        idealFor: 'Students who want to improve speaking skills for school, events, or competitions',
    },

    'Group Discussions & Personal Interviews': {
        title: '3. Group Discussions & Personal Interviews',
        description:
            'Prepare students to participate in competitive and selection-based interactions like college admissions, entrance tests, and scholarship interviews.',
        takeaways: [
            'Understanding GD rules and etiquette',
            'Structuring arguments logically and respectfully',
            'Handling personal interview questions with confidence',
            'Grooming and dressing for formal interviews',
            'Practice rounds with instructor feedback',
        ],
        idealFor: 'Senior school & undergraduate students preparing for college, job, or internship interviews',
    },

    'Time Management & Goal Setting': {
        title: '4. Time Management & Goal Setting',
        description:
            'Develop responsible, future-ready individuals who know how to plan and prioritize. This module equips students with tools to manage academic pressure and create meaningful progress.',
        takeaways: [
            'Setting SMART goals for academic and personal growth',
            'Daily and weekly time-blocking strategies',
            'Dealing with procrastination and digital distractions',
            'Building self-discipline and habits',
            'Tracking goals and celebrating progress',
        ],
        idealFor: 'Students balancing academics, extracurriculars, and career prep',
    },

    'Body Language & First Impressions': {
        title: '5. Body Language & First Impressions',
        description:
            'Your body speaks before you do. This module teaches students to be mindful of posture, gestures, expressions, and presence—creating a strong and respectful first impression.',
        takeaways: [
            'Understanding open vs. closed body language',
            'Posture, hand movements, and eye contact in conversations',
            'Interpreting others’ body language',
            'Dressing appropriately for different settings',
            'Managing anxiety through positive physical presence',
        ],
        idealFor: 'Students preparing for competitions, stage events, college interviews, or public speaking',
    },

    'Social Etiquette & Life Skills': {
        title: '6. Social Etiquette & Life Skills',
        description:
            'Raise socially aware, respectful, and well-mannered individuals. This essential life skills module introduces learners to basic etiquette, social intelligence, and real-world readiness.',
        takeaways: [
            'Everyday manners: greetings, introductions, gratitude',
            'Behaviour in public, classroom, and virtual environments',
            'Table manners and dining etiquette',
            'Respectful online behaviour and digital citizenship',
            'Introduction to budgeting, safety, and basic decision-making',
        ],
        idealFor: 'School and college students transitioning into adult life and professional spaces',
    },
};

const cardData = {
    "Corporate Training Programs": [
        {
            title: 'Business Communication',
            image: 'https://img.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg?t=st=1750819452~exp=1750823052~hmac=2e7d72b0408b03a647ea56603bcb1a99d0a4003ffbfc910e0e26a1a518064277&w=1380',
        },
        {
            title: 'Presentation Skills for Leadership',
            image: 'https://img.freepik.com/free-photo/leader-authority-boss-coach-director-manager-concept_53876-133859.jpg?t=st=1750819496~exp=1750823096~hmac=21bf7484f627f1cabad2ca445ad9ced259a89b372902c2124d482fb21b7ee894&w=1380',
        },
        {
            title: 'Email & Report Writing',
            image: 'https://img.freepik.com/free-vector/concept-new-message-landing-page_52683-24926.jpg?t=st=1750818744~exp=1750822344~hmac=b21385894b2ff79f968e457ba0d6f30525b7ee4d15adbf6cd2d4946d9dd0738f&w=1380',
        },
        {
            title: 'Meeting Etiquettes',
            image: 'https://img.freepik.com/free-vector/office-table-top-view-business-meeting-flat-web-infographic-concept-staff-table-report-analytics-working-tablet-laptop-empty-background-brainstorm-report-planning-creative-people-collection_126523-1383.jpg?t=st=1750819570~exp=1750823170~hmac=67771730af2d84d0cd98b90f4c72d7f398976ce8b0dcaf242818bb84b8b87a82&w=1380',
        },
        {
            title: 'Leadership & Team Management',
            image: 'https://img.freepik.com/free-photo/business-leadership_53876-95299.jpg?t=st=1750819620~exp=1750823220~hmac=00e365379dbcd65c67c5f7b0d5fdd31d9ce191a307a0521661ee7324a7e5115c&w=1380',
        },
        {
            title: 'Cross-Cultural Communication',
            image: 'https://img.freepik.com/free-vector/illustration-with-young-people-talking_52683-29824.jpg?t=st=1750819680~exp=1750823280~hmac=2018fe94ecfd2b1d88fed2c2df364d14fdb5e8a805de3fd2e429dfbb1bb1d9d6&w=1380',
        },
        {
            title: 'Conflict Resolution & Negotiation',
            image: 'https://img.freepik.com/free-photo/business-composition-with-modern-style_23-2147900185.jpg?t=st=1750819731~exp=1750823331~hmac=03fd95c818dff0a53551b0f64b66f97813e6248be396ff982c743f17edca7aae&w=1380',
        },
        {
            title: 'Customer Handling & Empathy Training',
            image: 'https://img.freepik.com/free-photo/serious-businesswoman-businessman-talking-boardroom_1262-18034.jpg?t=st=1750819804~exp=1750823404~hmac=86e4d00fef8e48972d8b1ffe6904b08eee22ee5163127bddde92d2b89e9fc8b6&w=1380',
        },
    ],
    "Student & Individual Training": [
        {
            title: 'Communication Mastery',
            image: 'https://img.freepik.com/free-vector/news-reporters-interviewing-businessman-politician_74855-6590.jpg?t=st=1750820576~exp=1750824176~hmac=8c3a79498ac00c300bd8f44c03ed32a7986c9e307f2327f85cc029eb459b7df9&w=1380',
        },
        {
            title: 'Public Speaking & Presentation Skills',
            image: 'https://img.freepik.com/free-vector/professional-speaker-concept-rhetoric-elocution-specialist-speaking-microphone-business-seminar-speaker-broadcasting-public-address-flat-vector-illustration_613284-1742.jpg?t=st=1750820613~exp=1750824213~hmac=105b01e1c92d00bf6e2ebeecb9d18c08b17b53d78206fc5a18b7f08389dad1e5&w=1380',
        },
        {
            title: 'Interview Skills & Mock Interviews',
            image: 'https://img.freepik.com/free-photo/headhunters-interviewing-female-job-candidate_1163-4674.jpg?t=st=1750820678~exp=1750824278~hmac=c8c735d4091efbe36e2f2be7afef1526cb3783646921c31860849a5999db05dd&w=1380',
        },
        {
            title: 'Resume & LinkedIn Profiling',
            image: 'https://img.freepik.com/free-photo/resume-application-employment-form-concept_53876-125147.jpg?t=st=1750820711~exp=1750824311~hmac=30cc51a1f3a0b743717d994dc436321d6b9414a0950172b2a34f7c7697792a34&w=1380',
        },
        {
            title: 'Resume & LinkedIn Building',
            image: 'https://img.freepik.com/free-photo/resume-application-employment-form-concept_53876-132184.jpg?t=st=1750820757~exp=1750824357~hmac=f7892da878ed0653548df9a018869e085649665ddd79efe463c5ae73feb6fc6d&w=1380',
        },
        {
            title: 'Time & Stress Management',
            image: 'https://img.freepik.com/free-vector/man-phone-postpone-concept_23-2148493984.jpg?t=st=1750820788~exp=1750824388~hmac=b07a5a3a1a236eda6538091d169ac4359a9ccce2b8b67e0a1e6c65ca4721aff7&w=1380',
        },
        {
            title: 'Emotional Intelligence for Career Success',
            image: 'https://img.freepik.com/free-vector/flat-world-mental-health-day-background_23-2149634438.jpg?t=st=1750817575~exp=1750821175~hmac=b72f564bd0b8291e4114ee7bac9b540e11f238e02436443fe5c2d8a5292d4945&w=1380',
        },
        {
            title: 'Etiquette, Grooming & Personal Branding',
            image: 'https://img.freepik.com/free-vector/brand-concept-marketing-strategy-unique-design-company-product-brand-recognition-identity-building-isolated-flat-vector-illustration_613284-1082.jpg?t=st=1750820889~exp=1750824489~hmac=b3695ed6abf385fad2a7643915840c848478f322a5f85894371e2a5c5eda6d4e&w=1380',
        },
    ],
    "HR & Organizational Services": [
        {
            title: 'HR Process Audit',
            image: 'https://img.freepik.com/free-vector/hand-drawn-gathering-data-business-concept_23-2149164274.jpg?t=st=1750860293~exp=1750863893~hmac=46da605033f32cad0775f43096e120f5a0af4d38e5c62a6c26e87dcb445a5300&w=1380',
        },
        {
            title: 'Internal Branding & Aesthetics',
            image: 'https://img.freepik.com/free-photo/close-up-photo-girl-sitting-white-desk-taking-photos-notes-her-cellphone-isolated_574295-5242.jpg?t=st=1750860935~exp=1750864535~hmac=6082e67d025a6bbd6979d44fb6af99b5a660d1147011d5569f7d1aed0a3ef624&w=1380',
        },
        {
            title: 'Team Structure Design',
            image: 'https://img.freepik.com/free-vector/flat-organizational-chart-infographic_23-2149008127.jpg?t=st=1750860325~exp=1750863925~hmac=449fa0811ee4f53f60134b37a714e69a59c0475ba9c326a536edead672a77a7f&w=1380',
        },
        {
            title: 'Feedback Mechanisms',
            image: 'https://img.freepik.com/free-photo/evaluation-feedback-customer-smiley-response_53876-123011.jpg?t=st=1750860363~exp=1750863963~hmac=d6d53e29a7f9ce7b547df546b5b5cd47d5844c872c51d4d03c3e93040d70b8c2&w=1380',
        },
        {
            title: 'Branding & Aesthetic Review',
            image: 'https://img.freepik.com/free-photo/stylish-beauty-women-elegent-enjoy-concept_53876-132577.jpg?t=st=1750860406~exp=1750864006~hmac=58e3ef6b3634dc959e690ed2aea118b0bfa71e4e9f39f41fac694cc9e068547d&w=1380',
        },
        {
            title: 'Organizational Restructuring Support',
            image: 'https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg?t=st=1750860446~exp=1750864046~hmac=f18f2416f2aac3ef4803ce3711dcb612849807dcd1151da883e3b8200a71d49c&w=1380',
        },
    ],
    "Institutional Training": [
        {
            title: 'Career Orientation & Self-Awareness',
            image: 'https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg?t=st=1750860495~exp=1750864095~hmac=bf8443f731ec1827450c9eaa2029df3bdabb9f1fc75db6396b552207b4e6eabc&w=1380',
        },
        {
            title: 'Communication & Public Speaking',
            image: 'https://img.freepik.com/free-vector/professional-speaker-concept-rhetoric-elocution-specialist-speaking-microphone-business-seminar-speaker-broadcasting-public-address-flat-vector-illustration_613284-1742.jpg?t=st=1750820613~exp=1750824213~hmac=105b01e1c92d00bf6e2ebeecb9d18c08b17b53d78206fc5a18b7f08389dad1e5&w=1380',
        },
        {
            title: 'Group Discussions & Personal Interviews',
            image: 'https://img.freepik.com/free-photo/headhunters-interviewing-female-job-candidate_1163-4674.jpg?t=st=1750820678~exp=1750824278~hmac=c8c735d4091efbe36e2f2be7afef1526cb3783646921c31860849a5999db05dd&w=1380',
        },
        {
            title: 'Time Management & Goal Setting',
            image: 'https://img.freepik.com/free-vector/hand-drawn-time-management-concept_23-2148843889.jpg?t=st=1750860641~exp=1750864241~hmac=1467fab9958e731a87aaec7ef6b812a456dba1eff5848f82e5445569d7677813&w=1380',
        },
        {
            title: 'Body Language & First Impressions',
            image: 'https://img.freepik.com/free-vector/social-distancing-concept-coronavirus_23-2148494109.jpg?t=st=1750860732~exp=1750864332~hmac=6f1102d2532b17f5aa62a653f3db4537e01724169a633d2173ede81998c5e530&w=1380',
        },
        {
            title: 'Social Etiquette & Life Skills',
            image: 'https://img.freepik.com/free-vector/people-with-technology-devices-including-laptops-zoom-en-people-with-technology-devices-including-laptops-es-sp-mark-as-item-premium-cat_23-2148453655.jpg?t=st=1750860788~exp=1750864388~hmac=98a78f5b5afa5ea4703bfecafbb78fd958743baec7ccfad17cb2e39c77be4c4c&w=1380',
        },
    ],
};

const DropdownCards = () => {
    const [openTab, setOpenTab] = useState("Corporate Training Programs");
    const [selectedCard, setSelectedCard] = useState(null);

    const toggleTab = (tab) => {
        setOpenTab((prev) => (prev === tab ? null : tab));
    };

    const closeModal = () => setSelectedCard(null);

    // return (
    //     <div className="max-w-6xl mx-auto px-4 py-10">
    //         <h2 className="text-3xl font-bold text-gray-800 text-center pb-5">Our Services</h2>
    //         <div className="flex flex-wrap gap-4 justify-center mb-8">
    //             {Object.keys(cardData).map((tab) => (
    //                 <button
    //                     key={tab}
    //                     onClick={() => toggleTab(tab)}
    //                     className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md focus:outline-none hover:cursor-pointer ${openTab === tab
    //                         ? 'bg-blue-700 text-white'
    //                         : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
    //                         }`}
    //                 >
    //                     {tab}
    //                 </button>
    //             ))}
    //         </div>

    //         <AnimatePresence mode="wait">
    //             {openTab && (
    //                 <motion.div
    //                     key={openTab}
    //                     initial={{ opacity: 0, y: 20 }}
    //                     animate={{ opacity: 1, y: 0 }}
    //                     exit={{ opacity: 0, y: 20 }}
    //                     transition={{ duration: 0.4 }}
    //                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    //                 >
    //                     {cardData[openTab].map((card, idx) => (
    //                         <motion.div
    //                             key={idx}
    //                             className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition-all duration-300"
    //                             whileHover={{ scale: 1.03 }}
    //                         >
    //                             <img
    //                                 src={card.image}
    //                                 alt={card.title}
    //                                 className="w-full h-48 object-cover"
    //                             />
    //                             <div className="p-5 space-y-3 text-center">
    //                                 <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
    //                             </div>
    //                         </motion.div>
    //                     ))}
    //                 </motion.div>
    //             )}
    //         </AnimatePresence>
    //     </div>
    // );
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 relative">
            <h2 className="text-3xl font-bold text-gray-800 text-center pb-5">Our Services</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                {Object.keys(cardData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => toggleTab(tab)}
                        className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md focus:outline-none hover:cursor-pointer ${openTab === tab
                            ? 'bg-blue-700 text-white'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {openTab && (
                    <motion.div
                        key={openTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {cardData[openTab].map((card, idx) => (
                            <motion.div
                                key={idx}
                                onClick={() => setSelectedCard(card.title)} // 👈 set selected title
                                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.03] transition-all duration-300"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5 text-center space-y-3">
                                    <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 👇 Modal Popup */}
            <AnimatePresence>
                {selectedCard && moduleDetails[selectedCard] && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl max-w-2xl p-6 relative"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4">{moduleDetails[selectedCard].title}</h2>
                            <p className="mb-4 text-gray-700">{moduleDetails[selectedCard].description}</p>
                            <h3 className="font-semibold mb-2">Key Takeaways:</h3>
                            <ul className="list-disc list-inside mb-4 text-gray-600">
                                {moduleDetails[selectedCard].takeaways.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            <p className="font-semibold">
                                Ideal For: <span className="font-normal">{moduleDetails[selectedCard].idealFor}</span>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownCards;
