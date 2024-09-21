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
        projects: ['boyu8266/proot-distro-containers', 'boyu8266/ist', 'boyu8266/instaduler-cli'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Brendan Chen(boyu8266)',
    description: '',
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
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Node.js',
    'Android',
    'JavaScript',
    'React.js',
    'Angular',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Jenkins',
    'Github Actions',
    'Gitea Actions',
    'Gitlab CI/CD'
  ],
  experiences: [
    {
      company: '日月光集團-環鴻科技股份有限公司 (南投草屯)',
      position: '軟體開發處-高級工程師',
      from: '2022/12/26',
      to: 'Present (2y)',
      companyLink: 'https://www.usiglobal.com/tw',
    },
    {
      company: '國泰人壽 (台中南屯)',
      position: '台中軟體開發中心-高級工程師',
      from: '2022/09/19',
      to: '2022/11/30 (3m)',
      companyLink: 'https://www.cathaylife.com.tw/',
    },
    {
      company: '羅傑斯人工智能 (台北中山)',
      position: '系統組-安卓工程師',
      from: '2019/09/02',
      to: '2022/09/16 (3y)',
      companyLink: '',
    },
    {
      company: '寶成鞋業 (台中西屯)',
      position: '資訊處創新平台-工程師',
      from: '2018/09',
      to: '2019/08 (1y)',
      companyLink: 'https://www.pouchen.com/index.php/',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: '國立高雄第一科技大學',
      degree: '機械與自動化工程系 (畢業)',
      from: '2011',
      to: '2015',
    },
    {
      institution: '國立彰化師範大學附屬高級工業職業學校',
      degree: '機械科  (畢業)',
      from: '2009',
      to: '2011',
    },
  ],
  publications: [
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
