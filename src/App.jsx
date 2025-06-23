import React from 'react'
import Navbar from './components/Navbar'
import FloatingLayer from './components/FloatingLayer'
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

export default function App() {
  return (
    <div className="scroll-smooth bg-black text-white">
      <Navbar />

      <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-black text-white overflow-hidden">
        <FloatingLayer />
        <div className="z-10 flex flex-col md:flex-row items-center gap-20 text-center md:text-left">

          {/* Text Content */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-6xl sm:text-7xl font-bold leading-tight mb-4">
              I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-pink-400 bg-clip-text text-transparent">
                Sethuram
              </span>
              , a <br />
              <span className="bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl max-w-xl text-gray-300 mb-6">
              Sophomore at Purdue University studying Computer Science with a growing focus in Artificial Intelligence
            </p>

            {/* Centered Button */}
            <a
              href="#contact"
              className="px-10 py-5 text-xl sm:text-2xl bg-gradient-to-r from-indigo-500 to-pink-400 text-white rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>

          {/* Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
            <img
              src="/images/my-profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <section id="experience" className="min-h-screen px-6 py-20 bg-black text-white border-t border-gray-800">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold">My Experience</h1>
  </div>

  <div className="relative mx-auto max-w-6xl">
    {/* Vertical Timeline Line */}
    <div className="absolute left-4 sm:left-8 top-0 h-full w-1.5 bg-indigo-500"></div>

    <div className="space-y-20">
      {[
        {
          logo: "/images/logos/webbits.jpg",
          alt: "WebBits logo",
          title: "WebBits – Entry-Level Software Developer",
          titleColor: "text-indigo-300",
          date: "June 2025 – Present • Internship",
          points: ["Incoming Summer 2025 Intern."],
        },
        {
          logo: "/images/logos/zayan.png",
          alt: "Zayan logo",
          title: "Zayan Soft Tech – AI & Python Intern",
          titleColor: "text-pink-300",
          date: "May 2025 – Present • Internship",
          points: [
            "Built a predictive model for customer behavior using real-world data in Google Colab.",
            "Developing an invoice app with PDF export and custom GUI using automation tools.",
          ],
        },
        {
          logo: "/images/logos/outamation.jpg",
          alt: "Outamation logo",
          title: "Extern (Outamation) – AI-Powered Workflow Automation Extern",
          titleColor: "text-indigo-300",
          date: "Mar 2025 – May 2025 • Externship",
          points: [
            "Built a RAG pipeline with LlamaIndex and open-source models.",
            "Automated document processing using Python (text annotation, NLP, data extraction).",
            "Extracted structured insights to enhance workflow efficiency.",
          ],
        },
        {
          logo: "/images/logos/bricks.jpg",
          alt: "Bricks 4 Kidz logo",
          title: "Bricks 4 Kidz – Robotics Instructor",
          titleColor: "text-pink-300",
          date: "Apr 2022 – May 2024 • Part-time",
          points: [
            "Taught introductory robotics and programming using LEGOs and block coding tools.",
            "Created engaging classroom environments for young students.",
          ],
        },
      ].map((item, idx) => (
        <div key={idx} className="relative pl-10 sm:pl-16">
          <div
            className={`absolute ${
              idx % 2 === 0 ? "bg-indigo-400" : "bg-pink-400"
            } left-3.5 sm:left-6 top-1 w-5 h-5 rounded-full border-2 border-white`}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <img
                src={item.logo}
                alt={item.alt}
                className="w-28 h-28 sm:w-40 sm:h-40 object-contain ml-2 sm:ml-4"
              />
              <div className="flex-1 min-w-0 break-words">
                <h3 className={`text-2xl sm:text-3xl font-semibold ${item.titleColor}`}>
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-400 mb-2">{item.date}</p>
                <ul className="list-disc list-outside text-gray-300 text-base sm:text-xl space-y-2 pl-5 pr-2">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="work" className="min-h-screen px-6 py-20 bg-black text-white border-t border-gray-800">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold">My Projects</h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

    {/* RAG Pipeline */}
    <motion.div
      className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-2xl font-semibold text-center text-indigo-300 mb-4">RAG Pipeline</h3>
      <img
        src="/images/projects/rag-pipeline.png"
        alt="RAG Pipeline Screenshot"
        className="w-full max-h-[400px] object-contain transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 hover:shadow-2xl"
      />
      <p className="text-gray-300 text-base mt-4 mb-4">
        Developed a Retrieval-Augmented Generation pipeline using LlamaIndex and open-source language models to enhance document-based question answering. Integrated Colab and a Slideshow walkthrough to demonstrate architecture, embedding flow, and retrieval logic in a practical context.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="https://colab.research.google.com/drive/1KAsh7ByAS9_q-WccGi_noplwFT7WuG51?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm">Google Colab</a>
        <a href="https://docs.google.com/presentation/d/1bnpzDRatNcT1pWgyPsrD9huPUvcht80vi6tmLRyEIFE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm">Slides</a>
      </div>
    </motion.div>

    {/* Invoice App */}
    <motion.div
      className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-2xl font-semibold text-center text-pink-300 mb-4">Invoice-Generation App</h3>
      <img
        src="/images/projects/invoice-app.png"
        alt="Invoice App Screenshot"
        className="rounded mb-4 object-contain w-full"
        style={{
          height: '18rem',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)' }}
      />
      <p className="text-gray-300 text-base mb-4">
        Implementing a dynamic invoice application with a custom GUI and automated PDF export functionality. Combining backend automation with user-centric frontend design to streamline billing workflows for clients (still in development).
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="https://github.com/sethjkamal/invoice-backend" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-sm">GitHub – Backend</a>
        <a href="https://github.com/sethjkamal/invoice-frontend" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-sm">GitHub – Frontend</a>
      </div>
    </motion.div>

    {/* AI ChatBot */}
    <motion.div
      className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-2xl font-semibold text-center text-indigo-300 mb-4">AI ChatBot</h3>
      <img
        src="/images/projects/ai-chatbot.png"
        alt="AI ChatBot Screenshot"
        className="rounded mb-4 object-contain w-full transition-transform duration-300"
        style={{ height: '16rem', transform: 'scale(1)' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <p className="text-gray-300 text-base mt-4 mb-4">
        Building a document-aware chatbot tailored to Purdue’s academic policies using PDF parsing and context-aware responses. Enabling natural language queries over complex institutional documents (still in development).
      </p>
      <a href="https://github.com/sethjkamal/purdue-chatbot" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm inline-block">GitHub</a>
    </motion.div>

    {/* Portfolio Website */}
    <motion.div
      className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-2xl font-semibold text-center text-pink-300 mb-4">Portfolio Website</h3>
      <img
        src="/images/projects/portfolio.png"
        alt="Portfolio Screenshot"
        className="w-full max-h-[400px] object-contain transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 hover:shadow-2xl"
      />
      <p className="text-gray-300 text-base mt-4 mb-4">
        Developing this fully responsive portfolio using React and Tailwind CSS. Features smooth animations and a modern, indigo-pink theme for both a personal/professional and unique aesthetic (continuous development).
      </p>
      <a href="https://github.com/sethjkamal/portfolio" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-sm inline-block">GitHub</a>
    </motion.div>
  </div>

  {/* Skills Section */}
  <motion.div
    className="max-w-7xl mx-auto mt-20 px-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Skills</h2>

    <div className="mb-6">
      <h3 className="text-xl font-semibold text-pink-300 mb-2">Languages & Tools</h3>
      <p className="text-gray-300 text-base leading-relaxed">
        Java, Python, C, SQL, HTML, CSS, JavaScript, React, Tailwind CSS, Framer Motion, Streamlit, LangChain, HuggingFace, 
        LlamaIndex, Google Colab, GitHub, Netlify, Visual Studio (VS) Code, Pandas, NumPy, JUnit Testing.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-pink-300 mb-2">Concepts</h3>
      <p className="text-gray-300 text-base leading-relaxed">
        Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), Open-Source LLMs, Object-Oriented Programming (OOP), 
        Algorithms, Technical Communication, Workflow Automation, Document Processing.
      </p>
    </div>
  </motion.div>
</section>

      <section id="contact" className="min-h-screen px-6 py-20 bg-black text-white border-t border-gray-800">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
    
    {/* Animated contact details */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: false }}
      className="flex flex-col items-center gap-3 text-gray-300 text-lg"
    >
      <div className="flex items-center gap-2">
        <HiOutlineMail className="text-indigo-400 text-2xl" />
        <a href="mailto:jeevanan@purdue.edu" className="hover:underline">
          jeevanan@purdue.edu
        </a>
      </div>
      <div className="flex items-center gap-2">
        <HiOutlinePhone className="text-indigo-400 text-2xl" />
        <a href="tel:+19088302073" className="hover:underline">
          +1 (908) 830-2073
        </a>
      </div>
    </motion.div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
    className="max-w-3xl mx-auto space-y-10"
  >
    {/* Contact Form */}
    <form
      action="https://formspree.io/f/xeokzgbb"
      method="POST"
      className="space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 bg-gray-800 text-white rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-3 bg-gray-800 text-white rounded"
        />
      </motion.div>

      <motion.input
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        type="email"
        name="_replyto"
        placeholder="Email"
        required
        className="w-full p-3 bg-gray-800 text-white rounded"
      />

      <motion.textarea
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        name="message"
        placeholder="Message"
        required
        rows="5"
        className="w-full p-3 bg-gray-800 text-white rounded"
      ></motion.textarea>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded shadow"
      >
        Send Message
      </motion.button>
    </form>

    {/* Social Links */}
    <div className="flex flex-wrap justify-center gap-6">
      <a href="https://www.linkedin.com/in/seth-j-kamal-741581326/" target="_blank" rel="noopener noreferrer">
        <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
      </a>
      <a href="https://github.com/sethjkamal/" target="_blank" rel="noopener noreferrer">
        <img src="/images/icons/github.svg" alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.instagram.com/seth_jkamal/" target="_blank" rel="noopener noreferrer">
        <img src="/images/icons/instagram.svg" alt="Instagram" className="w-10 h-10 hover:scale-110 transition-transform" />
      </a>
    </div>

    {/* Resume Download */}
    <div className="text-center">
      <a
        href="/resume.pdf"
        download
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded text-sm inline-block transition-transform hover:-translate-y-1 hover:scale-105"
      >
        Download Resume
      </a>
    </div>
  </motion.div>
</section>

        <footer className="bg-black text-gray-400 text-center px-6 py-6 border-t border-gray-800 mt-12">
  <p className="text-sm sm:text-base">
    Copyright © 2025 Sethuram Jeevanandham Kamalakannan. All rights reserved.
  </p>
  <p className="text-xs sm:text-sm mt-1 text-gray-500">Last updated June 2025</p>
</footer>

    </div>
  )
}