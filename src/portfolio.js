/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-Y2RTMYM87T",
};

//Home Page
const greeting = {
  title: "Hello 🙏!!",
  title2: "Omkar",
  logo_name: "omkarsk98()",
  nickname: "Kullya",
  full_name: "Omkar Kulkarni",
  subTitle:
    "MERN Stack Developer and a Data Scientist. I am currently on my F1-OPT visa (OPT period until February 2025) and open to Software Engineer roles.!",
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
    tag: "Knight",
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
          fontAwesomeClassname: "logos:nodejs",
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
        "⚡ As part of my specialisation, I have studied, Distributed Systems, Database Systems, Data Mining, Natural Language Processing, Information Retrieval etc.",
        "⚡ I have secured 3.71/4 CGPA.",
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
        "⚡ I have secured 9.04/10 (3.6/4) CGPA.",
      ],
      website_link: "https://jaipur.manipal.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Internships",
  description:
    "Currently, as of January 2024, I have graduated from USC and looking for a full time role as a Software Engineer. I am open to Full Stack, Frontend, Backend Software Engineer roles. I interned in Rockwell Automation during the summer to develop a batchwise time-series analysis tool. I take great pride to mention that I have worked with Asort E-Commerce as a Software Developer in the past. I had interned in the same company and thats how they offered me a full time job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software and Data Science Intern",
          company: "Rockwell Automation",
          company_url: "https://www.rockwellautomation.com/en-us.html",
          logo_path: "ra-logo.png",
          duration: "June 2023 - August 2023",
          location: "Gurugram, India",
          description: [
            "Developed JSON-based ReSTful APIs with back-end in node.js to efficiently expose and plot batch-wise time-series data in visualization tools, reducing data cleaning effort by 30%.",
            "Built a batch analysis tool with front-end in React by integrating ReST API to compare and plot KPIs across batches, reducing quality assurance rejections by 20%.",
            "Achieved a 90% reduction in setup configuration time by automating data linking to integrate relational database storing KPI logs, resulting in a loosely coupled and highly interoperable system.",
          ],
          color: "#0071C5",
        },
        {
          title: "Software Developer",
          company: "Asort E-Commerce",
          company_url: "https://asort.com/",
          logo_path: "asort-logo.jpeg",
          duration: "January 2020 - November 2021",
          location: "Gurugram, India",
          description: [
            "Developed over 10 microservices in Node.js and ReactJS, utilising agile project management methodologies and cross-functional teaming to deploy on AWS production environment.",
            "Built over 50 ReSTful APIs in Node.js and ReactJS for catalog search, product checkout, distributor management, and admin dashboard by collaborating with product management and analysing user feedback, serving 100k requests daily.",
            "Optimised over 20 critical MySQL and MongoDB queries, resulting in a 50% reduction in database instances through indexing, denormalisation, and redis based in-memory caching.",
            "Enhanced bug tracking and resolution with root cause analysis by enhancing logs management in AWS Cloudwatch and Postman, decreasing customer care turn-around-time by 80%.",
            "Architected and prototyped front-end dashboards in JavaScript (ES6+) and ReactJS for admin, vendors, and distributors, enabling better decision-making with improved insights and analytics.",
          ],
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
        id: "-2",
        name: "Fault-Tolerant Key-Value Store",
        description: [
          "Implemented the Raft consensus algorithm in C++ with timeout and heartbeat based leader election to ensure high availability.",
          "Maximized fault tolerance through optimized committed log replication, ensuring efficient recovery within Raft's protocol.",
          "Built a key-value store with partitioning and sharing to efficiently utilise multiple nodes and ensure uninterrupted client request processing in the presence of failures or network partitions with failure identification and resharding.",
        ],
        languages: [
          {
            name: "C++",
            iconifyClass: "skill-icons:cpp",
          },
        ],
        links: [],
      },
      {
        id: "-3",
        name: "Rock Paper Scissors Image Classifier",
        description: [
          "Developed a rock-paper-scissors image classifier using TensorFlow and Keras to classify images of rock, paper, and scissors.",
          "Implement data augmentation to increase the size of the dataset and reduce overfitting by adding variety and noise to the data.",
          "Architected multiple convolutional neural networks to classify the images and understand the effect of multiple strategies on the model's performance.",
          "Achieved test accuracy on the best model of 78% and and F1 score of 0.78 by implementing custom callbacks and early stopping.",
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
        links: [
          {
            name: "Medium",
            url:
              "https://omkarsk98.medium.com/rock-paper-scissor-image-classification-3d21f36856ec",
            iconifyClass: "bi:medium",
          },
          {
            name: "Github",
            url:
              "https://github.com/omkarsk98/rock-paper-scissor-classification",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "-1",
        name: "Restaurant Recommendation System",
        // url: "https://d2pq7x4bcjz9v2.cloudfront.net/",
        description: [
          "Performed Exploratory Data Analysis and Feature Engineering using pandas to scale data and eliminate outliers.",
          "Implemented algorithms like item based collaborative filtering, xgboost and catboost regressor in pyspark using grid search for hyperparameter tuning to estimate the rating of a restaurant for a user.",
          "Performed search and analytics using pyspark RDD over AWS  to study and exploit the efficiency boost of distributed computing.",
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
        id: "0",
        name: "Distributed File System",
        url: "https://emulated-distributed-file-system.netlify.app/",
        description: [
          "Developed a distributed file system with custom user defined partitioning simulate each partition as separate data blocks.",
          "Implemented front-end in React.js to emulate file system operations of directory listing, file partitioning, content inspection, file deletion and searching and analysing the stored data with ReST APIs in node.js.",
          "Partitioned these blocks of data in MySQL, Firebase and MongoDB with meta data of the files like inode, parentInode and path, size and partitioning field.",
          // "Analysed data in pyspark to understand the power of distributed computing.",
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
            url: "https://emulated-distributed-file-system.netlify.app",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "1",
        name: "Splitwise JavaScript Library",
        url: "https://github.com/keriwarr/splitwise",
        description: [
          "Contributed to an open sourced node.js library endorsed by Splitwise to integrate Splitwise API in any JavaScript application.",
          "Implemented authorization code grant with Oauth2.0 to let users use Splitwise window to authenticate and login.",
          "Implemented API calls to fetch user data, create groups, add expenses, etc.",
        ],
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
        description: [
          "Programmed a AWS lambda function to fetch data from Splitwise API and store it in MongoDB.",
          "Implemented a ReactJS application to fetch data from MongoDB and plot it as per category by excluding settlement transactions.",
          "Update the category and delete the expense from the application so that the categories are changed only for me and other friends can see the original expenses.",
        ],
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
        links: [
          {
            name: "Live Demo",
            url: "https://shershah-expenses.netlify.app/",
            iconifyClass: "mdi:web",
          },
        ],
      },
      {
        id: "3",
        name: "Leetcode Contest Violation Checker",
        url: "",
        description: [
          "Developed a node.js app to check if a user has violated the leetcode contest rules.",
          "Implemented a crawler to fetch the users who participated and their submissions.",
          "Strip out the comments and additional tabs and spaces to hash (md5) the code to buckets and persist the buckets in mongodb.",
          "Report the users in the buckets where the size of the bucket is greater than 20.",
        ],
        languages: [
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "MongoDB",
            iconifyClass: "devicon:mongodb-wordmark",
          },
        ],
        links: [],
      },
    ],
  },
  ds: {
    data: [
      {
        id: "-3",
        name: "Rock Paper Scissors Image Classifier",
        description: [
          "Developed a rock-paper-scissors image classifier using TensorFlow and Keras to classify images of rock, paper, and scissors.",
          "Implement data augmentation to increase the size of the dataset and reduce overfitting by adding variety and noise to the data.",
          "Architected multiple convolutional neural networks to classify the images and understand the effect of multiple strategies on the model's performance.",
          "Achieved test accuracy on the best model of 78% and and F1 score of 0.78 by implementing custom callbacks and early stopping.",
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
        links: [
          {
            name: "Medium",
            url:
              "https://omkarsk98.medium.com/rock-paper-scissor-image-classification-3d21f36856ec",
            iconifyClass: "bi:medium",
          },
          {
            name: "Github",
            url:
              "https://github.com/omkarsk98/rock-paper-scissor-classification",
            iconifyClass: "ri:github-fill",
          },
        ],
      },
      {
        id: "0",
        name: "Restaurant Recommendation System",
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
        id: "2",
        name: "Distributed File System",
        url: "https://emulated-distributed-file-system.netlify.app/",
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
            url: "https://emulated-distributed-file-system.netlify.app",
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
          {
            name: "Medium",
            url:
              "https://medium.com/@omkarsk98/time-series-analysis-for-temperature-forecast-310232f0fd62",
            iconifyClass: "bi:medium",
          },
        ],
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
    ],
  },
  tableau: {
    data: [
      {
        id: "0",
        name: "Youtube Global Stats",
        divId: "viz1692279791018",
        content:
          "<div class='tableauPlaceholder' id='viz1692279791018' style='position: relative'> <noscript> <a href='#'><img alt='Global youtube statistics ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Yo&#47;YoutubeGlobalStats&#47;Globalyoutubestatistics&#47;1_rss.png' style='border: none' /> </a> </noscript><object class='tableauViz' style='display:none;'> <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /> <param name='name' value='YoutubeGlobalStats&#47;Globalyoutubestatistics' /> <param name='tabs' value='no' /> <param name='toolbar' value='yes' /> <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Yo&#47;YoutubeGlobalStats&#47;Globalyoutubestatistics&#47;1.png' /> <param name='animate_transition' value='yes' /> <param name='display_static_image' value='yes' /> <param name='display_spinner' value='yes' /> <param name='display_overlay' value='yes' /> <param name='display_count' value='yes' /> <param name='language' value='en-GB' /> <param name='filter' value='publish=yes' /> </object> </div>",
        height: "1000px",
        phoneHeight: "1275px",
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
