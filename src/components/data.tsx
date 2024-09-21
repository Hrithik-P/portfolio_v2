type About = {
  [key: string]: {
    id: number;
    className: string;
    isBlinking?: boolean;
    code: {
      text: string;
      className: string;
    }[];
  };
};
export const projects = [
  {
    id: 1,
    title: "Class Report",
    des: "Developed a comprehensive school management application using React.js and Laravel. The app features separate modules for parents and teachers, allowing for efficient communication and management of student data. Key functionalities include online testing, attendance tracking, leave management, appointment scheduling, student medical records, and homework/assignment management. JWT authentication ensures secure access for all users.",
    img: "/grosav-ai.jpg",
    techIcons: [
      "/react-color.svg",
      "/typescript-color.svg",
      "/tailwindcss-color.svg",
    ],
    link: "https://classreport.in/",
  },
  {
    id: 2,
    title: "Grosav",
    des: "This is a new project",
    img: "/grosav-ai.jpg",
    techIcons: [
      "/react-color.svg",
      "/typescript-color.svg",
      "/tailwindcss-color.svg",
    ],
    link: "www.grosavo.com",
  },
  {
    id: 3,
    title: "Grosav",
    des: "This is a new project",
    img: "/grosav-ai.jpg",
    techIcons: [
      "/react-color.svg",
      "/typescript-color.svg",
      "/tailwindcss-color.svg",
    ],
    link: "www.grosavo.com",
  },
  {
    id: 4,
    title: "Grosav",
    des: "This is a new project",
    img: "/grosav-ai.jpg",
    techIcons: [
      "/react-color.svg",
      "/typescript-color.svg",
      "/tailwindcss-color.svg",
    ],
    link: "www.grosavo.com",
  },
  {
    id: 5,
    title: "Grosav",
    des: "This is a new project",
    img: "/grosav-ai.jpg",
    techIcons: [
      "/react-color.svg",
      "/typescript-color.svg",
      "/tailwindcss-color.svg",
    ],
    link: "www.grosavo.com",
  },
  {
    id: 6,
    title: "Grosav",
    des: "This is a new project",
    img: "/grosav-ai.jpg",
    techIcons: [
      "/react-color.svg",
      "/typescript-color.svg",
      "/tailwindcss-color.svg",
    ],
    link: "www.grosavo.com",
  },
];

export const about: About = {
  line_1: {
    id: 1,
    className: "",
    isBlinking: true,
    code: [
      {
        text: "const",
        className: "text-pink-500 mr-2",
      },
      {
        text: "coder",
        className: "text-white mr-2",
      },
      {
        text: "=",
        className: "text-pink-500 mr-2",
      },
      {
        text: "{",
        className: "text-gray-400",
      },
    ],
  },
  line_2: {
    id: 2,
    className: "",
    code: [
      {
        text: "name:",
        className: "text-white ml-8 mr-2",
      },
      {
        text: "'",
        className: "text-gray-400",
      },
      {
        text: "Hrithik",
        className: "text-amber-300",
      },
      {
        text: "',",
        className: "text-gray-400",
      },
    ],
  },
  line_3: {
    id: 3,
    className: "",
    code: [
      {
        text: "dayOfBirthTimestamp:",
        className: "text-white ml-8 mr-2",
      },
      {
        text: `${new Date(2001, 8, 19).getTime()}`,
        className: "text-amber-300",
      },
      {
        text: ",",
        className: "text-gray-400",
      },
    ],
  },
  line_4: {
    id: 4,
    className: "",
    code: [
      {
        text: "linkedIn:",
        className: "text-white ml-8 mr-2",
      },
      {
        text: "'",
        className: "text-gray-400",
      },
      {
        text: "https://www.linkedin.com/in/hrithik-p/",
        className: "text-amber-300",
      },
      {
        text: "',",
        className: "text-gray-400",
      },
    ],
  },
  line_5: {
    id: 5,
    className: "",
    code: [
      {
        text: "}",
        className: "text-gray-400",
      },
    ],
  },
};
