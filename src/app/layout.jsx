import "./globals.css"
export const metadata = {
  title: "Utsab Adhikari – Documentation",
  description: "Central documentation hub for projects and systems",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">

          <main className="">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
