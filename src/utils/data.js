export const SKILLS = [
    {
        title: "Web Development",
        icon: require("../assets/skills/fontend.jpg"), // Correct way to load image
        skills:[
            {skill:"HTML",rercentage:"80%"},
            {skill:"Css",rercentage:"80%"},
            {skill:"JavaScript",rercentage:"80%"},
            {skill:"React",rercentage:"80%"},
            {skill:"Spring MVC",rercentage:"80%"},
            
        ], 
    },
    {
        title: "Test Automation",
        icon: require("../assets/skills/back.jpg"), // Correct way to load image
        skills:[
            {skill:"Selenium",rercentage:"80%"},
            {skill:"Cucumber",rercentage:"80%"},
            
        ],
    },
    {
        title: "Tools",
        icon: require("../assets/skills/1321665.png"), // Correct way to load image
        skills:[
            {skill:"Github",rercentage:"80%"},
            {skill:"Visual Studio Code",rercentage:"80%"},
            {skill:"Eclipse",rercentage:"80%"},
            {skill:"IntelliJ IDEA",rercentage:"80%"},
            {skill:"JMeter",rercentage:"80%"},
            {skill:"Postman",rercentage:"80%"},
            {skill:"Swagger",rercentage:"80%"},
        ],
    },
    {
        title: "Database",
        icon: require("../assets/skills/soft.jpg"), // Correct way to load image
        skills:[
            {skill:"MSSQL",rercentage:"80%"},
            {skill:" MySQL",rercentage:"80%"},
            {skill:"Oracle",rercentage:"80%"},
            
        ],
    }

];


export const WORK_EXPERIENCE = [
    {
        title: "Software Engineer Intern - CEB IT Department",
        date: "March - Oct 2024",
        image:require( "../assets/workExprience/ceb1.png"),
        responsibilities: [
           "Spring MVC & Java Development - Built and managed backend logic." ,"JPQL & SQL Queries - Enhanced search queries and data retrieval.",
           "Data Visualization with Chart.js - Created interactive dashboards.","Jaspersoft Studio Reports - Developed detailed business reports.",
           "Oracle Databases -  Worked with live production data and optimized queries.","Frontend UI Enhancements - Improved navigation and UI components."
           
        ]
    }
];

