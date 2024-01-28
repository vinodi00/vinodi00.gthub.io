import { lisa,image,App,BL } from "../assets/images";
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
    tailwindcss,
    
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
        title: "App Development",
        company_name: "Travel App",
        icon: App,
        iconBg: "#a2d2ff",
        date: "2023 present",
        points: ["Explore the enchanting beauty of Sri Lanka with the Travel Ceylonapp. Immerse yourself in the rich culture, breathtaking landscapes, and vibrant events that this tropical paradise has to offer. Whether you're a local looking for new adventures or a traveler planning your dream trip, this app is your ultimate companion)."
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
    },
    {
        title: "Illustrator",
        company_name: "",
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
        title: "Blender",
        company_name: "Robo",
        icon: BL,
        iconBg: "#a2d2ff",
        date: "2023 octomber 2",
        points: ["Blender is a powerful and versatile 3D modeling and animation software that offers a robust set of tools for creating a wide range of projects, including robotic designs. To begin creating a robot using Blender, start by familiarizing yourself with the user interface, accessible panels, and navigation controls. Utilize the application's mesh modeling tools to shape the individual components of your robot, ensuring precision and attention to detail. Blender's intuitive sculpting features can be employed for refining organic shapes or adding intricate details to your robot's structure.",
        "advantage of the software's rigging capabilities to create a skeletal structure for your robot, allowing for realistic movement and animation. Furthermore, Blender's animation and keyframing tools enable you to bring your robotic creation to life by defining movements and sequences.",
        "With its comprehensive rendering options, you can produce high-quality images and animations of your robotic masterpiece. Whether you are a beginner or an advanced user, Blender's extensive community and documentation provide valuable resources to enhance your robotic design skills.",

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
        link: 'https://github.com/vinodi00/Cleaning-Services.git',
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
        description: 'The Digital Image Processing App is a Python-based application designed to enhance and manipulate digital images. The app leverages the power of OpenCV and NumPy libraries for image processing operations, providing users with the ability to modify grayscale tones and apply denoising techniques.',
        link: 'https://github.com/vinodi00/DIP.git',
    },
    {
        iconUrl: motion,
        theme: 'btn-back-yellow',
        name: 'illustrator',
        description: 'I enjoy illustrating and have a particular passion for drawing various images, especially focusing on cartoon and anime faces. Additionally, I occasionally design prints for T-shirts, incorporating all of my creative endeavors into this artistic process.',
        link: 'https://github.com/vinodi00/Illustrator.git',
    }
];
