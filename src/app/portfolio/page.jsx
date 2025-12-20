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
                    <li className="text-gray-700 font-medium">Portfolio</li>
                </ol>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900">
                Portfolio
            </h1>
            <p className="text-gray-600 mt-2">
                A curated showcase of projects, case studies, and skills demonstrating experience in software development.
            </p>
        </header>

        <article className="prose prose-lg max-w-none">
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Overview
                </h2>
                <p className="text-gray-700 mb-4">
                    This portfolio highlights end‑to‑end project execution, technical depth, and product thinking. 
                    Each project includes goals, architecture, implementation details, and measurable impact.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                    <p className="text-blue-900 font-medium mb-2">
                        💡 Mission
                    </p>
                    <p className="text-blue-800 text-sm">
                        Present work in a clear, professional manner with focus on outcomes, code quality, and user experience.
                    </p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Key Objectives
                </h2>
                <div className="space-y-3">
                    <div className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5"> 1
                        </span>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-1">Showcase Projects</h3>
                            <p className="text-gray-700 text-sm">
                                Highlight real-world applications, features, and the technical decisions behind them.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                            2
                        </span>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-1">Demonstrate Skills</h3>
                            <p className="text-gray-700 text-sm">
                                Communicate expertise across frontend, backend, DevOps, and performance optimization.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                            3
                        </span>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-1">Easy Discovery</h3>
                            <p className="text-gray-700 text-sm">
                                Filter by tags, categories, and technologies for fast navigation.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-medium mt-0.5">
                            4
                        </span>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-1">Contact & Availability</h3>
                            <p className="text-gray-700 text-sm">
                                Provide clear CTAs for collaboration, hiring, and consulting inquiries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Featured Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-blue-600">🗂️</span>
                            Project Cards & Case Studies
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Rich project pages with goals, tech stack, architecture diagrams, challenges, and outcomes.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-blue-600">🏷️</span>
                            Tagging & Filters
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Browse by category, technology, difficulty, and impact for quick discovery.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-blue-600">🔍</span>
                            Search & SEO
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Fast search with SEO-friendly metadata, sitemaps, and structured data.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-blue-600">📱</span>
                            Responsive Design
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Optimized for desktop, tablet, and mobile with accessible UI patterns.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Technology Foundation
                </h2>
                <p className="text-gray-700 mb-4">
                    Built with a modern stack focused on performance, developer experience, and reliability:
                </p>
                <div className="bg-gray-50 border rounded-lg p-5">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <dt className="font-medium text-gray-900 mb-1">Frontend Framework</dt>
                            <dd className="text-gray-700 text-sm">Next.js 14 with App Router</dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900 mb-1">Database</dt>
                            <dd className="text-gray-700 text-sm">MongoDB (content, tags, metadata)</dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900 mb-1">UI Library</dt>
                            <dd className="text-gray-700 text-sm">React 18 + modern hooks</dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900 mb-1">Styling</dt>
                            <dd className="text-gray-700 text-sm">Tailwind CSS + Typography plugin</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Explore the Portfolio
                </h2>
                <p className="text-gray-700 mb-6">
                    Browse featured work, skills, and ways to connect.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link 
                        href="/portfolio/projects"
                        className="group border rounded-lg p-5 hover:shadow-md hover:border-blue-300 transition-all"
                    >
                        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                            Projects & Case Studies
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Deep dives into architecture, challenges, and outcomes for selected projects.
                        </p>
                        <span className="text-blue-600 text-sm font-medium">
                            Explore →
                        </span>
                    </Link>
                    
                    <Link 
                        href="/portfolio/skills"
                        className="group border rounded-lg p-5 hover:shadow-md hover:border-blue-300 transition-all"
                    >
                        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                            Skills & Tools
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Technologies, frameworks, and tools used across projects.
                        </p>
                        <span className="text-blue-600 text-sm font-medium">
                            View →
                        </span>
                    </Link>
                    
                    <Link 
                        href="/portfolio/open-source"
                        className="group border rounded-lg p-5 hover:shadow-md hover:border-blue-300 transition-all"
                    >
                        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                            Open Source
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Contributions, libraries, and community projects.
                        </p>
                        <span className="text-blue-600 text-sm font-medium">
                            See work →
                        </span>
                    </Link>
                    
                    <Link 
                        href="/portfolio/contact"
                        className="group border rounded-lg p-5 hover:shadow-md hover:border-blue-300 transition-all"
                    >
                        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-700">
                            Contact & Availability
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Get in touch for collaborations, consulting, or opportunities.
                        </p>
                        <span className="text-blue-600 text-sm font-medium">
                            Reach out →
                        </span>
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Growth & Impact
                </h2>
                <p className="text-gray-700 mb-4">
                    Building these projects sharpened skills in system design, performance, accessibility, and DX.
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                        <span className="text-blue-600 flex-shrink-0">•</span>
                        <span>Architecting scalable frontends and APIs</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 flex-shrink-0">•</span>
                        <span>Security, testing, and CI/CD best practices</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 flex-shrink-0">•</span>
                        <span>Performance tuning and UX polish</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 flex-shrink-0">•</span>
                        <span>Clear documentation and knowledge sharing</span>
                    </li>
                </ul>
                <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-900 font-medium mb-2">
                        🎯 Outcome
                    </p>
                    <p className="text-green-800 text-sm">
                        A professional, maintainable portfolio that communicates value, technical depth, and real impact.
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
                Back to Home
            </Link>
            <Link 
                href="/portfolio/projects"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
            >
                Next: Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </footer>
    </>
)
}