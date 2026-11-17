// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'boyu8266', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'boyu8266/nextjs-auth-line',
          'boyu8266/nextjs-auth-google',
          'boyu8266/proot-distro-containers',
          'boyu8266/ist',
          'boyu8266/instaduler-cli',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Brendan Chen (boyu8266) — AI Applications & Platform Engineering',
    description:
      'Software engineer with 8 years of experience across AI application integration (Azure OpenAI, AI agents), enterprise systems (procurement allocation, PCB test point automation), and platform engineering (self-hosted GitLab/Gitea, CI/CD, Docker).',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://boyu8266.github.io',
    phone: '',
    email: 'boryuh8266@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'TypeScript',
    'JavaScript',
    'Java',
    'Angular',
    'Next.js',
    'Flask',
    'FastAPI',
    'GraphQL',
    'MySQL',
    'MongoDB',
    'Docker',
    'GitLab CI/CD',
    'Gitea Actions',
    'Azure App Service',
    'Azure OpenAI',
    'pytest',
    'TensorFlow Lite',
    'Android',
  ],
  experiences: [
    {
      company: 'USI Global (Member of ASE Group) (Caotun, Nantou)',
      position: 'Application Software Development Dept. - Senior Engineer',
      from: '2022/12/26',
      to: 'Present (4y)',
      companyLink: 'https://www.usiglobal.com/tw',
      descriptions: [
        'Built an internal AI assistant on Azure OpenAI and Azure App Service, serving up to 50 users; integrated MongoDB, Microsoft Teams, Microsoft Graph, and an internal timesheet API through tool calling.',
        'Delivered a procurement allocation platform (Angular 15, Flask, MongoDB) used across all BUs and plants; processes 211K+ RFQ rows and ~15K BOM groups per run, cutting a week-long manual cycle to under one day.',
        'Built PCB test point automation (Angular 15, IPC-2581) that reduced cycle time by over 50%; co-inventor on patent I932271; self-hosted Gitea and maintained CI/CD pipelines.',
      ],
    },
    {
      company: 'RogersAI (Zhongshan, Taipei)',
      position: 'Systems Team - Android Engineer',
      from: '2019/09/02',
      to: '2022/09/16 (3y)',
      companyLink: '',
      descriptions: [
        'Integrated face recognition inference with TensorFlow Lite on Qualcomm 205 devices, owning model deployment, device integration, and production reliability.',
        'Designed MySQL schemas for 1M+ face embeddings, attendance records, RBAC, and audit logs.',
        'Self-hosted GitLab and set up CI/CD pipelines for build and deployment.',
      ],
    },
    {
      company: 'Pou Chen Corporation (Xitun, Taichung)',
      position: 'IT Department, Innovation Platform - Engineer',
      from: '2018/09',
      to: '2019/08 (1y)',
      companyLink: 'https://www.pouchen.com/index.php/',
      descriptions: [
        'Developed and maintained internal business systems in Java.',
      ],
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'National Kaohsiung University of Science and Technology',
      degree: 'Department of Mechanical and Automation Engineering',
      from: '2011',
      to: '2015',
    },
  ],
  publications: [
    {
      title:
        '電路測試點產生方法及其系統 (Circuit Test Point Generation Method and System)',
      journalName: 'Patent No. I932271',
      description:
        'Co-inventor. Granted patent for automated PCB test point generation.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
