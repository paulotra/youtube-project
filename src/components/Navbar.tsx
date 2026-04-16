import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-neutral-900">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex-1 max-w-sm">
        <input
          type="text"
          placeholder="Enter a keyword..."
          className="bg-neutral-800 px-4 py-2 rounded-full w-full max-w"
        />
      </div>
      <div className="flex gap-x-4">
        <Link
          href="/login"
          className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-6 py-2 bg-white cursor-pointer text-black rounded hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  )
}
