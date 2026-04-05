"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications.(MCA)",
    institution: "College of Engineering Vadakara.",
    period: "2023 - 2025",
    University: "APJ Abdul Kalam Technological University",
    cgpa: "7.3",
  },
  {
    degree: "Bachelor of Computer Applications.(BCA)",
    institution: "Nilgiri College of Arts and Science.",
    period: "2019 -2022",
    University: "Bharathiar University.",
    cgpa: "7.3",
  },
  {
    degree: "Higher Secondary Education.",
    institution: "St Joseph's HSS Kallody.",
    period: "2017 -2019",
    University: "Kerala State Education Board.",
    cgpa: "7.3",
  },
  {
    degree: "SSLC",
    institution: "St Joseph's HSS Kallody.",
    period: "2016 -2017",
    University: "Kerala State Education Board.",
    cgpa: "90%",
  }
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 py-24 px-8 md:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">Academic Background</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-8 bg-zinc-900/40 border-white/5 hover:bg-zinc-800/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xs font-mono tracking-widest text-zinc-500 mb-2 block">{edu.period}</span>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-blue-400 mb-4">{edu.institution}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {edu.University}
              </p>
              {edu.cgpa && (
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">CGPA / Grade</span>
                  <span className="text-sm font-bold text-blue-400">{edu.cgpa}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
