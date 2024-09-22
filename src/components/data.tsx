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
      "/laravel-color.svg",
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
        text: "Hrithik P",
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
        text: "workExperience:",
        className: "text-green-400 ml-8 mr-2",
      },
      {
        text: "function",
        className: "text-orange-400",
      },
      {
        text: "() {",
        className: "text-gray-400",
      },
    ],
  },
  line_6: {
    id: 6,
    className: "",
    code: [
      {
        text: "return",
        className: "text-green-400 ml-16 mr-2",
      },
      {
        text: "([",
        className: "text-gray-400",
      },
    ],
  },
  line_7: {
    id: 7,
    className: "",
    code: [
      {
        text: "{",
        className: "text-gray-400 ml-24 mr-2",
      },
      {
        text: "'2023-present'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: ":",
        className: "text-gray-400 mr-2",
      },
      {
        text: "'Software Developer at Quintet Solutions Pvt. Ltd.'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: "},",
        className: "text-gray-400",
      },
    ],
  },
  line_8: {
    id: 8,
    className: "",
    code: [
      {
        text: "{",
        className: "text-gray-400 ml-24 mr-2",
      },
      {
        text: "'2022-2023'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: ":",
        className: "text-gray-400 mr-2",
      },
      {
        text: "'Junior Software Developer at Howin Cloud Pvt. Ltd.'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: "},",
        className: "text-gray-400",
      },
    ],
  },
  line_9: {
    id: 9,
    className: "",
    code: [
      {
        text: "{",
        className: "text-gray-400 ml-24 mr-2",
      },
      {
        text: "'2022-2022'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: ":",
        className: "text-gray-400 mr-2",
      },
      {
        text: "'Inter Developer at Howin Cloud Pvt. Ltd.'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: "},",
        className: "text-gray-400",
      },
    ],
  },
  line_10: {
    id: 10,
    className: "",
    code: [
      {
        text: "])",
        className: "text-gray-400 ml-16",
      },
    ],
  },
  line_11: {
    id: 11,
    className: "",
    code: [
      {
        text: "},",
        className: "text-gray-400 ml-8",
      },
    ],
  },
  line_12: {
    id: 12,
    className: "",
    code: [
      {
        text: "education:",
        className: "text-green-400 ml-8 mr-2",
      },
      {
        text: "function",
        className: "text-orange-400",
      },
      {
        text: "() {",
        className: "text-gray-400",
      },
    ],
  },
  line_13: {
    id: 13,
    className: "",
    code: [
      {
        text: "return",
        className: "text-green-400 ml-16 mr-2",
      },
      {
        text: "([",
        className: "text-gray-400",
      },
    ],
  },
  line_14: {
    id: 14,
    className: "",
    code: [
      {
        text: "{",
        className: "text-gray-400 ml-24 mr-2",
      },
      {
        text: "'2019-2022'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: ":",
        className: "text-gray-400 mr-2",
      },
      {
        text: "'St Mary's College - Bachelor of computer application'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: "},",
        className: "text-gray-400",
      },
    ],
  },
  line_15: {
    id: 15,
    className: "",
    code: [
      {
        text: "{",
        className: "text-gray-400 ml-24 mr-2",
      },
      {
        text: "'2017-2019'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: ":",
        className: "text-gray-400 mr-2",
      },
      {
        text: "'GMHSS - Computer Science'",
        className: "text-cyan-400 mr-2",
      },
      {
        text: "},",
        className: "text-gray-400",
      },
    ],
  },
  line_17: {
    id: 17,
    className: "",
    code: [
      {
        text: "])",
        className: "text-gray-400 ml-16",
      },
    ],
  },
  line_18: {
    id: 18,
    className: "",
    code: [
      {
        text: "},",
        className: "text-gray-400 ml-8",
      },
    ],
  },
  line_25: {
    id: 25,
    className: "",
    code: [
      {
        text: "}",
        className: "text-gray-400",
      },
    ],
  },
};
