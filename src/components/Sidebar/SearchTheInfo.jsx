'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaTimes, FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

export default function SearchTheInfoSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href:  '/search-the-info', label: 'Overview' },
    { href: '/search-the-info/architecture', label: 'Architecture' },
    { href:  '/search-the-info/tech-stack', label: 'Tech Stack' },
    { href:  '/search-the-info/features', label: 'Features' },
    { href: '/search-the-info/deployment', label:  'Deployment' },
  ]

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ?  <IoClose className="w-6 h-6" /> : <FaBars className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white/10 backdrop-blur-sm z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 lg:top-8 h-screen lg:h-auto
          w-80 lg:w-full
          bg-white lg:bg-transparent
          z-40 lg:z-0
          transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          border-r lg:border-r-0
          p-6 lg:p-0
        `}
      >
        <div className="space-y-6">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between pb-4 border-b">
            <h2 className="text-lg font-bold text-gray-900">Documentation</h2>
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <FaTimes className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Project Info Card */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Search The Info
            </h3>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              Research and article platform for academic papers and technical writings. 
            </p>
            <a
              href="https://searchtheinfo.utsabadhikari.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover: text-blue-800 font-medium"
            >
              Visit Live Site
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="font-semibold mb-3 text-gray-700 text-sm">
              Documentation
            </h3>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className={`block py-2 px-3 rounded text-sm transition-colors ${
                      pathname === item.href
                        ? 'bg-blue-100 text-blue-900 font-medium'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Project Details */}
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-3 text-gray-700 text-sm">
              Project Info
            </h3>
            <dl className="space-y-2 text-xs">
              <div className="flex justify-between">
                <dt className="text-gray-600">Status</dt>
                <dd className="text-green-700 font-medium">Production</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Version</dt>
                <dd className="text-gray-900 font-medium">v1.0.0</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Updated</dt>
                <dd className="text-gray-900">Dec 2025</dd>
              </div>
              <div className="pt-2 border-t">
                <a
                  href="https://github.com/utsab-adhikari/search-the-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-medium"
                >
                  <FaGithub className="w-3. 5 h-3.5" />
                  View Repository
                </a>
              </div>
            </dl>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-3 text-gray-700 text-sm">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                Next.js
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                MongoDB
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                React
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Back to Home - Mobile */}
          <div className="lg:hidden pt-4 border-t">
            <Link
              href="/"
              onClick={closeSidebar}
              className="block py-2 px-3 text-sm text-gray-700 hover: bg-gray-100 rounded transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}