export interface EducationItem {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description?: string;
  degree: string;
  grade?: string;
  achievements?: string[];
  image?: string;
  url?: string;
}

export const EDUCATION_META: EducationItem[] = [
  {
    id: 1,
    title: "Diploma in Computer Science",
    institution: "Smt. B. Seeta Polytechnic",
    duration: "2020 - 2023",
    description: "Diploma program covering core computer science subjects and practical skills.",
    degree: "Diploma",
    grade: "GPA: 78.31%",
    achievements: [],
  image: "/education/seeta-polytechnic-logo.jpg",
    url: "https://seethapoly.edu.in/",
  },{
    id: 2,
    title: "Bachelors of Technology - Computer Science and Design",
    institution: "SRKR Engineering College",
    duration: "2023 - 2026",
    description: "Undergraduate program focused on computer science, design thinking and software development.",
    degree: "B.Tech",
    grade: "GPA: 8.24",
    achievements: [],
  image: "/education/srkr.jpeg",
    url: "https://www.srkrec.edu.in/",
  },
  
];
