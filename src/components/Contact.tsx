"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      value: "benherben456@gmail.com",
      link: "mailto:benherben456@gmail.com",
      icon: <Mail className="w-5 h-5" />
    },
    {
      name: "Phone",
      value: "+91 9605156601",
      link: "tel:+919605156601",
      icon: <Phone className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      value: "Benher Basheer",
      link: "https://www.linkedin.com/in/benher-basheer/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
      )
    },
    {
      name: "GitHub",
      value: "@benherr",
      link: "https://github.com/benherr",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
      )
    }
  ];

  return (
    <section id="contact" className="relative z-20 py-32 px-5 sm:px-8 md:px-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500">What's Next?</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight mb-8">
            Let's build something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              extraordinary.
            </span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-5 glass-card border border-black/5 dark:border-zinc-800/50 bg-gradient-to-br from-black/[0.01] dark:from-white/[0.02] to-transparent hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all duration-300 rounded-2xl group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
            >
              <div className="mb-4 p-3 rounded-full bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors duration-300">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 transition-colors duration-300">{method.name}</h3>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 transition-colors duration-300">{method.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
