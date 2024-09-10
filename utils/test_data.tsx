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
  description: string
}

export const COMPANYDATA: CompanyInput[] = [

  {
    id: 0,
    company: "Maple",
    role: "Software Engineer",
    year: "2023-2024",
    stack: ["React", "SQL", "NestJS", "React", "TypeScript", "Postgres"],
    description: 
      "Architected and deployed a write-back service to enable 50+ enterprise clients to write to and update multiple databases concurrently.  Enabled support for multiple expressions within an internal library used in 2+ products via integration of multi-expression handling. Collaborated in a team of 8 in the development and design of custom user-defined database models Created REST APIs and UIs with forms to streamline data handling, simplifying the process of data management and ingestion",
  },
  {
    id: 1,
    company: "Varicent",
    role: "Software Developer",
    year: "2021-2023",
    stack: ["React", "SQL", "C#", ".Net", "TypeScript", "AWS"],
    description: 
      "Architected and deployed a write-back service to enable 50+ enterprise clients to write to and update multiple databases concurrently.  Enabled support for multiple expressions within an internal library used in 2+ products via integration of multi-expression handling. Collaborated in a team of 8 in the development and design of custom user-defined database models Created REST APIs and UIs with forms to streamline data handling, simplifying the process of data management and ingestion",
  },
  {
    id: 2,
    company: "Wise Systems",
    role: "Software Developer, Intern",
    year: "2021",
    stack: ["SQL", "Scala", "Java", "JavaScript", "Python"],
    description: 
      "Led the development of a real-time delivery optimization feature, working a team of over 10 product engineers. Improved data extraction by 24% through the utilization of JS format libraries and the standardization of preprocessed data. Mitigated 20% of user experience bugs through the creation of error handlers addressing Polymer type compatibility issues",
  },
  {
    id: 3,
    company: "RouteThis",
    role: "Software Developer, Intern",
    year: "2021",
    stack: ["Java", "React", "Node", "MongoDB", "Firebase"],
    description: 
      "Created a dashboard utilizing Webpacks that provides technical recommendations for network issues and their resolution. Developed an internet network congestion identifier utilizing GCP, data mining and WebPaks to provide predictive insights. Decreased customer call deflections by 47% by implementing integrated remote WebSocket access through native mobile application",
  },
  {
    id: 4,
    company: "Co-operators",
    role: "Mobile Hybird Developer, Intern",
    year: "2020",
    stack: ["Angular", "JavaScript", "Ionic"],
    description:
      "Developed a hybrid app allowing users to view policy details and make payments to their accounts for 10 000+ users. Worked with UI/UX designers to integrate unique web designs achieving well-praised results from investors and users. Built infrastructures to handle client’s API data to remove redundancies and developed classes using TypeScript",
  },
  {
    id: 5,
    company: "Hubdoc (Xero)",
    role: "Software Developer, Intern",
    year: "2019",
    stack: ["NodeJS", "JavaScript", "Postgres", "D3"],
    description:
      "Maintained and managed 15+ automated microservices for collecting and managing financial data and files, serving 10,000+ users. Deployed D3 data visualizers for microservices analytics, providing 12+ sales engineers with an internal tool for data visualization. Increased automated data collection success rate from 40% to 70%, achieving the highest success rate since 2016",
  },
  {
    id: 6,
    company: "University of Waterloo - Recruitment Office",
    role: "Software Developer, Intern",
    year: "2019",
    stack: ["PHP", "JavaScript", "SQL", "Drupal"],
    description: 
      "Created a dynamic algorithm allowing users to update and modify program-related content on the website. Improved data form modules by installing security measures and implementing new front-end features. Updated program-related content and enhanced keyword search engine to refine search results using MySQL",
  },
  {
    id: 7,
    company: "Coulters Software",
    year: "2018",
    role: "Software Developer, Intern",
    stack: ["JavaScript"],
    description: 
      "Developed 3 websites integrating Django CMS for more efficient web updates and content management. Developed automated test cases using Selenium IDE for a client’s website, decreasing debugging time. Decreased loading times by 15% by modifying Ajax calls from traffic cameras to display real-time data",
  },
];

export const PROJECTLIST = [
  "Sorting Algorithm Visualizers",
  "Video Barcode Converter",
  "Spotify ETL",
  "China Kitchen Eatery",
];

export const PROJECTDATA = [
  {
    id: 0,
    name: "Sorting Algorithm Visualizers",
    desc: "Sorting Algorithm Visualizer is a react site for visualizing basic sorting algorithms",
    link: "https://udallmo.github.io/sorting-algo-visualizer/",
    git: "https://github.com/udallmo/sorting-algo-visualizer",
    image: "/images/sorting.png",
  },
  {
    id: 1,
    name: "Video Barcode Converter",
    desc: "Script that determines the dominant color for each frame of a video and visualize the colors in a color wheel or color bar",
    link: "https://www.etsy.com/ca/listing/1416775752/custom-video-barcodes",
    git: "https://github.com/udallmo/video_barcode_converter",
    image: "/images/movie.png",
  },
  {
    id: 2,
    name: "Spotify ETL",
    desc: "Spotify ETL pipeline for top hit music",
    link: "https://github.com/udallmo/spotify-ETL",
    git: "https://github.com/udallmo/spotify-ETL",
    image: "/images/etl.png",
  },
  {
    id: 3,
    name: "China Kitchen Eatery ",
    desc: "Resturant site for local chinese resturant",
    link: "https://china-kitchen-web.vercel.app/",
    git: "https://github.com/udallmo/china_kitchen_web",
    image: "/images/china.PNG",
  },
];
