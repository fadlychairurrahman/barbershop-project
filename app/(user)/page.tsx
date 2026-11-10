import Link from "next/link";
import { Scissors, Clock, Star, MapPin, ArrowRight } from "lucide-react";

export default function UserHomePage() {
  const services = [
    {
      name: "Classic Gentleman Cut",
      price: "Rp 50.000",
      desc: "Potongan rambut klasik rapi lengkap dengan cuci rambut dan styling pomade.",
    },
    {
      name: "Fade & Beard Trim",
      price: "Rp 75.000",
      desc: "Skin fade modern dipadukan dengan cukur dan rapikan janggut.",
    },
    {
      name: "VIP Treatment",
      price: "Rp 110.000",
      desc: "Full package: Haircut, Beard trim, Hot towel, Wash, dan Shoulder massage.",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 py-24 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest">
            Premium Barbershop Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Tampil Percaya Diri dengan{" "}
            <span className="text-amber-500">Potongan Terbaik</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Dapatkan pengalaman grooming profesional dari capster berpengalaman.
            Pesan jadwal cukurmu sekarang tanpa harus mengantre lama di lokasi.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/booking"
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-lg shadow-amber-500/20"
            >
              <span>Booking Jadwal Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/status"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-xl border border-neutral-700 transition"
            >
              Cek Status Antrean
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 flex flex-col gap-3">
          <Clock className="w-8 h-8 text-amber-500" />
          <h3 className="text-lg font-bold text-white">Bebas Antre</h3>
          <p className="text-neutral-400 text-sm">
            Pilih jam kedatanganmu secara fleksibel lewat sistem booking online
            kami.
          </p>
        </div>
        <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 flex flex-col gap-3">
          <Star className="w-8 h-8 text-amber-500" />
          <h3 className="text-lg font-bold text-white">Capster Profesional</h3>
          <p className="text-neutral-400 text-sm">
            Ditangani langsung oleh barber ahli yang update dengan tren potongan
            rambut terkini.
          </p>
        </div>
        <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 flex flex-col gap-3">
          <MapPin className="w-8 h-8 text-amber-500" />
          <h3 className="text-lg font-bold text-white">Lokasi Strategis</h3>
          <p className="text-neutral-400 text-sm">
            Tempat nyaman, ber-AC, lengkap dengan fasilitas ruang tunggu yang
            bersih.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services" className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Layanan & Daftar Harga
          </h2>
          <p className="text-neutral-400 text-sm">
            Pilih layanan perawatan rambut terbaik sesuai kebutuhanmu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-amber-500/50 transition"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-amber-400 font-bold text-lg">
                  {item.price}
                </span>
                <Link
                  href="/booking"
                  className="bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-white text-sm px-4 py-2 rounded-lg border border-neutral-700 transition"
                >
                  Pilih
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
