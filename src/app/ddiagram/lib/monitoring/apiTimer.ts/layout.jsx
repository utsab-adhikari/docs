export const metadata = {
  title: {
    default: "apiTimer.ts – DDiagram Docs",
    template: "%s – DDiagram",
  },
  description: "API latency monitoring and high-resolution timing utilities for Next.js route handlers",
  openGraph: {
    title: "apiTimer.ts – DDiagram Docs",
    description: "Wrap route handlers with automatic performance metrics and cold start detection",
    type: "website",
  },
}

export default function Layout({ children }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-green-200">
      {children}
    </div>
  )
}
