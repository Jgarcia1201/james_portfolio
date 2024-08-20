

const workExp = [
    {
        company: "Echo360", 
        title: "Software Engineer",
        startDate: "September 2022",
        endDate: "Current",
        bulletPoints: [
            "Improved data processing for EchoVideo's in-browser video capture software, by integrating a  segmentation model that reduced GPU utilization by 30\% while enabling background swapping and blurring",
            "Designed and developed a heavily used file archiving system  with scheduled removal of archived files based on user-defined intervals.",
            "Wrote UI & backend logic used to integrate Zoom into EchoVideo, allowing users to automatically add Zoom recordings into their library.",
            "Added cookieless authentication to media player to be used by publicly available links and LMS platforms such as Canvas and Blackboard.",
            "Participated in customer meetings with users accessing EchoVideo via Blackboard and Canvas to gather and analyze requirements."
        ]
    },
    {
        company: "JGETX Food Distribution and Restaurant Equipment",
        title: "Systems Engineer",
        startDate: "September 2017",
        endDate: "July 2022",
        bulletPoints: [
            "Utilized Java and ElectronJS to design and implement an inventory management system for tracking small parts used in restaurant repairs and setups, enhancing operational efficiency.",
            "Managed end-to-end technical setups for restaurants, encompassing software installation, onboarding clients onto delivery applications, and website development using ReactJS, ensuring seamless integration of digital solutions to enhance restaurant operations and customer experience.",
            "Delivered continued technical support to clients, proficiently resolving both hardware and software issues, including troubleshooting Broaster Pressure fryers."
        ]
    }
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