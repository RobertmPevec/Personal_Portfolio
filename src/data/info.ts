export const info = {
  baseUrl: "https://robertpevec.com",
  name: "Robert Pevec",
  jobDescription: "Software Engineer",
  about: `I’m a Software Engineer based in Waterloo, Ontario,
   with a passion for creating new things and solving complex problems. 
   My skills include Python, C, React, Django, TypeScript, and SQL. With a strong foundation in mathematics
      and a curiosity for learning, I enjoy building solutions,
       analyzing information, and approaching challenges with an
        analytical mindset. Also chess.`,

  skills: [ // Moved to the top level of the object
    "Python",
    "C",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "SQL",
    "Git",
  ],

  experience: [
    {
      name: "Full-Stack Machine Learning Developer",
      location: "Whizi.io | Waterloo, ON",
      startDate: "Nov 2024",
      endDate: "Present",
      description: [
        "✓ Deployed and maintained 200+ AI models for seamless web and mobile integration, supporting 300+ early adopters.",
        "✓ Built scalable systems with Node.js, React, and PostgreSQL to handle 10000+ monthly messages",
        "✓ Managed secure, high-performance LLM APIs, ensuring efficient data handling and a smooth user experience.",
        "✓ Worked closely with a small, dynamic team to rapidly prototype, develop, and deploy innovative features.",
      ],
    },
    {
      name: "Full-Stack Developer Intern",
      location: "Sampler | Toronto, ON",
      startDate: "Jan 2024",
      endDate: "Apr 2024",
      description: [
        "✓ Improved website load speeds by 20% using React.js optimizations.",
        "✓ Developed backend logic in Django for the product sampling dashboard, supporting 5,000+ daily users.",
        "✓ Monitored and optimized database performance with tools like pgAdmin and query analysis.",
        "✓ Assisted in migrating legacy code to a modern framework, reducing technical debt and improving maintainability.",
      ],
    },
    {
      name: "Apprentice Carpenter",
      location: "Local 1256 | Sarnia, ON",
      startDate: "Sep 2021",
      endDate: "Jan 2024",
      description: [
        "✓ Helped run crews to ensure efficient project completion.",
        "✓ Worked with clients to ensure satisfaction and project alignment with expectations.",
        "✓ Maintained tools and materials, ensuring projects stayed on schedule and within budget.",
      ],
    },
  ],

  education: [
    {
      name: "Wilfrid Laurier University",
      location: "Waterloo, Ontario",
      startDate: "2023",
      endDate: "2027",
      description: [
        "<strong>Bachelor of Science in Computer Science and Mathematics</strong>",
        "✓ Authored an Academic Paper on Bias in AI Using Machine Learning Under a Professor.",
        "✓ Team Captain of the University Chess Club.",
        "✓ Strong Foundation in Data Structures, Calculus, and Linear Algebra.",
        "✓ Finished Stanford University's Machine Learning Specialization.",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/RobertmPevec",
    email: "mailto:contact@robert-pevec.com",
    linkedin: "https://www.linkedin.com/in/robert-pevec/",
  },

  projects: [
    {
      title: "Finance Tracker",
      isFeatured: true,
      thumbnail: "/assets/images/finance-tracker.png",
      githubUrl: "https://github.com/RobertmPevec/finance_flow_docs",
      liveUrl: "https://financeflowtech.com/home",
    },
    {
      title: "Recipe Generator",
      isFeatured: true,
      thumbnail: "/assets/images/recipe-generator.png",
      githubUrl: "https://github.com/RobertmPevec/RecipeGenerator",
      liveUrl: "https://recipewizard.ca",
    },
    {
      title: "Biased AI Detector (Neural Network)",
      isFeatured: true,
      thumbnail: "/assets/images/bias-score.png",
      githubUrl: "https://github.com/RobertmPevec/BiasLLMModel",
      liveUrl: "/biasscores",
    },
    {
      title: "Custom Mechanical Keyboard / Keyboard Website",
      isFeatured: true,
      thumbnail: "/assets/images/keyboard.png",
      githubUrl: "/home",
      liveUrl: "/custom-mechanical-keyboard",
    },
  ],
};