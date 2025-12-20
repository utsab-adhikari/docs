import SearchTheInfoSidebar from '@/components/Sidebar/SearchTheInfo'

export const metadata = {
  title: {
    default: 'Search The Info – Documentation',
    template: '%s – Search The Info',
  },
  description: 'Documentation for Search The Info - A personal research and article platform',
}

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <SearchTheInfoSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}