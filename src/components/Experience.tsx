"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Java Fullstack Developer Trainee",
    company: "Qspiders,Kochi",
    period: "2025 - 2026",
    description: [
      "Trained in Core Java, OOP concepts.",
      "Hands-on practice in SQL, JDBC.",
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Built mini-projects using Java and database integration.",
      "Familiar with MVC architecture and backend integration."
    ]
  },

];

export default function Experience() {
  return (
    <section id="experience" className="relative z-20 py-24 px-5 sm:px-8 md:px-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">Career Path</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Training / Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 pl-8 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="mb-16 relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-zinc-50 dark:bg-zinc-950 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-colors duration-500" />

              <div className="glass-card p-8 bg-gradient-to-br from-white/[0.02] to-transparent group hover:bg-white/[0.05] transition-colors duration-500 rounded-2xl">
                <span className="text-sm font-mono tracking-widest text-blue-400 mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                <h4 className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">{exp.company}</h4>
                <ul className="text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-2xl space-y-2 list-inside list-disc marker:text-blue-500">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
