"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering Vadakara",
    period: "2023 - 2025",
    University: "APJ Abdul Kalam Technological University",
    cgpa: "7.3",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Nilgiri College of Arts and Science",
    period: "2019 - 2022",
    University: "Bharathiar University",
    cgpa: "7.3",
  },
  {
    degree: "Higher Secondary Education",
    institution: "St Joseph's HSS Kallody",
    period: "2017 - 2019",
    University: "Kerala State Education Board",
    cgpa: "7.3",
  },
  {
    degree: "SSLC",
    institution: "St Joseph's HSS Kallody",
    period: "2016 - 2017",
    University: "Kerala State Education Board",
    cgpa: "90%",
  }
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 py-32 px-5 sm:px-8 md:px-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Education & Certifications.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto cursor-default">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 p-6 md:p-8 rounded-[2rem] glass-card bg-gradient-to-r from-zinc-900/5 dark:from-zinc-900/40 to-transparent hover:from-white/40 dark:hover:from-zinc-800/60 hover:to-zinc-900/5 dark:hover:to-zinc-900/20 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md dark:shadow-none"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />
              
              {/* Left: Year & Icon */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:w-32 shrink-0 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 group-hover:-rotate-3">
                  <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <span className="text-sm font-mono tracking-widest text-zinc-600 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {edu.period}
                </span>
              </div>

              {/* Middle: Details */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-zinc-700 dark:text-zinc-300 mb-1">
                  {edu.institution}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed font-mono opacity-80">
                  {edu.University}
                </p>
              </div>

              {/* Right: CGPA / Grade */}
              {edu.cgpa && (
                <div className="md:w-32 shrink-0 md:text-right mt-2 md:mt-0 relative z-10">
                  <div className="inline-flex flex-col items-start md:items-end p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-all duration-500">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Grade</span>
                    <span className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">{edu.cgpa}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
