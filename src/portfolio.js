/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-Y2RTMYM87T",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Omkar",
  logo_name: "omkarsk98()",
  nickname: "Kullya",
  full_name: "Omkar Kulkarni",
  subTitle: "MERN Stack Developer and a Data Scientist. Always learning.",
  resumeLink: "",
  mail: "mailto:omkarsk98@gmail.com",
};

// converting this to an array so this can be used dynamically
const socialMediaLinks = [
  { name: "Github", url: "https://github.com/omkarsk98", icon: "mdi:github" },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/omkarsk98",
    icon: "devicon:linkedin",
  },
  {
    name: "GMail",
    url: "mailto:omkarsk98@gmail.com",
    icon: "ic:outline-email",
  },
  {
    name: "Stackoverflow",
    url: "https://stackoverflow.com/users/8802812/omkar-kulkarni",
    icon: "logos:stackoverflow-icon",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/omkarsk98",
    icon: "simple-icons:leetcode",
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node and Express",
        "⚡ Integration of third party services such as Firebase/AWS and so on",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#3DDC84",
          },
        },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data Science",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Natural Language Processing",
        "⚡ Data visualization",
        "⚡ Regression and Classification",
        "⚡ Recommendation Systems",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "devicon-plain:apachespark-wordmark",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos:tensorflow",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "fluent-emoji:hugging-face",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "devicon:numpy-wordmark",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science - Computer Science",
      logo_path: "usclogo.png",
      alt_name: "USC",
      duration: "January 2022 - December 2023",
      descriptions: [
        "⚡ I'm currently pursuing my masters in Computer Science and specialising in Data Science.",
        "⚡ As part of my specialisation, I have studied, Database Systems, Data Mining, Natural Language Processing, Information Retrieval etc.",
        "⚡ I have secured 3.67/4 CGPA.",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "Manipal University Jaipur",
      subtitle: "Bachelor of Technology - Computer Science",
      logo_path: "muj-logo.png",
      alt_name: "MUJ",
      duration: "August 2016 - July 2020",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        "⚡ I have secured 9.04/10 CGPA.",
      ],
      website_link: "https://jaipur.manipal.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Internships",
  description:
    "Currently, as of August 2023, I am interning at Rockwell Automation. I take greate pride to mention that I have worked with Asort E-Commerce as a Software Developer in the past. I had interned in the same company and thats how they offered me a full time job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        // {
        //   title: "Data Science Intern",
        //   company: "Rockwell Automation",
        //   company_url: "https://www.rockwellautomation.com/en-us.html",
        //   logo_path: "ra-logo.png",
        //   duration: "June 2023 - August 2023",
        //   location: "Gurugram, India",
        //   description: [],
        //   color: "#0071C5",
        // },
        {
          title: "Software Developer",
          company: "Asort E-Commerce",
          company_url: "https://asort.com/",
          logo_path: "asort-logo.jpeg",
          duration: "January 2020 - November 2021",
          location: "Gurugram, India",
          description: [
            "Engineered over 10 microservices in distributed environments in nodejs and ReactJS using agile project management to ship high quality code to production hosted on AWS.",
            "Built over 50 ReSTful APIs in node.js and ReactJS for catalog search, product checkout, distributor management and admin dashboard serving close to 5000 customers per day.",
            "Optimized over 20 crucial mysql and mongodb queries by indexing, denormalizing and caching to cut down database instances by 50%.",
            "Improvised bug tracking and fixing by improving logs management in AWS Cloudwatch and postman to decrease CRM turn-around-time by 80%.",
            "Architected and prototyped admin, vendors, and distributor dashboards in JavaScript (ES6+) and ReactJS to improve decision making with better insights and analytics.",
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Software Developer Intern",
          company: "Asort E-Commerce",
          company_url: "https://asort.com/",
          logo_path: "asort-logo.jpeg",
          duration: "July 2019 - December 2019",
          location: "Gurugram, India",
          description: [
            "Built cross-platform mobile application in React Native to enhance user experience for 20k active users.",
            "Integrated ReSTful APIs on admin dashboard to dynamically update mobile application, reducing engineer intervention by 95%.",
            "Automated dynamic sanity tests with Selenium and Appium to lower Quality Assurance effort and time by 80%.",
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Community Lead",
    //       company: "Bauddhik-Geeks",
    //       company_url: "https://bauddhikgeeks.tech/",
    //       logo_path: "bauddhikgeeks.png",
    //       duration: "Sep 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         ["Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow."],
    //       color: "#FBBD18",
    //     },
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         ["Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck."],
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         ["Google Developer Group Surat Student Volunteer and Member."],
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Postman Student Expert",
    //       company: "Postman",
    //       company_url: "https://www.postman.com/",
    //       logo_path: "postman.png",
    //       duration: "Feb 2020 - Present",
    //       location: "Work From Home",
    //       description:
    //        ["Google Developer Group Surat Student Volunteer and Member."],
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //         ["Contribute to Open Source Community and Open Source Project."],
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         ["Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc."],
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         ["Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left."],
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I keep learning and experimenting with new technologies. Here are some of my projects that I have worked on recently.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "omkar.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
  //   link: "https://twitter.com/omkarsk98",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  sde: {
    data: [
      {
        id: "0",
        name: "Distributed File System",
        url: "https://d2pq7x4bcjz9v2.cloudfront.net/",
        description:
          "Developed distributed file system in AWS RDS, Cloud Firestore and Mongo Atlas to partition files to search and analyze by implementing map-reduce using ReactJS, node.js and spark.",
        languages: [
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "ReactJS",
            iconifyClass: "vscode-icons:file-type-reactjs",
          },
          {
            name: "Spark",
            iconifyClass: "devicon:apachespark-wordmark",
          },
          {
            name: "MongoDB",
            iconifyClass: "devicon:mongodb-wordmark",
          },
          {
            name: "MySQL",
            iconifyClass: "logos:mysql",
          },
          {
            name: "Firebase",
            iconifyClass: "logos:firebase",
          },
          {
            name: "AWS",
            iconifyClass: "logos:aws",
          },
        ],
        links: [
          {
            name: "Live Demo",
            url: "https://d2pq7x4bcjz9v2.cloudfront.net/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "1",
        name: "Splitwise JavaScript Library",
        url: "https://github.com/keriwarr/splitwise",
        description:
          "Implemented authorization code grant for the Splitwise endorsed JS library having 450+ downloads in javascript and nodejs.",
        languages: [
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
        links: [
          {
            name: "Github",
            url: "https://github.com/keriwarr/splitwise",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "2",
        name: "Expense Tracker",
        url: "",
        description:
          "Integrated Splitwise API to track expenses and generate reports using ReactJS, NodeJS and MongoDB.",
        languages: [
          {
            name: "ReactJS",
            iconifyClass: "vscode-icons:file-type-reactjs",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "MongoDB",
            iconifyClass: "devicon:mongodb-wordmark",
          },
          {
            name: "AWS Lambda",
            iconifyClass: "logos:aws-lambda",
          },
        ],
        links: [],
      },
    ],
  },
  ds: {
    data: [
      {
        id: "0",
        name: "Restaurant Recommendation System - Data Mining",
        url: "",
        description: [
          "Performed Exploratory Data Analysis and Feature Engineering using pandas to scale data and handle outliers.",
          "Implemented item based collaborative filtering and xgboost and catboost regressor using grid search for hyperparameter tuning to predict the rating of a restaurant for a user.",
          "Conducted experimental analysis using a neural network to assess its impact on the recommendation system's RMSE performance in tensorflow.",
        ],
        languages: [
          {
            name: "Python",
            iconifyClass: "logos:python",
          },
          {
            name: "PySpark",
            iconifyClass: "devicon:apachespark-wordmark",
          },
          {
            name: "Tensorflow",
            iconifyClass: "logos:tensorflow",
          },
        ],
        links: [],
      },
      {
        id: "1",
        name: "Similar Legal Documents Retrieval - NLP",
        url: "",
        description: [
          "Lemmatized, annotated and summarized legal cases with transformer based architectures of distil-BART and Text-Rank based Summa while emphasising keywords and entities.",
          "Vectorized and embedded text with TFIDF, Doc2Vec and BERT to retain semantics and commute averaged cosine similarity of multiple embeddings for each pair of cases.",
          "Retrieved original and summarized cases for user required legal case with a Pearson Correlation score of 0.65.",
        ],
        languages: [
          {
            name: "Python",
            iconifyClass: "logos:python",
          },
          {
            name: "Tensorflow",
            iconifyClass: "logos:tensorflow",
          },
        ],
        links: [],
      },
      {
        id: "2",
        name: "Distributed File System - Data Management",
        url: "https://d2pq7x4bcjz9v2.cloudfront.net/",
        description: [
          "Developed a distributed file system to split files into chunks and simulate each chunk as a block of data stored separately.",
          "Implemented UI based operations where user can create a directory, upload file, view contents, delete file, etc.",
          "Searched and analysed data in ReactJS by applying filters to simulate searching in each block of data.",
          "Stored these blocks of data in MySQL, Firebase and MongoDB meta data of the file like inode, parentInode and path.",
          "Analysed data in pyspark to understand the power of distributed computing.",
        ],
        languages: [
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "ReactJS",
            iconifyClass: "vscode-icons:file-type-reactjs",
          },
          {
            name: "Spark",
            iconifyClass: "devicon:apachespark-wordmark",
          },
          {
            name: "MongoDB",
            iconifyClass: "devicon:mongodb-wordmark",
          },
          {
            name: "MySQL",
            iconifyClass: "logos:mysql",
          },
          {
            name: "Firebase",
            iconifyClass: "logos:firebase",
          },
          {
            name: "AWS",
            iconifyClass: "logos:aws",
          },
        ],
        links: [
          {
            name: "Live Demo",
            url: "https://d2pq7x4bcjz9v2.cloudfront.net/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "3",
        name: "Time Series Analysis",
        url: "",
        description: [
          "Performed exploratory data analysis to clean and understand the monthly temparature data and forecast the upcoming temperature.",
          "Performed Dickey Fuller test to confirm that the data is stationary.",
          "Plotted ACF and PACF plots to guess the order of the AR and MA models and implement ARIMA.",
          "Performed grid search to identify the optimal parameters and implemented auto-arima model that is capable of identifying the orders of the ARIMA model.",
        ],
        languages: [
          {
            name: "Python",
            iconifyClass: "logos:python",
          },
          {
            name: "statsmodels",
            iconifyClass: "material-symbols:query-stats",
          },
        ],
        links: [
          {
            name: "Github",
            url:
              "https://github.com/omkarsk98/Time-Series-Analysis-on-Temperature-using-ARIMA",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
    ],
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
