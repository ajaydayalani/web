import { vodafone, sdhs } from "../assets/images";
import {
    arrow,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nodejs,
    react,
    tailwindcss,
    typescript,
    java,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Full-Stack Developer",
        company_name: "Vodafone Group UK",
        icon: vodafone,
        iconBg: "#fccbe1",
        date: "Sep 2022 - Present",
        points: [
            "Led end-to-end the design, development, deployment of a Generative AI Education Platform in React.js and Python that creates customized course material for peers, resulting in potential annual vendor cost savings of £1 million.", 
            "Designed and implemented an automated minute-taking bot in Python and JavaScript using voice recognition technology within a machine learning framework for internal use to allow team members to redistribute attention to core activities.", 
            "Developed a RESTful API using Golang and AWS to facilitate interoperability between different systems.", 
            "Led an initiative to improve code documentation across the entire team to improve readability and maintainability of legacy code repositories."
        ],
    },
    {
        title: "Project Coordinator",
        company_name: "Vodafone Group Uk",
        icon: vodafone,
        iconBg: "#5bc3bc",
        date: "Jul 2020 - Aug2021",
        points: [
            "Developed and implemented Power BI dashboards to monitor B2B project progress in telecommunication solutions, enabling multiple teams to track circuit deliveries, analyze performance metrics, and identify potential risks efficiently, thus reducing project slippage.", 
            "Used VBA to create an automated process to improve the efficiency of generating customer risk reports, and as a result saving 10 minutes per day.", 
            "Developed React components that have been implemented in front end of internal websites."
        ],
    },
    {
        title: "Founder & Coordinator",
        company_name: "Java Outreach PRogram",
        icon: sdhs,
        iconBg: "#b7e4c7",
        date: "Sep 2019 - Dec 2019",
        points: [
            "Founded an initiative that brought a two week-long crash course in Java to a class of 20 teens with a 95% pass rate.", 
            "Instructed daily classes of 20 students, covering the basics of Java, object-oriented programming, and data structures.", 
            "Created and developed comprehensive lesson plans to ensure effective learning and understanding of key programming concepts."
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ajaydayalani',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ajay-dayalani',
    }
];

export const projects = [
    {
        iconUrl: react,
        theme: 'btn-back-green',
        name: 'Karma',
        description: 'Developed a MVP Web App that allows users to volunteer to help their neighbors.',
        link: "https://github.com/ajaydayalani/Thesis",
    },
    {
        iconUrl: java,
        theme: 'btn-back-blue',
        name: 'Ethirium Options Simulator',
        description: 'Created a full-stack simulator of smart contracts as option trades on the block-chain',
        link: "https://github.com/ajaydayalani/Thesis",
    },
  
  
 
];