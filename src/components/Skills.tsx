"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Engineering",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend Systems",
    skills: ["Node.js", "Express.js", "REST API Development", "JDBC connection", "Web3 Integration", "core java"]
  },
  {
    category: "Blockchain Development",
    skills: ["Solidity", "Smart Contracts", "Ethereum", "IPFS (Pinata)", "MetaMask"]
  },
  {
    category: "AI Tools & Technologies",
    skills: ["Claude", "ChatGPT", "Prompt Engineering", "JDBC"]
  },
  {
    category: "Databases & Storage",
    skills: ["SQL", "MongoDB", "IPFS"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Linux", "CI/CD", "Git", "GitHub", "Postman", "Vercel", "Netlify"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 py-24 px-8 md:px-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">Expertise</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white tracking-tight">
            Technical<br />Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] transition-colors duration-500 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-mono tracking-wide text-zinc-400 bg-zinc-900/80 rounded-lg border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
