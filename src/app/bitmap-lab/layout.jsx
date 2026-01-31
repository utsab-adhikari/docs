import BitmapLabSidebar from '@/components/Sidebar/BitmapLab'

export const metadata = {
  title: {
    default: 'Bitmap Lab – Documentation',
    template: '%s – Bitmap Lab',
  },
  description: 'Documentation for Bitmap Lab - Terminal-style experimentation environment',
}

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl lg:px-8 sm:py-10 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BitmapLabSidebar />
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}
