import React from "react";
import Link from "next/link";
import { Scissors, Calendar, Phone } from "lucide-react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Navbar User */}
      <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg tracking-wider text-amber-500"
          >
            <Scissors className="w-5 h-5" />
            <span>GENTLEMANS CUT</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <Link href="/" className="hover:text-amber-400 transition">
              Beranda
            </Link>
            <Link href="/#services" className="hover:text-amber-400 transition">
              Layanan & Harga
            </Link>
            <Link href="/booking" className="hover:text-amber-400 transition">
              Booking Jadwal
            </Link>
            <Link href="/status" className="hover:text-amber-400 transition">
              Cek Antrean
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/booking"
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Booking Sekarang
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer User */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-8 text-neutral-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-200 font-semibold">
            <Scissors className="w-4 h-4 text-amber-500" />
            <span>Gentlemans Cut Barbershop</span>
          </div>
          <p>
            © {new Date().getFullYear()} All rights reserved. Crafted with
            Next.js.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> +62 812-3456-7890
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
