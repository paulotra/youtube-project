'use client'
import { useState } from 'react'
import { logout } from '@/app/lib/actions'

export default function LogoutButton() {
  const [load, setLoad] = useState(false)
  const handleLogout = async () => {
    setLoad(true)
    await logout()
    setLoad(false)
  }
  return (
    <button
      className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition"
      onClick={handleLogout}
    >
      {load ? 'Loading...' : 'Logout'}
    </button>
  )
}
