'use client'

import Link from "next/link"

export function Navbar() {

    return (
        <div className="grid  grid-cols-4 gap-4 bg-gray-500 py-2 px-4 rounded-3xl cursor-pointer fixed top-10  text-black font-bold " >
            <Link href="#home" className="hover:text-green-500"> Home </Link>
            <Link href="#about" className="hover:text-green-500"> About </Link>
            <Link href="#projects" className="hover:text-green-500"> Projects </Link>
            <Link href="#contact"className="hover:text-green-500" > Contact </Link>
        </div>
    )
} 