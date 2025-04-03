

const workExp = [
    {
        company: "Echo360", 
        title: "Software Engineer II",
        startDate: "September 2022",
        endDate: "Current",
        bulletPoints: [
            "Led a team of 4 engineers to architect a Media Details user interface and microservice using React, Scala, and Python, effectively addressing multiple customer requirements and enhancing user experience.",
            "Spearheaded the migration from a monolithic architecture to a microservices-based system, improving deployment speed and system maintainability.",
            "Mentored and onboarded junior developers, improving team productivity and accelerating ramp-up time.",
            "Led high-priority feature development under tight deadlines, directly contributing to $4M in revenue during a major sales conference.",
            "Architected a robust file archiving system with React, Scala, and Python, automating redundant file removal and significantly cutting DynamoDB storage costs.",
            "Acted as the primary contact between development and other departments, streamlining client issue resolution and improving response times.",
            "Built a comprehensive test suite for EchoVideo's media player using Jest and React Testing Library, achieving a 70% reduction in media player outages and enhancing platform reliability."
        ]
    },
    {
        company: "Echo360", 
        title: "Software Engineer",
        startDate: "September 2022",
        endDate: "January 2023",
        bulletPoints: [
            "Developed a distributed caching solution with Redis and Java for JWT token management, ensuring secure LMS integrations with Canvas and Blackboard.",
            "Enhanced in-browser video capture software by integrating a segmentation model, optimizing GPU utilization to below 25%, and enabling virtual backgrounds for end users.",
            "Refactored legacy Scala services, improving maintainability, reducing technical debt, and optimizing backend performance.",
            "Improved front-end performance for React applications, optimizing rendering efficiency and reducing page load times.",
            "Developed reusable UI components in TypeScript, improving development speed and maintaining design consistency across applications.",
            "Collaborated with UX designers to enhance accessibility and usability across Echo360's suite of products, ensuring compliance with WCAG standards."
        ]
    },
]

const eduExp = [
    { 
        degree: "Bachelors of Science: Computer Science",
        school: "Western Governor's University",
        graduationDate: "July 2022"
    }
]

export const resumeData = {
    workExp: workExp,
    education: eduExp
}