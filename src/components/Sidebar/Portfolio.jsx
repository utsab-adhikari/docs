'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PortfolioSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href:  '/portfolio', label:  'Overview' },
    { href: '/portfolio/architecture', label: 'Architecture' },
    { href: '/portfolio/tech-stack', label: 'Tech Stack' },
    { href: '/portfolio/features', label: 'Features' },
    { href: '/portfolio/deployment', label: 'Deployment' },
  ]

  return (
    <div className="sticky top-8 space-y-6">
      {/* Project Info Card */}
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-medium text-gray-900 mb-2">
            Portfolio Documentation
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          A collection of my projects and works, showcasing my skills and experience in software development. 
        </p>
        <a 
          href="https://utsabadhikari.me" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-600 hover: text-blue-800 font-medium"
        >
          Visit Live Site
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Navigation */}
      <nav>
        <h3 className="font-semibold mb-3 text-gray-700">
          Documentation Sections
        </h3>
        <ul className="space-y-2">
          {navItems. map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-800 font-medium'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item. label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Project Details */}
      <div className="pt-4 border-t">
        <h3 className="font-semibold mb-3 text-gray-700">
          Project Details
        </h3>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="font-medium text-gray-700">Status</dt>
            <dd className="text-green-700">✅ Production Ready</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700">Last Updated</dt>
            <dd className="text-gray-600">December 18, 2025</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700">Version</dt>
            <dd className="text-gray-600">v1.0.0</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700">Repository</dt>
            <dd>
              <a 
                href="https://github.com/utsab-adhikari/portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub →
              </a>
            </dd>
          </div>
        </dl>
      </div>

      {/* Tech Stack Quick View */}
      <div className="pt-4 border-t">
        <h3 className="font-semibold mb-3 text-gray-700">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Next.js
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            MongoDB
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            React
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  )
}