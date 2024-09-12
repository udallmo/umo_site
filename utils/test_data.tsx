export const COMPANYLIST = [
  "Varicent",
  "Wise Systems",
  "RouteThis",
  "Co-operators",
  "Hubdoc",
  "University of Waterloo",
  "Coulters Software",
];

export type CompanyInput = {
  id: number,
  company: string,
  role: string,
  year: string,
  stack: string[],
  description: string,
  link: string,
}

// TODO: Add Maple Description
export const COMPANYDATA: CompanyInput[] = [

  {
    id: 0,
    company: "Maple",
    role: "Software Engineer",
    year: "2023-2024",
    stack: ["React", "SQL", "NestJS", "React", "TypeScript", "Postgres"],
    link: "https://maple.com/",
    description: 
      "Collaborated with a team of engineers to develop a workforce management platform, leading the leave banks project by managing system design and stakeholder presentations. Additionally, I implemented CRON-based scheduling, integrated payroll services, and contributed to product features, resulting in a 40% increase in customer inquiries"
  },
  {
    id: 1,
    company: "Varicent",
    role: "Software Developer",
    year: "2021-2023",
    stack: ["React", "SQL", "C#", ".Net", "TypeScript", "AWS"],
    link: "https://www.varicent.com/",
    description: 
      "Architected and deployed a write-back service for 50+ enterprise clients to update multiple databases concurrently and integrated multi-expression handling into an internal library used across products. I also collaborated with a team of 8 to design custom user-defined database models and developed REST APIs and UIs to streamline data management and ingestion"
  },
  {
    id: 2,
    company: "Wise Systems",
    role: "Software Developer, Intern",
    year: "2021",
    link: "https://www.wisesystems.com/",
    stack: ["SQL", "Scala", "Java", "JavaScript", "Python"],
    description: 
      "Led the development of a real-time delivery optimization feature with a team of 10+ engineers and improved data extraction by 24% using JS format libraries and standardized preprocessed data. Additionally, I mitigated 20% of UX bugs by creating error handlers for Polymer type compatibility issues.",
  },
  {
    id: 3,
    company: "RouteThis",
    role: "Software Developer, Intern",
    year: "2021",
    link: "https://www.routethis.com/",
    stack: ["Java", "React", "Node", "MongoDB", "Firebase", "iOS", "Android"],
    description: 
      "Created a dashboard using Webpacks to provide technical recommendations for network issues and developed a congestion identifier with GCP and data mining for predictive insights. By implementing integrated remote WebSocket access in a mobile app, I reduced customer call deflections by 47%",
  },
  {
    id: 4,
    company: "Co-operators",
    role: "Mobile Developer, Intern",
    year: "2020",
    link: "https://www.cooperators.ca/en/",
    stack: ["Angular", "JavaScript", "Ionic"],
    description:
      "Developed a hybrid app for 10,000+ users to view policy details and make payments, collaborating with UI/UX designers to create highly praised designs. I also built infrastructure to handle API data, eliminating redundancies, and developed TypeScript classes for improved functionality",
  },
  {
    id: 5,
    company: "Hubdoc (Xero)",
    role: "Software Developer, Intern",
    link: "https://www.xero.com/ca/",
    year: "2019",
    stack: ["NodeJS", "JavaScript", "Postgres", "D3"],
    description:
      "Managed 15+ automated microservices for financial data collection and served 10,000+ users, deploying D3 data visualizers to provide 12+ sales engineers with enhanced analytics tools. I increased the automated data collection success rate from 40% to 70%, the highest since 2016",
  },
  {
    id: 6,
    company: "University of Waterloo",
    role: "Software Developer, Intern",
    year: "2019",
    link: "https://uwaterloo.ca/",
    stack: ["PHP", "JavaScript", "SQL", "Drupal"],
    description: 
      "Created a dynamic algorithm for users to update website content, improved data form modules with security measures and new front-end features, and enhanced keyword search functionality using MySQL to refine search results",
  },
  {
    id: 7,
    company: "Coulters Software",
    year: "2018",
    role: "Software Developer, Intern",
    link: "https://www.coulters.ca/",
    stack: ["JavaScript"],
    description: 
      "Developed three websites with Django CMS for efficient content management, created automated test cases using Selenium IDE to reduce debugging time, and decreased loading times by 15% by optimizing Ajax calls for real-time data from traffic cameras",
  },
];

export const PROJECTLIST = [
  "Sorting Algorithm Visualizers",
  "Video Barcode Converter",
  "Spotify ETL",
  "China Kitchen Eatery",
];

export type ProjectInput = {
  id: number,
  name: string,
  desc: string,
  link?: string, 
  git?: string,
  image: string,
  stack: string[]
}

export const PROJECTDATA: ProjectInput[] = [
  {
    id: 0,
    name: "Sorting Algorithm Visualizers",
    desc: "Sorting Algorithm Visualizer is a react site for visualizing basic sorting algorithms",
    git: "https://github.com/udallmo/sorting-algo-visualizer",
    image: "/images/sorting.png",
    stack: [
      "TypeScript",
      "JavaScript",
      "TailwindCSS"
    ]
  },
  {
    id: 1,
    name: "Video Barcode Converter",
    desc: "Script that determines the dominant color for each frame of a video and visualize the colors in a color wheel or color bar",
    link: "https://www.etsy.com/ca/listing/1416775752/custom-video-barcodes",
    git: "https://github.com/udallmo/video_barcode_converter",
    image: "/images/movie.png",
    stack: [
      "Python",
      "OpenCV",
    ]
  },
  {
    id: 2,
    name: "Spotify ETL",
    desc: "Spotify ETL pipeline for top hit music",
    git: "https://github.com/udallmo/spotify-ETL",
    image: "/images/etl.png",
    stack: [
      "Python",
      "AWS"
    ]
  },
  {
    id: 3,
    name: "China Kitchen Eatery ",
    desc: "Resturant site for local chinese resturant",
    link: "https://china-kitchen-web.vercel.app/",
    git: "https://github.com/udallmo/china_kitchen_web",
    image: "/images/china.PNG",
    stack: [
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
];
