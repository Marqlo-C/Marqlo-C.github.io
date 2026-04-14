// Site content data used by UI renderers.
(() => {
  const projects = [
    {
      title: "EcoCAR | Míocar Script Support Webapp",
      summary: "Internal UC Davis EcoCAR project: Central hub for managing Tampermonkey userscripts, accessing Míocar data via AI assistant, and viewing usage logs. FastAPI backend, Next.js frontend, Dockerized for local dev. (Production details confidential)",
      tags: ["FastAPI", "Next.js", "TypeScript", "Python", "Docker", "PostgreSQL", "AI", "Internal"],
      link: ""
    },
    {
      title: "MioCar Web Extension Scripts",
      summary: "A collection of Tampermonkey/Greasemonkey user scripts for automating tasks on the share.car admin portal. Includes booking automation, data export, and reporting tools. Developed for UC Davis EcoCAR and NCST research. Public scripts and research docs included.",
      tags: ["JavaScript", "Tampermonkey", "Automation", "API", "Jupyter Notebook", "Research"],
      link: "https://github.com/Hummaton/MioCar-WebExtension-Scripts"
    },
    {
      title: "Grocer's Gauntlet — Procedural Roguelite Shopping Crawler",
      summary: "Run-based shopping crawler built in Godot 4. Each trip deeper into the store increases risk and opportunity. Features cart selection, procedural aisles, haggling minigame, persistent inventory, and custom shaders. Narrative and systems blend survival, resource management, and story.",
      tags: ["Godot", "GDScript", "Shaders", "Procedural Generation", "Resource Management", "Dialogue System", "Pixel Art"],
      link: "https://github.com/Marqlo-C/Grocers_Gauntlet--Roguelite_Game",
      liveLink: "https://generss.itch.io/grocers-gauntlet"
    },
    {
      title: "Noteworthy — AI Math Notes & Animation Suite",
      summary: "A full-stack note-taking and math animation platform. Features a React + TypeScript + Vite web app for fast, beautiful notes, and a Python backend that generates 3Blue1Brown-style Manim videos from text prompts. Supports LaTeX for advanced math, instant video previews, and AI-powered text features.",
      tags: ["React", "TypeScript", "Vite", "Python", "Manim", "LaTeX", "JavaScript", "CSS", "TeX", "AI"],
      link: ""
    },
    {
      title: "Toes Down — Multiplayer Study Game",
      summary: "Built a responsive React/Next.js experience for a collaborative study game with the Google Developer Student Club.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://github.com/Marqlo-C/Toes-Down",
      liveLink: "https://toesdown.vercel.app/"
    },
    {
      title: "Embergency — Wildfire Response Web App",
      summary: "Overlaid real-time wildfire data with cell-tower coverage to surface dead zones and support responders.",
      tags: ["JavaScript", "HTML", "CSS", "REST APIs", "Real-Time Data", "OpenWeatherMap", "Xweather", "Unwired Labs"],
      link: "https://github.com/Marqlo-C/Embergency"
    },
    {
      title: "Trashform — AI Waste Classifier",
      summary: "A CalHacks social impact project: built a web app that uses AI to classify waste items from images and provide instant, user-friendly recycling feedback. Frontend in JavaScript/TypeScript, with a focus on accessibility and speed.",
      tags: ["JavaScript", "TypeScript", "HTML", "CSS", "AI"],
      link: ""
    },
    {
      title: "Aggie-gility — Adaptive Aerodynamics Prototype",
      summary: "Arduino-powered model that adjusts aerodynamic surfaces on braking to increase downforce; handled programming, sensors, and motor control in a UC Davis AvenueE team.",
      tags: ["Arduino", "Embedded", "Hardware", "Sensors"],
      link: "https://www.linkedin.com/in/marq-lott/details/projects/#1727734114532"
    },
    {
      title: "Secret Message Encoder",
      summary: "Python notebook for encoding messages with probability and steganography techniques.",
      tags: ["Python", "Jupyter Notebook", "Data Science", "Probability", "Steganography", "Matplotlib", "Numpy", "Pandas"],
      link: "https://github.com/Marqlo-C/Secret-Message-Encoder"
    },
    {
      title: "Ms Pac-Man — Agent",
      summary: "Deep Q-Network (DQN) agent for Ms Pac-Man using reinforcement learning.",
      tags: ["Python", "Jupyter Notebook", "DQN", "R Learning", "AI", "Data Visualization"],
      link: "https://github.com/Marqlo-C/MsPacman-Agent"
    },
    {
      title: "Connect 4 Player — Agent",
      summary: "Python game engine with multiple AI agents (minimax, alpha-beta, Monte Carlo).",
      tags: ["Python", "AI", "Minimax", "Alpha-Beta Pruning", "Monte Carlo Simulation", "Pygame", "CLI", "Game Engine"],
      link: "https://github.com/Marqlo-C/Connect4-Agent"
    }
  ];

  const experiences = [
    {
      date: "2025 to now",
      role: "B.S. Computer Science",
      place: "UC Davis, College of Engineering",
      blurb: "Program Advisor for AvenueE Summer Bridge, mentoring 60 first-generation engineering students from low-income and underrepresented backgrounds through a two-week intensive. Building backend infrastructure for EcoCAR Mobility: migrated API keys to the server, wrote scrapers to log carshare usage data so we can see where cars stop and help underserved communities get actual access to mobility, refactored TamperMonkey to run server-side instead of in the browser, fixed the OpenAI chatbot to maintain context across conversations for people who aren't technically inclined. Worked with the Aggie Mobility project using Arduino to explore adaptive aerodynamics for emergency braking. Shipped three applications over 2025: Emergency at HackDavis, Trashform at CalHacks AI, and a Note Taking App at CalHacks with different teams. Contributed to Toes Down for Google Developer Student Club. Active in NSBE and SAA. CalHacks 2026 coming."
    },
    {
      date: "2024 to 2025",
      role: "A.S. Computer Science & Physics",
      place: "San Joaquin Delta College",
      blurb: "Spent my savings living frugally and cramming what could have been three years of coursework into two. Graduated with an Associates in Computer Science, an Associates in Physics, and one class short of an Associates in Mathematics. Maintained a 4.0 GPA. The work meant no life outside of classes and studying. Collaborated with the Physics, Mathematics, and Computer Science Club on a solar system simulation in Python that modeled orbital mechanics and gravitational interactions from first principles."
    },
    {
      date: "2020 to 2024",
      role: "Stepped back",
      place: "California",
      blurb: "Left sales. Made the intentional call to go back to school because I knew I wanted to build systems, not sell them. That decision costs you in money, time, and pride. But it forces clarity."
    },
    {
      date: "2020 to 2021",
      role: "Sr. Business Account Executive",
      place: "Spectrum Enterprise, Los Angeles",
      blurb: "Came back for a second run at Spectrum. By this point most of the region was already built out with fiber, so the work was different. Less about landing new accounts and more about selling fiber upgrades and helping existing customers plan for their growing bandwidth demands. The pool of prospects was smaller but the technical depth went deeper. Fewer people to sell to meant conversations shifted toward understanding what their actual infrastructure needed to look like three years out."
    },
    {
      date: "2020",
      role: "Regional Account Manager",
      place: "Cogent Communications, Los Angeles",
      blurb: "In my first quarter, I hit 143% of quota selling enterprise telecom infrastructure. The role involved working with customers and our engineering team to design customized network buildouts across fiber, data centers, bandwidth, VPN, and server solutions. It wasn't about moving boxes off a spec sheet. It was understanding what a customer actually needed to accomplish, then working with our engineers to design a solution that would actually work for their situation, then making sure it got implemented correctly."
    },
    {
      date: "2016 to 2020",
      role: "Sr. Business Account Executive",
      place: "Spectrum Enterprise, Los Angeles",
      blurb: "Top performer in the region for four years straight. Owned Fortune 500 accounts from initial discovery through ongoing partnership. The real work was understanding what they had to accomplish with their network, proposing the right services and solutions, then staying involved through deployment to make sure everything actually worked the way they expected. Long sales cycles force you to understand the customer's problem or you don't close the deal. The relationships that stuck were the ones where they were still happy years later."
    },
    {
      date: "2013 to 2017",
      role: "Cryptologic Technician - Networking",
      place: "US Navy, Los Angeles",
      blurb: "Spent four years in network defense and incident response. Vulnerability assessment, threat detection, rebuilding what happened after systems got hit. Systems fail in predictable ways if you understand them. Understanding how something breaks is as important as knowing how it works, maybe more so. In a results-driven world, uptime, reliability, availability, security, and privacy aren't nice-to-haves. They're what determines whether people trust your system or avoid it entirely. Understanding the underlying weaknesses is as important as understanding the design."
    }
  ];

  window.SiteData = { projects, experiences };
})();
