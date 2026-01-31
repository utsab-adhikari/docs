import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'

export const metadata = {
  title: "Utsab Adhikari – Documentation",
  description: "Technical documentation for completed projects",
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-12 pb-8 border-b">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Technical Documentation
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          This site contains comprehensive documentation for all completed projects.  
          Each project is documented with system architecture, technical implementation 
          details, and deployment procedures.
        </p>
        
        <div className="flex flex-wrap gap-3 text-sm">
          <a 
            href="https://utsabadhikari.me" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 underline"
          >
            <FaBriefcase className="w-4 h-4" />
            Portfolio
          </a>
          <span className="text-gray-400">•</span>
          <a 
            href="https://github.com/utsab-adhikari" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 underline"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <span className="text-gray-400">•</span>
          <a 
            href="https://linkedin.com/in/utsab-adhikari" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 underline"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <span className="text-gray-400">•</span>
          <a 
            href="mailto:contact@utsabadhikari.me"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 underline"
          >
            <FaEnvelope className="w-4 h-4" />
            contact@utsabadhikari.me
          </a>
        </div>
      </header>

      {/* Projects List */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Documented Projects
        </h2>

        <div className="space-y-6">
           {/* Bitmap Lab */}
          <article className="border-l-4 border-gray-300 pl-6 hover:border-green-600 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                <Link href="/bitmap-lab" className="hover:text-green-600">
                  Bitmap Lab
                </Link>
              </h3>
              <a 
                href="https://github.com/utsab-adhikari/bitmap-lab" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
              >
                Github
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
            
            <p className="text-gray-700 text-sm mb-3 leading-relaxed">
              A Repository and Documentation for bitmap-lab, it contains the learning journey of 
              bitmap, operations, and kernel near programming.
            </p>
            
            <div className="text-xs text-gray-600 mb-2">
              <span className="font-medium">Language:</span> C - Programming
            </div>
            
            <Link 
              href="/bitmap-lab" 
              className="text-sm text-green-600 hover:text-green-800 font-medium"
            >
              View Documentation →
            </Link>
          </article>
          {/* Search The Info */}
          <article className="border-l-4 border-gray-300 pl-6 hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                <Link href="/search-the-info" className="hover:text-blue-600">
                  Search The Info
                </Link>
              </h3>
              <a 
                href="https://searchtheinfo.utsabadhikari.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
              >
                Live
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
            
            <p className="text-gray-700 text-sm mb-3 leading-relaxed">
              A dedicated platform for publishing research papers and technical articles.  
              Features include rich text editing, content management system, and optimized 
              reading interface for long-form academic content.
            </p>
            
            <div className="text-xs text-gray-600 mb-2">
              <span className="font-medium">Stack:</span> Next.js, MongoDB, React, Tailwind CSS
            </div>
            
            <Link 
              href="/search-the-info" 
              className="text-sm text-blue-600 hover: text-blue-800 font-medium"
            >
              View Documentation →
            </Link>
          </article>

          {/* Portfolio */}
          <article className="border-l-4 border-gray-300 pl-6 hover:border-purple-600 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                <Link href="/portfolio" className="hover: text-purple-600">
                  Portfolio Website
                </Link>
              </h3>
              <a 
                href="https://utsabadhikari.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1"
              >
                Live
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
            
            <p className="text-gray-700 text-sm mb-3 leading-relaxed">
              Personal portfolio website showcasing completed projects, technical skills, 
              and professional experience. Built with modern web technologies and design 
              principles for optimal user experience.
            </p>
            
            <div className="text-xs text-gray-600 mb-2">
              <span className="font-medium">Stack:</span> Next.js, React, Tailwind CSS, Framer Motion
            </div>
            
            <Link 
              href="/portfolio" 
              className="text-sm text-purple-600 hover:text-purple-800 font-medium"
            >
              View Documentation →
            </Link>
          </article>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-12 p-6 bg-gray-50 border rounded">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          About This Documentation
        </h2>
        <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
          <p>
            This documentation hub serves as a comprehensive reference for all completed 
            projects. Each project includes detailed technical documentation covering 
            system architecture, implementation decisions, and deployment procedures. 
          </p>
          <p>
            Documentation is maintained following academic and industry standards, with 
            emphasis on clarity, completeness, and practical applicability.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Utsab Adhikari. All rights reserved.
        </p>
      </footer>
    </div>
  )
}