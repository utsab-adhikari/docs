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
            <li className="text-gray-700 font-medium">Bitmap Lab</li>
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
            overview
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

        {/* Usage & Flow */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            typical workflow
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm">
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">$ make init</p>
              <p className="text-gray-800">
                ▸ compile initial C examples that allocate and clear bitmap buffers.
              </p>
              <p className="text-gray-800">
                ▸ explore how width, height, pitch and color depth map to memory.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">$ cd src && vim bitmap_draw.c</p>
              <p className="text-gray-800">
                ▸ edit C code that writes directly into pixel buffers.
              </p>
              <p className="text-gray-800">
                ▸ experiment with bitwise operations, channels and scanlines.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">$ ./build/inspect_pixel 32 12</p>
              <p className="text-gray-800">
                ▸ print out address, offset and RGBA values for a pixel.
              </p>
              <p className="text-gray-800">
                ▸ connect the mental model between indexes and raw memory.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">$ make test</p>
              <p className="text-gray-800">
                ▸ run small tests that verify conversions and buffer operations.
              </p>
              <p className="text-gray-800">
                ▸ keep the focus on correctness and understanding, not frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            technology foundation
          </h2>
          <div className="bg-gray-50 border rounded-lg p-5">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-gray-900 mb-1">Language</dt>
                <dd className="text-gray-700">C (no frameworks)</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">Toolchain</dt>
                <dd className="text-gray-700">gcc / clang, make, linux shell tools</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">Targets</dt>
                <dd className="text-gray-700">bitmap buffers, simple framebuffers, kernel-near concepts</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">Platform</dt>
                <dd className="text-gray-700">Linux terminal, editor of choice (vim, neovim, etc.)</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            explore more
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Additional sections will document directory layout, build system, and deeper
            discussions about memory, cache lines and pixel formats.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">$ man bitmap-lab-structure</h3>
              <p className="text-gray-700">
                Directory level overview for src, include, test and build.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">$ man bitmap-lab-internals</h3>
              <p className="text-gray-700">
                A deep dive into pixel buffers, color channels and memory layout.
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
          $ man bitmap-lab   # documentation before clever abstractions
        </span>
      </footer>
    </>
  )
}
