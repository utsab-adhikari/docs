import Link from 'next/link'

export default function TestPage() {
  return (
    <>
      <header className="mb-8 pb-4 border-b bg-white">
        <nav className="text-sm text-gray-500 mb-4 font-mono" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">
                 <Link href="/bitmap-lab" className="hover:text-blue-600">bitmap-lab</Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">test</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 font-mono">
          bitmap-lab // Test Directory
        </h1>
        <p className="text-gray-700 mt-2 max-w-2xl font-mono text-sm">
          This Directory contains various test, understanding cases and experiments focused on bitmap operations
          and low-level C programming. Each test is designed to help understand memory layout,
          pixel manipulation, and other fundamental concepts.
        </p>
      </header>

      <section className="mt-8 font-mono">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          test overview
        </h2>

        <p className="text-sm text-gray-700 mb-4 max-w-2xl">
          The <code>test/</code> directory is a playground of small, focused C programs.
          Each test has its own page with the full source code, explanation, and
          notes about how it connects to bitmap and kernel-near thinking.
        </p>

        {/* Quick jump navigation */}
        <div className="mb-6 text-xs text-gray-600 flex flex-wrap gap-3">
          <span className="uppercase tracking-wide text-gray-500">jump to:</span>
          <Link
            href="#t01"
            className="px-2 py-1 rounded border border-gray-200 hover:border-blue-400 hover:text-blue-700"
          >
            T01 — shifting
          </Link>
        </div>

        {/* Tests list */}
        <div className="space-y-3 text-sm">
          <article
            id="t01"
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors"
          >
            <div className="flex items-center justify-between gap-3 mb-1">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">T01</span>
                <Link
                  href="/bitmap-lab/test/T01_UnderstandingShifting.c"
                  className="text-blue-600 hover:text-blue-800"
                >
                  T01_UnderstandingShifting.c
                </Link>
              </div>
              <span className="text-xs text-gray-500">bitwise shifting · masks</span>
            </div>
            <p className="text-gray-700">
              Bitwise left/right shifts and how they change the binary representation.
              Great for building intuition around masks and powers of two.
            </p>
          </article>

          <article className="border border-dashed border-gray-200 rounded-lg p-4 text-gray-500 italic">
            <p>
            — More experiments will be added incrementally as the bitmap-lab
              learning path grows.
            </p>
          </article>
        </div>
      </section>


      <footer className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link 
          href="/bitmap-lab" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Bitmap Lab
        </Link>
        <span className="text-xs text-gray-500 font-mono">
          $ bitmap-lab   # documentation before clever abstractions
        </span>
      </footer>
    </>
  )
}
