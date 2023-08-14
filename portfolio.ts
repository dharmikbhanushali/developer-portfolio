import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Dharmik Bhanushali',
  title: "Hey there, I'm Dharmik",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Java, REST APIs, Flask and Spring Frameworks.",
  resumeLink:
    'https://drive.google.com/file/d/1jVHlpA2wdGN2q9nhBciPB6PBiCz27eGd/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'dharmikbhanushali',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/dharmikbhanushali',
  linkedin: 'http://www.linkedin.com/in/dharmikbhanushali',
  github: 'https://github.com/dharmikbhanushali',
  instagram: 'https://www.instagram.com/dharmik____',
  facebook: '',
  twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) in React.js'
        ),
        // emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework, Java & Spring Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        // {
        //   skillName: 'Nextjs',
        //   iconifyTag: 'vscode-icons:file-type-light-next',
        // },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        // {
        //   skillName: 'Redux',
        //   iconifyTag: 'logos:redux',
        // },
        // {
        //   skillName: 'NPM',
        //   iconifyTag: 'logos:npm-icon',
        // },
        // {
        //   skillName: 'Yarn',
        //   iconifyTag: 'logos:yarn',
        // },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        // {
        //   skillName: 'Cloudinary',
        //   iconifyTag: 'logos:cloudinary',
        // },
        // {
        //   skillName: 'Nginx',
        //   iconifyTag: 'logos:nginx',
        // },
        // {
        //   skillName: 'Sentry',
        //   iconifyTag: 'logos:sentry-icon',
        // },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Frontend/Design',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '69',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Indiana University Bloomington',
    subHeader: 'Master of Science in Computer Science',
    duration: 'August 2022 - May 2024',
    desc: '',
    grade: 'GPA: 3.95',
    descBullets: [
      'Courses: Semester I - Applied Algorithms, Elements of Artificial Intelligence, Security for Networked Systems', 
                'Semester II - Software Engineering, Database Design, Information Visualization',
      'Mentorship: Teaching Assistant for the courses - Mobile App Development, Data Structures, Intro to Software Systems(Java)',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Nov 2020 – Jun 2022',
    desc: '● Collaborated with cross-functional teams to develop REST API services with a focus on scalability, led to a remarkable 50% reduction in response time for high volume requests with continuous integration and deployment. ● Engineered and integrated high-performing Native SQL stored procedures to optimize Application Interfaces, resulting in a significant 25% boost in indexing speed. ● Designed efficient databases with optimized indexing, resulting in a 15% decrease in response time using MySQL.',
  },
  {
    role: 'Software Development Intern',
    company: 'The Sparks Foundation',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Dec 2018 – Feb 2019',
    desc: '● Seamlessly integrated payment gateway into donation website with Python, JSON, and Payflow SDK, resulting in a 50% increase in transactions. ● Successfully developed user actionable insights & metrics to make informed credit decisions with an automated alert system with 75% accuracy PHP, HTML, CSS and PostgreSQL.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  {
    name: 'Wellness Tracking System',
    stack: 'Techstack: Django, React , HTML, Bootstrap, CSS, PostgreSQL, REST, Azure, Docker',
    desc: '● Crafted personalized workout and diet plans for a large user base on HealthTrack365 using machine learning algorithms that helped them achieve their fitness goals with a success rate of over 70%.',
    github: 'https://github.com/dharmikbhanushali/WellnessTrackingSystem',
    // link: 'https://youtu.be/uzk2DVjTbok',
    link:'https://floating-plains-16047.herokuapp.com'
  },
  {
    name: 'Implementation of Virtual Assistant with Sign Language using Deep Learning and Tensorflow',
    stack:'Techstack: Python, Tensorflow, OpenCV, Convolutional Neural Network',
    desc: 'Led the training of the AI model for the sign language interface, resulting in a 30% increase in accessibility for individuals with speech and hearing impairments.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
    link3:'https://ieeexplore.ieee.org/document/9183179',
    link2:'https://www.irjet.net/archives/V7/i3/IRJET-V7I31032.pdf',
  },
  {
    name: 'Fitness Application',
    stack: 'Techstack: Java, XML, Firebase, SQL',
    desc: '● Optimized application performance by integrating real-time data tracking features, including GPS location, step count, and calorie tracker, with an accuracy rate of over 90%.\n● Enhanced user experience with precise BMI calculator and personalized health insights from real-time data.',
    github: 'https://github.com/dharmikbhanushali/fitness-application',
  },
  {
    name: 'Visualizing the Vascular System of the Human Body',
    stack:'Techstack: Python, Tableau, PowerBI',
    desc: 'Collaborated with a Harvard University professor and a multidisciplinary team to visualize the complex vascular system of the human body for the HuBMAP initiative. Processed and cleaned millions of rows of data, ensuring a 97% improvement in data quality for the analysis of nearly 1000 blood vessels.',
    github: '',
  },
];

export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Dharmik Bhanushali',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Hanzla Tauqeer',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};
