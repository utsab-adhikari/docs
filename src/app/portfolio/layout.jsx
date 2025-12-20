import PortfolioSidebar from '@/components/Sidebar/Portfolio'

export const metadata = {
  title: {
    default: 'Portfolio – Documentation',
    template: '%s – Portfolio Documentation',
  },
  description: 'Documentation for Portfolio - A collection of my projects and works',
}

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <PortfolioSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}