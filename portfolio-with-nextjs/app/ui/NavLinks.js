'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"

export function NavLinks() {
    const pathname = usePathname()

    return(
        <nav>
          <Link href='https://orange-train-59xpqgrw5p4fj44-3000.app.github.dev/' className={`link ${pathname === '/' ? 'active' : ''}`} >Home</Link>
          <Link href='https://orange-train-59xpqgrw5p4fj44-3000.app.github.dev/create-todo' className={`link ${pathname === '/create-todo' ? 'active' : ''}`} >Create Todo</Link>
        </nav>
    )
}