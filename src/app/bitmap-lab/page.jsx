import Link from 'next/link'

export default function BitmapLabPage() {
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
              <span className="lowercase">bitmap-lab</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 font-mono">
          bitmap-lab // documentation
        </h1>
        <p className="text-gray-700 mt-2 max-w-2xl font-mono text-sm">
          Learning repository for bitmap operations and kernel-near C programming. Focus on
          understanding memory layout, pixel math, and low level primitives first, with
          documentation alongside every experiment.
        </p>
      </header>

      <article className="max-w-none space-y-10 font-mono text-sm">
        {/* Terminal Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            repository overview
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <p className="text-xs font-mono text-gray-500 truncate">
                utsab@linux:~/repos/bitmap-lab
              </p>
            </div>

            {/* Terminal Body */}
            <div className="bg-gray-900 text-green-200 font-mono text-xs sm:text-sm px-4 py-3 space-y-2">
              <p className="text-gray-400">
                # C only, linux first, documentation driven learning
              </p>
              <p>
                <span className="text-green-400">$</span> git clone https://github.com/utsab-adhikari/bitmap-lab
              </p>
              <p>
                <span className="text-green-400">$</span> cd bitmap-lab
              </p>
              <p>
                <span className="text-green-400">$</span> tree -L 1
              </p>
              <pre className="pl-4 text-green-100 whitespace-pre overflow-x-auto">
src/
include/
test/
build/
docs/
              </pre>

              <p className="mt-3">
                <span className="text-green-400">$</span> make && ./build/bitmap_lab_demo
              </p>
              <p className="pl-4 text-green-100">
                ▸ runs small C programs that modify raw pixel buffers.
              </p>
              <p className="pl-4 text-green-100">
                ▸ every experiment is paired with documentation inside this site.
              </p>
            </div>
          </div>
        </section>

        {/* Directories */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            directories
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm">
            <article className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">src/</span>
                  <Link href="/bitmap-lab/src" className="text-blue-600 hover:text-blue-800">
                    C source files
                  </Link>
                </div>
                <span className="text-xs text-gray-500">implementation</span>
              </div>
              <p className="text-gray-700">
                Core C programs that work with raw pixel buffers, bit operations and
                small framebuffer-like abstractions.
              </p>
            </article>

            <article className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">include/</span>
                  <Link href="/bitmap-lab/include" className="text-blue-600 hover:text-blue-800">
                    headers
                  </Link>
                </div>
                <span className="text-xs text-gray-500">interfaces</span>
              </div>
              <p className="text-gray-700">
                Header files that define structs, function signatures and constants used
                across the bitmap-lab experiments.
              </p>
            </article>

            <article className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">test/</span>
                  <Link href="/bitmap-lab/test" className="text-blue-600 hover:text-blue-800">
                    tests &amp; understandings
                  </Link>
                </div>
                <span className="text-xs text-gray-500">learning</span>
              </div>
              <p className="text-gray-700">
                Small, focused C programs like <code>T01_UnderstandingShifting.c</code> that
                document one concept at a time.
              </p>
            </article>

            <article className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">build/</span>
                  <Link href="/bitmap-lab/build" className="text-blue-600 hover:text-blue-800">
                    binaries
                  </Link>
                </div>
                <span className="text-xs text-gray-500">artifacts</span>
              </div>
              <p className="text-gray-700">
                Compiled outputs from <code>make</code> commands. Run these from a terminal to
                see behavior, then come back here to read the explanations.
              </p>
            </article>
          </div>
        </section>

        {/* Learning Flow */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            learning flow
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm">
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">1. clone &amp; build</p>
              <p className="text-gray-800">
                ▸ <code>git clone</code>, <code>cd bitmap-lab</code>, then <code>make</code> to build the
                small demos.
              </p>
              <p className="text-gray-800">
                ▸ run binaries from <code>build/</code> while reading the matching docs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">2. read tests</p>
              <p className="text-gray-800">
                ▸ start with <Link href="/bitmap-lab/test" className="text-blue-600 hover:text-blue-800">test/</Link>
                to understand bit shifts, masks and basic operations.
              </p>
              <p className="text-gray-800">
                ▸ use each test page as a mini lab notebook entry.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">3. modify src/</p>
              <p className="text-gray-800">
                ▸ once concepts are clear, jump into <code>src/</code> to change the
                implementations.
              </p>
              <p className="text-gray-800">
                ▸ keep experiments small and commit frequently.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">4. document as you go</p>
              <p className="text-gray-800">
                ▸ for any new experiment, add a short page under the relevant
                directory (usually <code>test/</code>).
              </p>
              <p className="text-gray-800">
                ▸ keep the linux/terminal feel but explain every step in plain text.
              </p>
            </div>
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
        <span className="text-xs text-gray-500 font-mono">
          $ bitmap-lab   # documentation before clever abstractions
        </span>
      </footer>
    </>
  )
}
