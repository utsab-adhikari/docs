import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function UnderstandingShiftingPage() {
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
            <li className="text-gray-700 font-medium">
                <Link href="/bitmap-lab/test" className="hover:text-blue-600">test</Link>
            </li>
             <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">T01</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 font-mono">
          Test // Understanding Shifting
        </h1>
        <p className="text-gray-700 mt-2 max-w-2xl font-mono text-sm">
          This Program demonstrates bitwise shifting operations in C. It includes examples of left and right shifts,
          illustrating how to create bit masks and manipulate individual bits within an integer.
        </p>
      </header>

      <article className="max-w-none space-y-10 font-mono text-sm">
        {/* Program Source */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            program source
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
                utsab@linux:~/bitmap-lab/test/T01_UnderstandingShifting.c
              </p>
            </div>

            {/* Terminal Body */}
            <div className="bg-gray-900 text-green-200 font-mono text-xs sm:text-sm px-4 py-3 space-y-2">
              <p className="text-gray-400">
                // bit masks using left and right shifts
              </p>
              <pre className="pl-4 text-green-100 whitespace-pre overflow-x-auto">
                {`#include <stdio.h>

int main() {
    unsigned int x = 0b00001111;
    unsigned int y = 0b00010000;

    printf("Mask for bit 3: 0b%08b", 1 << 3);
    // left shift of binary 1 by 3 positions

    printf("Mask for bit 4: 0b%08b", y>>2);
    // right shift of y by 2 positions

    printf("Mask for bit 6: 0b%08b", x<<2);
    // left shift of x by 2 positions

    return 0;
}

void print_bits(unsigned int x) {
    for (int i = 7; i >= 0; i--)
        printf("%d", (x >> i) & 1);
}`}
              </pre>
            </div>
          </div>
          <Link
  href="https://github.com/utsab-adhikari/bitmap-lab/blob/main/test/T01_UnderstandingShifting.c"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-2 px-3 py-1.5
             border border-gray-300 rounded-full
             text-sm font-mono text-gray-800
             hover:bg-gray-100 hover:border-gray-400
             transition"
>
  <FaGithub className="w-4 h-4" />
  <span>GitHub</span>
</Link>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
           explanation
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">initial values</p>
              <p className="text-gray-800">
                ▸ <span className="font-semibold">x</span> is <code>0b00001111</code> (lower 4 bits set).
              </p>
              <p className="text-gray-800">
                ▸ <span className="font-semibold">y</span> is <code>0b00010000</code> (only bit 4 set).
              </p>
              <p className="text-gray-800">
                ▸ both are <code>unsigned int</code> so shifts are logical, not arithmetic.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">mask for bit 3</p>
              <p className="text-gray-800">
                ▸ expression: <code>1 &lt;&lt; 3</code>.
              </p>
              <p className="text-gray-800">
                ▸ starting from <code>00000001</code>, shifting left 3 times gives <code>00001000</code>.
              </p>
              <p className="text-gray-800">
                ▸ this mask can later be used with <code>|</code>, <code>&amp;</code> or <code>^</code> to set/clear/toggle bit 3.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">mask for bit 4 via right shift</p>
              <p className="text-gray-800">
                ▸ expression: <code>y &gt;&gt; 2</code> where <code>y = 0b00010000</code>.
              </p>
              <p className="text-gray-800">
                ▸ shifting right by 2 moves the single <code>1</code> from bit 4 to bit 2: <code>00000100</code>.
              </p>
              <p className="text-gray-800">
                ▸ this shows that right shifts can also be used to reposition masks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">mask for bit 6 from x</p>
              <p className="text-gray-800">
                ▸ expression: <code>x &lt;&lt; 2</code> where <code>x = 0b00001111</code>.
              </p>
              <p className="text-gray-800">
                ▸ left shifting by 2 multiplies by <code>2^2 = 4</code>, giving <code>0b00111100</code>.
              </p>
              <p className="text-gray-800">
                ▸ bits that move past the most significant position are discarded; no wrap around.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
              <p className="text-gray-500 mb-1">helper: print_bits</p>
              <p className="text-gray-800">
                ▸ <code>print_bits</code> loops from bit 7 down to 0 and prints each bit using
                <code> (x &gt;&gt; i) &amp; 1</code>.
              </p>
              <p className="text-gray-800">
                ▸ in real C, there is no standard <code>%b</code> format specifier, so you would
                usually call <code>print_bits(mask)</code> instead of using <code>%08b</code>.
              </p>
            </div>
          </div>
        </section>
      </article>

      <footer className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link 
          href="/bitmap-lab/test" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Bitmap Lab Tests
        </Link>
        <span className="text-xs text-gray-500 font-mono">
          $ bitmap-lab   # documentation before clever abstractions
        </span>
      </footer>
    </>
  )
}
