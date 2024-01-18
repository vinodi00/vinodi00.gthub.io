import { lisa,image } from "../assets/images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    summiz,
    tailwindcss
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
  {
        title: "Illustrator",
        company_name: "lisa",
        icon: lisa,
        iconBg: "#a2d2ff",
        date: "2024 January 10",
        points: ["Crafting and enhancing captivating illustrations with a focus on Adobe Illustrator and complementary design tools.",
        "Engaging in collaborative projects alongside cross-functional teams, including designers, art directors, and other creative professionals, to produce visually stunning and cohesive artistic assets.",
        "Implementing design principles for scalable and visually appealing illustrations, ensuring compatibility across various platforms and applications.",
        "Participating in creative critiques and offering constructive feedback during collaborative sessions to elevate the quality and impact of artistic work."
        ],
    },
    {
        title: "Image Processing",
        company_name: "DIP Project",
        icon: image,
        iconBg: "#a2d2ff",
        date: "2023 Octomber 27",
        points: ["Expertly navigating the realm of digital image processing with a specialized focus on denoising using autoencoders, ember recognition, and tonal edge detection, S&B (Structure and Brightness)."
        ],
    }
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
        link: 'https://github.com/vinodi00',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vinodanee/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'YAMINI CLEANING SERVICE MANAGEMENT SYSTEM',
        description: 'This is a MERN-based web application for managing YAMINI Cleaning service. Consist of Customer management, Employee management, Payroll and Payment management, Quotation Management and many more.',
        link: 'https://github.com/vinodi00/YAMINI-CLEANING-SERVICE-MANAGEMENT-SYSTEM.git',
    },
    
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'TRAVEL CEYLON MOBILE APPLICATION',
        description: 'This mobile application is developed for both local and foreign tourists. Through this application, users can easily find their tourist destinations and accommodations in luxurious hotels in Sri Lanka.',
        link: 'https://github.com/vinodi00/MAD.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'DIGITAL IMAGE PROCESSING',
        description: '',
        link: 'https://github.com/vinodi00/DIP.git',
    },
    {
        iconUrl: motion,
        theme: 'btn-back-yellow',
        name: 'illustrator',
        description: '',
        link: 'https://github.com/vinodi00/Illustrator.git',
    }
];