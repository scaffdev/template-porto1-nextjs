import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TentangSection } from '@/components/sections/TentangSection'
import { ProyekSection } from '@/components/sections/ProyekSection'
import { PengalamanSection } from '@/components/sections/PengalamanSection'
import { KontakSection } from '@/components/sections/KontakSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between relative selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full max-w-6xl mx-auto px-6 md:px-12 flex-1">
        <HeroSection />
        <TentangSection />
        <ProyekSection />
        <PengalamanSection />
        <KontakSection />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  )
}
