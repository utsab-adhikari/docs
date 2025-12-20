import Link from 'next/link'

export const metadata = {
  title: 'Architecture',
  description: 'System architecture and design of Search The Info platform',
}

export default function ArchitecturePage() {
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
            <li>
              <Link href="/search-the-info" className="hover:text-blue-600">Search The Info</Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">Architecture</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">
          System Architecture
        </h1>
        <p className="text-gray-600 mt-2">
          High-level design and architectural decisions behind Search The Info. 
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Architecture Overview
          </h2>
          <p className="text-gray-700 mb-4">
            Search The Info follows a modern, full-stack JavaScript architecture built on the 
            Next.js framework. The system is designed with separation of concerns, scalability, 
            and maintainability as core principles.
          </p>
          <div className="bg-gray-50 border rounded-lg p-6 mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Architecture Layers</h3>
            <pre className="text-sm text-gray-800 font-mono overflow-x-auto"><code>{`┌─────────────────────────────────────────┐
│         Presentation Layer              │
│    (Next.js Pages & Components)         │
└────────────────┬────────────────────────┘
                 │
┌────────────────┴────────────────────────┐
│         Application Layer               │
│      (API Routes & Business Logic)      │
└────────────────┬────────────────────────┘
                 │
┌────────────────┴────────────────────────┐
│           Data Layer                    │
│  (MongoDB Database & Data Models)       │
└─────────────────────────────────────────┘`}</code></pre>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            System Components
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Frontend (Presentation Layer)
              </h3>
              <p className="text-gray-700 mb-3">
                Built with Next.js 14 App Router and React Server Components for optimal performance: 
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Server Components:</strong> For static content and initial page loads</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Client Components: </strong> For interactive elements like the rich text editor</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Tailwind CSS:</strong> For responsive, utility-first styling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Next/Image:</strong> For optimized image loading and performance</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Backend (Application Layer)
              </h3>
              <p className="text-gray-700 mb-3">
                API routes handle business logic and data operations:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">•</span>
                  <span><strong>RESTful API:</strong> CRUD operations for articles and content</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">•</span>
                  <span><strong>Authentication:</strong> Session-based authentication for admin access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">•</span>
                  <span><strong>Validation:</strong> Input validation and sanitization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">•</span>
                  <span><strong>Error Handling:</strong> Centralized error handling and logging</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Database (Data Layer)
              </h3>
              <p className="text-gray-700 mb-3">
                MongoDB provides flexible document storage: 
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-purple-600 flex-shrink-0">•</span>
                  <span><strong>Schema Design:</strong> Flexible documents for articles with rich content</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 flex-shrink-0">•</span>
                  <span><strong>Indexing:</strong> Optimized indexes for search and queries</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 flex-shrink-0">•</span>
                  <span><strong>Aggregation:</strong> Complex queries for filtering and categorization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Database Schema
          </h2>
          <p className="text-gray-700 mb-4">
            The MongoDB schema is designed to support flexible content while maintaining structure:
          </p>
          <div className="bg-gray-50 border rounded-lg p-5">
            <h3 className="font-medium text-gray-900 mb-3">Articles Collection</h3>
            <pre className="text-sm text-gray-800 font-mono overflow-x-auto"><code>{`{
  _id: ObjectId,
  title: String,
  slug: String,              // URL-friendly identifier
  content: String,           // Rich text HTML content
  excerpt: String,           // Short description
  author: {
    name: String,
    email: String
  },
  tags: [String],            // Array of tags
  category: String,
  status: String,            // 'draft' or 'published'
  featuredImage: {
    url: String,
    alt: String
  },
  metadata: {
    readingTime: Number,     // Estimated reading time
    wordCount: Number,
    lastModified: Date
  },
  createdAt: Date,
  publishedAt: Date,
  updatedAt: Date
}`}</code></pre>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Data Flow
          </h2>
          <p className="text-gray-700 mb-4">
            Understanding how data flows through the system:
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                1
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">User Request</h3>
                <p className="text-gray-700 text-sm">
                  Browser sends request to Next.js server (e.g., viewing an article)
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                2
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Server-Side Rendering</h3>
                <p className="text-gray-700 text-sm">
                  Next. js fetches data from MongoDB during server rendering
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                3
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Data Processing</h3>
                <p className="text-gray-700 text-sm">
                  Article data is formatted, sanitized, and prepared for display
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                4
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">HTML Generation</h3>
                <p className="text-gray-700 text-sm">
                  Complete HTML page is generated on the server with article content
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                5
              </span>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Response</h3>
                <p className="text-gray-700 text-sm">
                  Fully rendered page is sent to browser, client-side JavaScript hydrates interactive elements
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Architectural Decisions
          </h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Why Next.js? </h3>
              <p className="text-gray-700 text-sm">
                Next.js provides server-side rendering for excellent SEO, built-in API routes 
                eliminating the need for a separate backend, and optimal performance through 
                automatic code splitting and image optimization.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Why MongoDB?</h3>
              <p className="text-gray-700 text-sm">
                MongoDB's document model is perfect for storing articles with varying structures 
                and rich content.  It allows flexible schema evolution as features are added without 
                requiring database migrations. 
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Why Server Components?</h3>
              <p className="text-gray-700 text-sm">
                React Server Components reduce JavaScript bundle size, improve initial page load 
                times, and enable direct database access from components without exposing API endpoints.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Performance Optimizations
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
              <div>
                <strong>Static Site Generation: </strong> Pre-render article pages at build time for instant loading
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
              <div>
                <strong>Incremental Static Regeneration:</strong> Update static pages without full rebuilds
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
              <div>
                <strong>Database Indexing:</strong> Optimized indexes on frequently queried fields
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
              <div>
                <strong>Image Optimization:</strong> Next/Image for automatic responsive images
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
              <div>
                <strong>Code Splitting:</strong> Automatic chunking for optimal bundle sizes
              </div>
            </li>
          </ul>
        </section>
      </article>

      <footer className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link 
          href="/search-the-info" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous:  Overview
        </Link>
        <Link 
          href="/search-the-info/tech-stack"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          Next: Tech Stack
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </footer>
    </>
  )
}