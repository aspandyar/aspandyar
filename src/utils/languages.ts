export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  // Runtime & Languages
  node: {
    name: "Node.js",
    iconName: "node",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  golang: {
    name: "Golang",
    iconName: "golang", 
  },
  java: {
    name: "Java",
    iconName: "java", 
  },

  // Frontend Languages
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  react: {
    name: "React",
    iconName: "react", 
  },

  // Styling
  css: {
    name: "CSS",
    iconName: "css",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },

  // Databases
  postgres: {
    name: "PostgreSQL",
    iconName: "postgres", 
  },
  redis: {
    name: "Redis",
    iconName: "redis", 
  },
  mongo: {
    name: "MongoDB",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    iconName: "mysql",
  },

  // Version Control & Documentation
  git: {
    name: "Git",
    iconName: "git",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  linux: {
    name: "Linux",
    iconName: "linux", 
  },
  bash: {
    name: "Bash",
    iconName: "gnubash", 
  },

  // Backend Frameworks
  fastapi: {
    name: "FastAPI",
    iconName: "fastapi", 
  },
  express: {
    name: "Express.js",
    iconName: "express",  
  },
  // nestjs: {
  //   name: "NestJS",
  //   iconName: "nestjs", 
  // },
  django: {
    name: "Django",
    iconName: "django", 
  },
  flask: {
    name: "Flask",
    iconName: "flask", 
  },
  spring: {
    name: "Spring",
    iconName: "spring", 
  },
  gin: {
    name: "Gin",
    iconName: "gin", 
  },
  // "gorilla/mux": {
  //   name: "Gorilla Mux",
  //   iconName: "gorilla-mux", 
  // },
  // echo: {
  //   name: "Echo",
  //   iconName: "echo", 
  // },

  // DevOps & Infrastructure
  docker: {
    name: "Docker",
    iconName: "docker", 
  },
  kubernetes: {
    name: "Kubernetes",
    iconName: "kubernetes", 
  },
  aws: {
    name: "AWS",
    iconName: "aws", 
  },
  grafana: {
    name: "Grafana",
    iconName: "grafana", 
  },
  prometheus: {
    name: "Prometheus",
    iconName: "prometheus", 
  },
  nginx: {
    name: "Nginx",
    iconName: "nginx", 
  },
  heroku: {
    name: "Heroku",
    iconName: "heroku", 
  },

  // Existing tools
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  vite: {
    name: "Vite",
    iconName: "vite",
  },
  prisma: {
    name: "Prisma",
    iconName: "prisma",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};