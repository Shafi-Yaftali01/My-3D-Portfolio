import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  vuejs,
  csharp,
  flutter,
  python,
  java,
  sql,
  git,
  nextjs,
  threejs,
  daly,
  iCode,
  secure,
  face,
  robo,
  landing,
  award,
  award1,
  award2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Sql Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Web Developing Boost & IT Solutions",
    company_name:
      "Daly Computers, Inc",
    icon: daly,
    iconBg: "#383E56",
    date: "August 2023 – Present",
    points: [
      "Improved hardware and software issue resolution by 25% for PWCPS schools, tackling issues like slow-loading computers.",
      "Significantly boosted system performance by assisting senior technicians in upgrades and installations.",
      "• Enhanced communication, problem-solving, and analytical skills, resulting in improved team collaboration and project delivery.",
    ],
  },
  {
    title: "Software Developer Instructor",
    company_name: "iCode",
    icon: iCode,
    iconBg: "#E6DEDD",
    date: "Jun 2022 – August",
    points: [
      "Instructed frontend technologies: Taught Python libraries for drone programming and instructed HTML, CSS, and JavaScript for webpage development.",
      "Developed and updated courses, integrating cutting-edge programming and technology for practical learning.",
      "Collaborated with team to improve curriculum by 30%, creating an optimal learning environment.",
    ],
  },
  {
    title: "Web Developer & CyberSecurity",
    company_name: "Software Engineering Apprenticeship",
    icon: secure,
    iconBg: "#E6DEDD",
    date: "October. 2021 – March. 2022",
    points: [
      "Developed and implemented CyberSecurity and Web programs for children’s online safety.",
      "Collaborated with professionals in web security, network security, ethical hacking, and cybersecurity risk management, achieving 20% success.",
      "Strengthened communication, problem-solving, and analytical skills."
    ],
  },
];

const awards = [
  {
    award: award2,
    name: "All Star Award",
    company: "MSK",
    image: secure,
    height: "full",
    date: "Jun 2022",
  },
  {
    award: award1,
    name: "MSK Award",
    company: "MSK",
    image: secure,
    height: "full",
    date: "Feb 2022",
  },
  {
    award: award,
    name: "Star of the Final Award",
    company: "MSK",
    image: secure,
    height: "1/2",
    date: "Jan 2022",
  }
];

const projects = [
  {
    name: "Face Scanner",
    description:
      "An image recognition app is developed using React.js, Node.js, PostgreSQL, and the Clarifai API deployed on Heroku.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent",
      },
      {
        name: "html",
        color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
      },
      {
        name: "git",
        color: "bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent",
      },
    ],
    image: face,
    source_code_link: "https://github.com/Shafi-Yaftali01/Face-Scanner-App",
  },
  {
    name: "TechBuddies",
    description:
      "Created an interactive front-end application project using Javascript, React.js, Redux. The application uses an API.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: robo,
    source_code_link: "https://github.com/Shafi-Yaftali01/TechBuddies",
  },
  {
    name: "Landing Web Page",
    description:
      "landing webpage using HTML, CSS, and Javascript for a prospective startup cosmetic company that focuses on Ayurvedic skincare.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/Shafi-Yaftali01/Landing-Web-Page",
  }
];

export { services, technologies, experiences, awards, projects };
