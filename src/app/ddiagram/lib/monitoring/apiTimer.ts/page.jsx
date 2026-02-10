import Link from "next/link"

export default function ApiTimerPage() {
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
            <li>
              <Link href="/ddiagram" className="hover:text-blue-600">ddiagram</Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href="/ddiagram/lib/monitoring" className="hover:text-blue-600">lib/monitoring</Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">apiTimer.ts</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 font-mono">
          lib/monitoring/apiTimer.ts
        </h1>
        <p className="text-gray-700 mt-2 max-w-2xl font-mono text-sm">
          High-resolution API latency timing utilities with cold start detection and automatic metric logging.
        </p>
      </header>

      <article className="max-w-none space-y-10 font-mono text-sm">
        {/* Source Code */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            source code
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {/* Code Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <p className="text-xs font-mono text-gray-500 truncate">
                lib/monitoring/apiTimer.ts
              </p>
            </div>

            {/* Code Body */}
            <div className="bg-gray-900 text-green-200 font-mono text-xs sm:text-sm px-4 py-4 overflow-x-auto">
              <pre className="text-green-100 whitespace-pre">{`import { NextRequest, NextResponse } from "next/server";
import { isColdStart } from "./coldStart";
import { isColdStart } from "./coldStart";
import { logMetric } from "./logger";
import type { MetricStatus } from "./types";

export type RouteHandler<TContext = unknown> = (
  req: NextRequest,
  context: TContext
) => Promise<NextResponse>;

/**
 * Wrap a Next.js App Router route handler to record API latency metrics.
 * Uses process.hrtime.bigint() for high-resolution timing.
 */
export function withApiTiming<TContext = unknown>(
  name: string,
  handler: RouteHandler<TContext>
): RouteHandler<TContext> {
  return async (req: NextRequest, context: TContext): Promise<NextResponse> => {
    const start = process.hrtime.bigint();
    const cold = isColdStart();

    try {
      const res = await handler(req, context);
      const durationNs = process.hrtime.bigint() - start;
      const durationMs = Number(durationNs) / 1_000_000;

      const status: MetricStatus = String(res.status);

      void logMetric({
        type: "api",
        name,
        duration: durationMs,
        status,
        metadata: {
          path: req.nextUrl.pathname,
          method: req.method,
          coldStart: cold,
        },
      });

      return res;
    } catch (error) {
      const durationNs = process.hrtime.bigint() - start;
      const durationMs = Number(durationNs) / 1_000_000;

      void logMetric({
        type: "api",
        name,
        duration: durationMs,
        status: "error",
        metadata: {
          path: req.nextUrl.pathname,
          method: req.method,
          coldStart: cold,
          errorMessage:
            error instanceof Error ? error.message : "Unknown error",
        },
      });

      throw error;
    }
  };
}

/**
 * Simpler wrapper for handlers that only use (req) and no context.
 */
export function withApiTimingSimple(
  name: string,
  handler: (req: NextRequest) => Promise<NextResponse>
): (req: NextRequest) => Promise<NextResponse> {
  return async (req: NextRequest): Promise<NextResponse> => {
    const start = process.hrtime.bigint();
    const cold = isColdStart();

    try {
      const res = await handler(req);
      const durationNs = process.hrtime.bigint() - start;
      const durationMs = Number(durationNs) / 1_000_000;

      const status: MetricStatus = String(res.status);

      void logMetric({
        type: "api",
        name,
        duration: durationMs,
        status,
        metadata: {
          path: req.nextUrl.pathname,
          method: req.method,
          coldStart: cold,
        },
      });

      return res;
    } catch (error) {
      const durationNs = process.hrtime.bigint() - start;
      const durationMs = Number(durationNs) / 1_000_000;

      void logMetric({
        type: "api",
        name,
        duration: durationMs,
        status: "error",
        metadata: {
          path: req.nextUrl.pathname,
          method: req.method,
          coldStart: cold,
          errorMessage:
            error instanceof Error ? error.message : "Unknown error",
        },
      });

      throw error;
    }
  };
}

/**
 * Generic helper to time any async operation (not just HTTP handlers).
 */
export async function timeAsync<T>(
  name: string,
  fn: () => Promise<T>,
  metadata?: Record<string, unknown>,
  status: MetricStatus = "success"
): Promise<T> {
  const start = process.hrtime.bigint();
  try {
    const result = await fn();
    const durationNs = process.hrtime.bigint() - start;
    const durationMs = Number(durationNs) / 1_000_000;

    void logMetric({ type: "api", name, duration: durationMs, status, metadata });
    return result;
  } catch (error) {
    const durationNs = process.hrtime.bigint() - start;
    const durationMs = Number(durationNs) / 1_000_000;

    void logMetric({
      type: "api",
      name,
      duration: durationMs,
      status: "error",
      metadata: {
        ...(metadata || {}),
        errorMessage: error instanceof Error ? error.message : "Unknown error",
      },
    });
    throw error;
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            overview
          </h2>
          <div className="space-y-4 text-gray-700 text-sm">
            <p>
              This module provides <span className="font-semibold">timing wrappers for Next.js App Router route handlers</span> to 
              automatically record API latency metrics. Using <code className="bg-gray-100 px-1 rounded">process.hrtime.bigint()</code>, 
              it captures high-resolution timing (nanosecond precision) and logs performance data along with context like HTTP method, 
              pathname, and cold start status.
            </p>
            <p>
              The timing system integrates with the monitoring system to track request performance, identify bottlenecks, and 
              understand cold start behavior in serverless environments.
            </p>
          </div>
        </section>

        {/* Key Concepts */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            key concepts
          </h2>
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-2">High-Resolution Timing</h3>
              <p className="text-gray-700 text-sm mb-2">
                Uses <code className="bg-gray-100 px-1 rounded">process.hrtime.bigint()</code> for nanosecond precision instead of 
                <code className="bg-gray-100 px-1 rounded mx-1">Date.now()</code>:
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-400 p-3 font-mono text-xs space-y-1">
                <p className="text-gray-600">const durationNs = process.hrtime.bigint() - start;</p>
                <p className="text-gray-600">const durationMs = Number(durationNs) / 1_000_000;</p>
              </div>
              <p className="text-gray-600 text-xs mt-2">Eliminates timer drift and provides accuracy needed for performance profiling.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-2">Type-Safe RouteHandler</h3>
              <p className="text-gray-700 text-sm mb-2">
                Generic type <code className="bg-gray-100 px-1 rounded">RouteHandler&lt;TContext&gt;</code> matches Next.js App Router signature:
              </p>
              <code className="block bg-gray-50 border-l-4 border-blue-400 p-3 text-xs">
                (req: NextRequest, context: TContext) =&gt; Promise&lt;NextResponse&gt;
              </code>
              <p className="text-gray-600 text-xs mt-2">Supports dynamic routes with params/searchParams while maintaining full type safety.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-2">Cold Start Detection</h3>
              <p className="text-gray-700 text-sm mb-2">
                Integrates with <code className="bg-gray-100 px-1 rounded">isColdStart()</code> utility to flag first invocation:
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-400 p-3 font-mono text-xs">
                <p className="text-gray-600">const cold = isColdStart();</p>
                <p className="text-gray-600">// Logs metadata with every request</p>
              </div>
              <p className="text-gray-600 text-xs mt-2">Enables separate analysis of cold vs. warm performance profiles.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-2">Error Handling & Logging</h3>
              <p className="text-gray-700 text-sm mb-2">
                Catches exceptions, logs error metrics, then re-throws:
              </p>
              <div className="bg-gray-50 border-l-4 border-red-400 p-3 space-y-2 text-sm">
                <p className="text-gray-700"><span className="font-semibold">Catch & Track:</span> Exceptions logged with status: "error" and errorMessage</p>
                <p className="text-gray-700"><span className="font-semibold">Re-throw:</span> Error propagates to Next.js error handling</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-2">Fire-and-Forget Logging</h3>
              <p className="text-gray-700 text-sm mb-2">
                Uses <code className="bg-gray-100 px-1 rounded">void logMetric(...)</code> pattern to prevent awaiting metric logging:
              </p>
              <div className="bg-gray-50 border-l-4 border-green-400 p-3 font-mono text-xs">
                <p className="text-gray-600">void logMetric({"{...metrics}"});</p>
              </div>
              <p className="text-gray-600 text-xs mt-2">Logs run asynchronously without blocking response delivery.</p>
            </div>
          </div>
        </section>

        {/* The Three Wrappers */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            the three wrappers
          </h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-3">1. withApiTiming&lt;TContext&gt;</h3>
              <p className="text-gray-700 text-sm mb-3">
                Full-featured wrapper for route handlers that use context (params, searchParams). Wraps the handler with timing + cold start + error tracking.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-400 p-3 font-mono text-xs space-y-1 mb-3">
                <p className="text-gray-600">// Dynamic route: /api/user/[id]</p>
                <p className="text-gray-600">export const GET = withApiTiming&lt;{`{ params: { id: string } }`}&gt;(</p>
                <p className="text-gray-600 ml-2">"GET /api/user/[id]",</p>
                <p className="text-gray-600 ml-2">async (req, context) =&gt; {"{..."}</p>
              </div>
              <p className="text-gray-600 text-xs">⚠️ Wrapper adds minimal overhead (~0.1–0.5ms). For routes faster than 1ms, timing may show natural variance.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-3">2. withApiTimingSimple</h3>
              <p className="text-gray-700 text-sm mb-3">
                Simplified wrapper for static routes that only receive <code className="bg-gray-100 px-1 rounded">(req)</code> and no context. Avoids generic type boilerplate.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-400 p-3 font-mono text-xs space-y-1 mb-3">
                <p className="text-gray-600">// Static route: /api/health</p>
                <p className="text-gray-600">export const GET = withApiTimingSimple(</p>
                <p className="text-gray-600 ml-2">"GET /api/health",</p>
                <p className="text-gray-600 ml-2">async (req) =&gt; {"{..."}</p>
              </div>
              <p className="text-gray-600 text-xs">Cleaner for simple routes. Internally identical to withApiTiming but skips context parameter.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-3">3. timeAsync&lt;T&gt;</h3>
              <p className="text-gray-700 text-sm mb-3">
                Generic async operation timer, not limited to HTTP handlers. Useful for timing database operations, background jobs, or any Promise-based work.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-400 p-3 font-mono text-xs space-y-1 mb-3">
                <p className="text-gray-600">const users = await timeAsync(</p>
                <p className="text-gray-600 ml-2">"db:fetchUsers",</p>
                <p className="text-gray-600 ml-2">() =&gt; db.user.findMany(),</p>
                <p className="text-gray-600 ml-2">{"{"}database: "postgresql", limit: 1000{"}"}</p>
                <p className="text-gray-600">);</p>
              </div>
              <p className="text-gray-600 text-xs">Supports custom metadata object and optional status override. Defaults to "success"; changes to "error" on exception.</p>
            </div>
          </div>
        </section>

        {/* Timing Data Flow */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            timing data flow
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <span className="text-xs font-semibold text-blue-600 flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Start Clock</p>
                <p className="text-gray-700 text-xs">
                  <code className="bg-gray-100 px-1 rounded">process.hrtime.bigint()</code> captures nanosecond timestamp before handler invocation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <span className="text-xs font-semibold text-blue-600 flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Cold Start Check</p>
                <p className="text-gray-700 text-xs">
                  <code className="bg-gray-100 px-1 rounded">isColdStart()</code> queries global flag. True on first invocation after deployment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <span className="text-xs font-semibold text-blue-600 flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Handler Execution</p>
                <p className="text-gray-700 text-xs">
                  Route handler runs; response or error occurs. Timing includes all middleware.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <span className="text-xs font-semibold text-blue-600 flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Delta Calculation</p>
                <p className="text-gray-700 text-xs">
                  <code className="bg-gray-100 px-1 rounded">(end - start) / 1_000_000 = durationMs</code>. Captures total time including middleware.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <span className="text-xs font-semibold text-blue-600 flex-shrink-0 mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Metric Assembly</p>
                <p className="text-gray-700 text-xs">
                  Object built with type, name, duration, status, and metadata (path, method, coldStart, error).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white">
              <span className="text-xs font-semibold text-blue-600 flex-shrink-0 mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Async Log</p>
                <p className="text-gray-700 text-xs">
                  <code className="bg-gray-100 px-1 rounded">void logMetric(...)</code> fires asynchronously; doesn't block response delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metric Structure */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            metric structure
          </h2>
          <div className="bg-gray-900 text-green-200 font-mono text-xs sm:text-sm px-4 py-4 rounded-lg overflow-x-auto mb-4">
            <pre className="text-green-100">{`{
  type: "api",
  name: "GET /api/user/[id]",
  duration: 42.5,               // milliseconds
  status: "200" | "error",      // string or error status
  metadata: {
    path: "/api/user/123",
    method: "GET",
    coldStart: true,
    errorMessage: "DB timeout"  // only on error
  }
}`}</pre>
          </div>
          <p className="text-gray-700 text-sm">
            All metrics include timing, status, and request context. Metadata object is extensible for custom fields (user ID, feature flags, etc.).
          </p>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            best practices
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-2 text-sm">✓ Wrap every route handler</p>
              <p className="text-gray-700 text-xs">Even fast endpoints (10–50ms) benefit from timing baseline data.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-2 text-sm">✓ Use descriptive names</p>
              <p className="text-gray-700 text-xs">
                <code className="bg-gray-100 px-1 rounded">"GET /api/user/[id]"</code> not <code className="bg-gray-100 px-1 rounded">"get"</code>. Enables filtering and dashboards.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-2 text-sm">✓ Add custom metadata</p>
              <p className="text-gray-700 text-xs">
                For complex operations: <code className="bg-gray-100 px-1 rounded">timeAsync("db:query", fn, {"{"}table: "users", rows: 500{"}"})</code>.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-2 text-sm">✓ Monitor error rates separately</p>
              <p className="text-gray-700 text-xs">The "error" status and errorMessage help identify failure modes.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-semibold text-gray-900 mb-2 text-sm">✓ Aggregate cold start metrics</p>
              <p className="text-gray-700 text-xs">Compare p50/p99 latency cold vs. warm to justify caching strategies.</p>
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            common pitfalls
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
              <p className="font-semibold text-gray-900 mb-2 text-sm">❌ Awaiting logMetric</p>
              <p className="text-gray-700 text-xs">
                Using <code className="bg-red-100 px-1 rounded">await logMetric(...)</code> defeats the purpose—slows down every response by logging latency.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
              <p className="font-semibold text-gray-900 mb-2 text-sm">❌ Timing includes middleware</p>
              <p className="text-gray-700 text-xs">
                Duration spans from wrapper entry to response return—includes middleware, body parsing, etc. Usually desired but may inflate perceived latency.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
              <p className="font-semibold text-gray-900 mb-2 text-sm">❌ Forgetting to cast status to string</p>
              <p className="text-gray-700 text-xs">
                <code className="bg-red-100 px-1 rounded">res.status</code> is a number. Must convert: <code className="bg-red-100 px-1 rounded">String(res.status)</code> to match MetricStatus type.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            integration example
          </h2>
          <div className="bg-gray-900 text-green-200 font-mono text-xs sm:text-sm px-4 py-4 rounded-lg overflow-x-auto">
            <pre className="text-green-100 whitespace-pre">{`// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { withApiTimingSimple, timeAsync } from "@/lib/monitoring/apiTimer";
import { searchDb } from "@/lib/search";

const GET = withApiTimingSimple(
  "GET /api/search",
  async (req: NextRequest): Promise<NextResponse> => {
    const query = req.nextUrl.searchParams.get("q") || "";

    if (!query) {
      return NextResponse.json(
        { error: "Missing query parameter" },
        { status: 400 }
      );
    }

    try {
      // Optionally time individual operations
      const results = await timeAsync(
        "search:query",
        () => searchDb.query(query),
        { queryLength: query.length }
      );

      return NextResponse.json({ results, count: results.length });
    } catch (error) {
      return NextResponse.json(
        { error: "Search failed" },
        { status: 500 }
      );
    }
  }
);

export { GET };`}</pre>
          </div>
          <p className="text-gray-700 text-sm mt-3">
            Both the route handler and the inner database query are timed separately and logged. Allows tracking both endpoint latency and operation-level performance.
          </p>
        </section>

        {/* Related Files */}
        <section className="pb-8 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            related files
          </h2>
          <div className="space-y-2 text-gray-700 text-sm">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <Link href="/ddiagram/lib/monitoring/logger.ts" className="text-blue-600 hover:underline font-mono font-semibold">
                logger.ts
              </Link>
              <p className="text-gray-600 text-xs mt-1">Defines <code className="bg-gray-100 px-1 rounded">logMetric()</code> function and batches metrics for async storage.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <Link href="/ddiagram/lib/monitoring/coldStart.ts" className="text-blue-600 hover:underline font-mono font-semibold">
                coldStart.ts
              </Link>
              <p className="text-gray-600 text-xs mt-1">Exports <code className="bg-gray-100 px-1 rounded">isColdStart()</code> utility and global flag management.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-mono font-semibold text-gray-900">types.ts</p>
              <p className="text-gray-600 text-xs mt-1">Defines <code className="bg-gray-100 px-1 rounded">MetricStatus</code> type union ("success" | "error" | HTTP status codes).</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8 py-4">
          <p>DDiagram Documentation • Last updated: February 10, 2026</p>
        </div>
      </article>
    </>
  )
}
