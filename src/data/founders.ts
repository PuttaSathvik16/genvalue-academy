import sathvikPortrait from "@/assets/founders/sathvik-putta.png";

export interface Degree {
  level: string;
  field: string;
  institution: string;
  country: string;
  year?: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  title: string;
  photo: string;
  bio: string[];
  degrees: Degree[];
  expertise: string[];
  linkedin: string;
  github: string;
  email: string;
}

export const founders: Founder[] = [
  {
    id: "sathvik-putta",
    name: "Sathvik Putta",
    role: "Founder & Lead Instructor",
    title: "AI Tools Educator · Course Architect",
    photo: sathvikPortrait.src,
    bio: [
      "Sathvik Putta is the founder of GenValue Academy and lead instructor of the AI Tools Mastery program. With a deep academic foundation in Computer Science and Artificial Intelligence from the United States, he bridges the gap between cutting-edge AI research and practical real-world application.",
      "His teaching philosophy is simple: AI fluency is a skill, not a talent. Anyone who learns the right frameworks can master any AI tool in their domain.",
      "Sathvik designed the 12-week AI Tools Mastery curriculum from the ground up — built on the tools he uses professionally every day.",
    ],
    degrees: [
      {
        level: "Master of Science",
        field: "Data Science / Artificial Intelligence",
        institution: "University — USA",
        country: "United States",
      },
      {
        level: "Bachelor of Engineering",
        field: "Computer Science & Information Technology",
        institution: "University — India",
        country: "India",
      },
    ],
    expertise: [
      "Prompt Engineering",
      "AI Workflow Design",
      "Tool Selection Frameworks",
      "Course Architecture",
      "Data Science",
      "Machine Learning",
    ],
    linkedin: "https://www.linkedin.com/in/sathvik-putta-7612611a4/",
    github: "https://github.com/PuttaSathvik16",
    email: "genvalue.academy@gmail.com",
  },
  {
    id: "sujith-putta",
    name: "Sujith Putta",
    role: "Co-Founder",
    title: "Operations & Strategy",
    photo: "/images/founders/sujith-putta.png",
    bio: [
      "Sujith Putta is co-founder of GenValue Academy, responsible for program strategy, operations, and growth. His engineering background gives him a first-principles approach to building systems — whether in code or in business.",
      "Sujith brings the operational discipline that turns a great course idea into a scalable educational product.",
    ],
    degrees: [
      {
        level: "Bachelor of Technology",
        field: "Computer Science & Information Technology",
        institution: "University — India",
        country: "India",
      },
    ],
    expertise: [
      "Program Strategy",
      "Operations",
      "Growth & Partnerships",
      "Tech Infrastructure",
      "AI Tools",
    ],
    linkedin: "https://www.linkedin.com/in/sujith-putta-13257a322/",
    github: "https://github.com/sujithputta02",
    email: "genvalue.academy@gmail.com",
  },
];
