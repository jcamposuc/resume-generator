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