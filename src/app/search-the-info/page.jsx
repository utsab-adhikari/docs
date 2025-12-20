import Link from 'next/link'

export default function SearchTheInfoPage() {
  return (
    <>
      <header className="mb-8 pb-4 border-b">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">Search The Info</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">
          Search The Info Documentation
        </h1>
        <p className="text-gray-600 mt-2">
          A dedicated platform for personal research, academic articles, and technical papers.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700 mb-4">
            Search The Info is a professional content management platform designed specifically for 
            publishing and managing research papers, academic articles, and technical writings.  
            Built with modern web technologies, it provides a seamless experience for both content 
            creators and readers. 
          </p>
          <p className="text-gray-700 mb-4">
            The platform features a rich text editor for composing articles, a robust content 
            management system for organizing publications, and a clean, distraction-free reading 
            interface optimized for long-form content. 
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="text-blue-900 font-medium mb-2">
              💡 Purpose
            </p>
            <p className="text-blue-800 text-sm">
              This platform serves as a central repository for all my research work, technical 
              articles, and academic papers. It's designed to be a professional alternative to 
              traditional blogging platforms, with features tailored for academic and technical writing.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Objectives
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                1
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Professional Publishing</h3>
                <p className="text-gray-700 text-sm">
                  Provide a dedicated platform for publishing research and technical content with 
                  proper formatting and academic standards.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                2
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Content Organization</h3>
                <p className="text-gray-700 text-sm">
                  Implement a robust categorization and tagging system for easy navigation and 
                  discovery of related content.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                3
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Enhanced Reading Experience</h3>
                <p className="text-gray-700 text-sm">
                  Create a distraction-free reading environment optimized for long-form technical 
                  and academic content.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                4
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Personal Archive</h3>
                <p className="text-gray-700 text-sm">
                  Build a permanent, searchable archive of all research work and technical writings 
                  throughout my academic journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">📝</span>
                Rich Text Editor
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced WYSIWYG editor with support for code blocks, mathematical formulas, 
                images, and proper academic formatting.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">🗂️</span>
                Content Management
              </h3>
              <p className="text-gray-600 text-sm">
                Full-featured CMS for creating, editing, organizing, and publishing articles 
                with draft/published states. 
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">🔍</span>
                Advanced Search
              </h3>
              <p className="text-gray-600 text-sm">
                Full-text search across all articles with filtering by tags, categories, 
                and publication dates.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">📱</span>
                Responsive Design
              </h3>
              <p className="text-gray-600 text-sm">
                Fully responsive interface optimized for reading and writing on desktop, 
                tablet, and mobile devices. 
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Technology Foundation
          </h2>
          <p className="text-gray-700 mb-4">
            Built on a modern tech stack that prioritizes performance, scalability, and developer 
            experience: 
          </p>
          <div className="bg-gray-50 border rounded-lg p-5">
            <dl className="grid grid-cols-1 md: grid-cols-2 gap-4">
              <div>
                <dt className="font-medium text-gray-900 mb-1">Frontend Framework</dt>
                <dd className="text-gray-700 text-sm">Next.js 14 with App Router for server-side rendering and optimal performance</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 mb-1">Database</dt>
                <dd className="text-gray-700 text-sm">MongoDB for flexible, schema-less document storage</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 mb-1">UI Library</dt>
                <dd className="text-gray-700 text-sm">React 18 with modern hooks and server components</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 mb-1">Styling</dt>
                <dd className="text-gray-700 text-sm">Tailwind CSS for utility-first, responsive design</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Documentation Guide
          </h2>
          <p className="text-gray-700 mb-6">
            Explore the complete documentation to understand the platform's architecture, 
            implementation details, and deployment process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/search-the-info/architecture"
              className="group border rounded-lg p-5 hover:shadow-md hover:border-blue-300 transition-all"
            >
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                System Architecture
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Detailed overview of system design, component interactions, database schema, 
                and architectural decisions.
              </p>
              <span className="text-blue-600 text-sm font-medium">
                Read More →
              </span>
            </Link>
            
            <Link 
              href="/search-the-info/tech-stack"
              className="group border rounded-lg p-5 hover:shadow-md hover:border-blue-300 transition-all"
            >
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                Tech Stack Deep Dive
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                In-depth explanation of technologies used, why they were chosen, and how 
                they work together.
              </p>
              <span className="text-blue-600 text-sm font-medium">
                Read More →
              </span>
            </Link>
            
            <Link 
              href="/search-the-info/features"
              className="group border rounded-lg p-5 hover: shadow-md hover:border-blue-300 transition-all"
            >
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                Features & Functionality
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete guide to all platform features including the rich text editor, 
                CMS, and user interface. 
              </p>
              <span className="text-blue-600 text-sm font-medium">
                Read More →
              </span>
            </Link>
            
            <Link 
              href="/search-the-info/deployment"
              className="group border rounded-lg p-5 hover: shadow-md hover:border-blue-300 transition-all"
            >
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                Deployment Guide
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Step-by-step instructions for deploying to production, environment setup, 
                and configuration. 
              </p>
              <span className="text-blue-600 text-sm font-medium">
                Read More →
              </span>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Learning & Development Journey
          </h2>
          <p className="text-gray-700 mb-4">
            This project represents a significant milestone in my journey as a developer and researcher. 
            Building a dedicated platform for academic and technical writing required:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>Deep understanding of content management systems and their architectural patterns</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>Implementation of rich text editing with proper sanitization and security</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>Database schema design for flexible content storage and efficient querying</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>Performance optimization for fast page loads and smooth user experience</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 flex-shrink-0">•</span>
              <span>Deployment and DevOps practices for maintaining a production application</span>
            </li>
          </ul>
          <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-900 font-medium mb-2">
              🎯 Project Impact
            </p>
            <p className="text-green-800 text-sm">
              This platform has become my go-to tool for publishing research findings and technical 
              articles. It serves as both a learning project and a practical tool that I use regularly 
              to share knowledge and document my academic journey.
            </p>
          </div>
        </section>
      </article>

      <footer className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation Hub
        </Link>
        <Link 
          href="/search-the-info/architecture"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          Next: Architecture
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </footer>
    </>
  )
}