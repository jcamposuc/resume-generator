import { PreviewTemplate1 } from "./components/PreviewTemplate1";
import PreviewTemplate2 from "./components/PreviewTemplate2";

export const PIXELS_LETTER_SIZE = "1056px";
export const PDF_OPTIONS = {
    filename: 'my-resume.pdf',
    margin: 0,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', },
};

export const DEFAULT_SKILLS = [
    "Web Design",
    "Design Thinking",
    "Wireframe Creation",
    "Front End Coding",
    "Problem Solving",
    "Computer Literacy",
    "Project Management Tools",
    "Strong Communication",
];

export const DEFAULT_LANGUAGES = ["Spanish / Native", "English / Intermediate"];

export const DEFAULT_EXPERIENCES = [
    {
        position: "Applications Developer",
        company: "Really Great Company",
        date: "2016 - Present",
        responsabilities: [
            "Databse administration and website design",
            "Built the logic for a streamlined ad-serving platform that scaled",
            "Educational institutions and online classroom management",
        ],
    }, {
        position: "Web Content Manager",
        company: "Really Great Company",
        date: "2014 - 2016",
        responsabilities: [
            "Databse administration and website design",
            "Built the logic for a streamlined ad-serving platform that scaled",
            "Educational institutions and online classroom management",
        ],
    }, {
        position: "Analysis Content",
        company: "Really Great Company",
        date: "2010 - 2014",
        responsabilities: [
            "Databse administration and website design",
            "Built the logic for a streamlined ad-serving platform that scaled",
            "Educational institutions and online classroom management",
        ],
    }
];

export const DEFAULT_EDUCATION = [
    {
        position: "secondary school",
        company: "Really Great High School",
        date: "2010 - 2014",
    }, {
        position: "bachelor of technology",
        company: "Really Great University",
        date: "2014 - 2016",
    },
]

export const previewTemplates = {
    "tp-1": PreviewTemplate1,
    "tp-2": PreviewTemplate2,
};

export const THEME_COLORS = {
    "tp-1": {
        header_bg: "#f5f5f4", // bg-stone-100
        header_text_color: "#000000", // black
    },
    "tp-2": {
        header_bg: "#0e7490", // bg-cyan-700
        header_text_color: "#f3f4f6", // text-gray-100,
        sidebar_bg: "#083344", // bg-cyan-950,
        sidebar_text_color: "#d1d5db", // text-gray-300
        icon_color: "#e5e7eb", // text-gray-200
        body_bg: "#f1f5f9", // bg-slate-100
    },
}