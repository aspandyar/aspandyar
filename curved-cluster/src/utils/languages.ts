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
    iconName: "golang", // ❌ NEED TO ADD
  },
  java: {
    name: "Java",
    iconName: "java", // ❌ NEED TO ADD
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
    iconName: "react", // ❌ NEED TO ADD
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
    iconName: "postgres", // ❌ NEED TO ADD
  },
  redis: {
    name: "Redis",
    iconName: "redis", // ❌ NEED TO ADD
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
    iconName: "linux", // ❌ NEED TO ADD
  },
  bash: {
    name: "Bash",
    iconName: "gnubash", // ❌ NEED TO ADD
  },

  // Backend Frameworks
  fastapi: {
    name: "FastAPI",
    iconName: "fastapi", // ❌ NEED TO ADD
  },
  express: {
    name: "Express.js",
    iconName: "express", // ❌ NEED TO ADD
  },
  nestjs: {
    name: "NestJS",
    iconName: "nestjs", // ❌ NEED TO ADD
  },
  django: {
    name: "Django",
    iconName: "django", // ❌ NEED TO ADD
  },
  flask: {
    name: "Flask",
    iconName: "flask", // ❌ NEED TO ADD
  },
  spring: {
    name: "Spring",
    iconName: "spring", // ❌ NEED TO ADD
  },
  gin: {
    name: "Gin",
    iconName: "gin", // ❌ NEED TO ADD
  },
  // "gorilla/mux": {
  //   name: "Gorilla Mux",
  //   iconName: "gorilla-mux", // ❌ NEED TO ADD
  // },
  // echo: {
  //   name: "Echo",
  //   iconName: "echo", // ❌ NEED TO ADD
  // },

  // DevOps & Infrastructure
  docker: {
    name: "Docker",
    iconName: "docker", // ❌ NEED TO ADD
  },
  kubernetes: {
    name: "Kubernetes",
    iconName: "kubernetes", // ❌ NEED TO ADD
  },
  aws: {
    name: "AWS",
    iconName: "aws", // ❌ NEED TO ADD
  },
  grafana: {
    name: "Grafana",
    iconName: "grafana", // ❌ NEED TO ADD
  },
  prometheus: {
    name: "Prometheus",
    iconName: "prometheus", // ❌ NEED TO ADD
  },
  nginx: {
    name: "Nginx",
    iconName: "nginx", // ❌ NEED TO ADD
  },
  heroku: {
    name: "Heroku",
    iconName: "heroku", // ❌ NEED TO ADD
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
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};