import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import Pulse from '../components/ui/Pulse'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="flex min-h-[70vh] items-center bg-surface">
      <div className="container text-center">
        <Pulse className="mx-auto h-14 w-64 text-brand-fg" />
        <h1 className="mt-6 text-5xl font-extrabold text-fg">Page not found</h1>
        <p className="mt-4 text-lg text-muted">The page you are looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  )
}
