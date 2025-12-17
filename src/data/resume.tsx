import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nishant Patel",
  initials: "MN",
  url: "https://github.com/Nishant251993",
  location: "Mumbai, India",
  description:
    "Crafting Beautiful and Engaging Digital Experiences with Love and Code.",
  summary: `I'm Nishant Patel, a design-oriented front-end developer passionate about creating pixel-perfect, engaging, and accessible digital experiences. My journey began in 2014 when I first dabbled in creating websites using Bootstrap. What started as an experiment quickly became a deep dive into the vast and exciting world of coding and web development.

Over the years, I've had the privilege of building websites and web applications for agencies, start-ups, and large corporations, always striving to find that sweet spot where design meets engineering. I believe that the best digital experiences are not only visually appealing but also built with solid engineering principles.

I like helping new developers and working with emerging startups to bring their ideas to life. Outside of work, I enjoy sharing my knowledge through articles on my blog, [webexpe.com](https://webexpe.com/), and creating fun dev memes for Instagram.

Let's build something amazing together!`,
  avatarUrl: "/Nishant251993/mayur-nalwala.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Redux",
    "TailwindCss",
    "Jest",
    "Git",
    "HTML / SCSS",
    "MDX",
    "Figma",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "nmayurashok@gmail.com",
    tel: "+91 9039625322",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nishant251993",
        icon: Icons.github,

        navbar: true,
      },
      Webexpe: {
        name: "Webexpe",
        url: "https://webexpe.com/",
        icon: NotebookIcon,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mayur-nalwala/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nmayurashok@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mphasis",
      href: "https://www.mphasis.com/home.html",
      badges: ["NextJS", "Typescript", "Redux"],
      location: "Mumbai, Hybrid",
      title: "Delivery Module Lead",
      logoUrl: "",
      start: "March 2024",
      end: "Present",
      description: `Spearheaded the development of a video verification system for web and mobile platforms using Next.js and TypeScript. Managed the project lifecycle from concept to launch, ensuring seamless collaboration across design, backend, and testing teams. Set up comprehensive unit testing with Jest and React Testing Library, achieving 85% test coverage and i18n support for 10+ Indian regional languages.`,
    },
    {
      company: "Paytm",
      badges: ["ReactJS", "Typescript", "Redux", "SCSS"],
      href: "https://paytm.com",
      location: "Mumbai, Remote",
      title: "Sr. Software Engineer - Frontend",
      logoUrl: "",
      start: "July 2020",
      end: "Oct 2023",
      description:
        "Built and maintained a component library with 30+ reusable components for Paytm’s web and mobile applications using React.js and TypeScript. Developed a lightweight CSS framework for insurance products, reducing development time by 20% and enhancing consistency across web applications.",
    },
    {
      company: "Wharf Street Strategies",
      href: "https://wharfstreetstrategies.com/",
      badges: ["HTML", "SCSS", "ReactJS", "Redux", "Bootstrap", "AdobeXD"],
      location: "Navi Mumbai, India",
      title: "Sr. Frontend Developer and Designer",
      logoUrl: "",
      start: "August 2019",
      end: "July 2020",
      description:
        "Optimized website performance using React.js and Redux, increasing page load speed by 35% and reducing bounce rate to 48%. Designed and implemented UX strategies, improving user session duration by 20% and overall user satisfaction, attracting international clients. Mentored junior developers and designers, contributing to team growth and capability.",
    },
    {
      company: "Auxesis Group",
      href: "",
      badges: ["HTML", "SCSS", "Bootstrap", "Angular", "JavaScript", "JQuery"],
      location: "Mumbai, India",
      title: "Software Engineer",
      logoUrl: "",
      start: "April 2017 - Sep 2017",
      end: "May 2018  -  July 2019",
      description:
        "Led the redesign of websites, boosting overall traffic by 30%. Developed a comprehensive design system, accelerating the design process and reducing time-to-market by 15%. Collaborated across departments to deliver advanced UI designs with animations, ensuring high usability, performance, and SEO.",
    },
    {
      company: "Ideamagix",
      href: "https://www.ideamagix.com/index.html",
      badges: ["HTML", "SCSS", "Bootstrap", "JavaScript", "JQuery"],
      location: "Mumbai, India",
      title: "Web Developer & Designer Intern",
      logoUrl: "",
      start: "Sep 2016",
      end: "Jan 2017",
      description:
        "Created and crafted websites, logos, branding, and marketing materials.Engaged in client meetings to discuss product/project requirements. Collaborated with the team to successfully deliver 8+ projects, meeting client specifications each time.",
    },
  ],
  education: [
    {
      school: "Nextleap",
      href: "https://nextleap.app/",
      degree: "Product Management Fellow",
      logoUrl: "/buildspace.jpg",
      start: "Sep 2023",
      end: "Nov 2023",
    },
    {
      school: "Mumbai University",
      degree: "Bachelor of Engineering - Computer Science",
      logoUrl: "/waterloo.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Blog Template (100+ Stars, 50+ forks) Next.js, Tailwind",
      href: "",
      dates: "",
      active: true,
      description:
        "Created a customizable blog template leveraging Next.js’s SSG for static page generation. Designed for both technical and non-technical users, with responsive design, SEO optimization, multi-author support, and light/dark themes. Gained 53 forks and 120+ stars on GitHub, demonstrating its popularity and utility.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Source code",
          href: "https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blog template - MDX, Next.js, TailwindCSS, Typescript",
      href: "",
      dates: "",
      active: true,
      description:
        "Simplified and optimized an earlier template further with Markdown/MDX, leveraging Next.js features like getStaticPaths and getStaticProps. Structured posts as Markdown files, dynamically generating pages at build time. Added features like SEO optimization with Next SEO, and sitemap generation with NextSitemap. Utilized Tailwind CSS for easy customization, focusing on performance and simplicity. Applied this template to [webexpe.com](https://webexpe.com/), achieving 600+ monthly organic hits due to effective SEO integration.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "MDX/Markdown"],
      links: [
        {
          type: "Source code",
          href: "https://github.com/webexpe13/nextjs-tailwind-mdx-blog-template",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  upComingProjects: [
    {
      title: "Logistics Dashboard & SaaS Product",
      href: "",
      dates: "",
      active: false,
      description:
        "Building a utility dashboard for emerging logistics company. Utilizing Next.js 14, TypeScript, Tailwind CSS, and Firebase for backend services. Planning to evolve the project into a SaaS product post-launch and testing.",
      technologies: ["Next.js", "Typescript", "TailwindCSS","Firebase"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Learning App",
      href: "",
      dates: "",
      active: false,
      description:
        "Developing an educational app, incorporating research-backed design elements to enhance learning. Aiming to expand skills in mobile app development for iOS, Android, and smart TVs.",
      technologies: ["React Native", "AppWrite / Firebase"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
