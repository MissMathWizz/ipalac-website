import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TariffCalculator from "@/components/tariff-calculator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-sm md:text-base font-mono uppercase tracking-wide">
                Institute for Pan Asia-Latin America Cooperation
              </span>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-10">
                <Link href="/" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Home
                </Link>
                <Link
                  href="/trump_tariff_by_country"
                  className="text-lg font-mono uppercase tracking-wide hover:text-red-600"
                >
                  Data
                </Link>
                <Link href="/team" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Team
                </Link>
                <div className="flex gap-4 mt-4">
                  <Link href="/es" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
                    ES
                  </Link>
                  <span>|</span>
                  <Link href="/" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
                    EN
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Home
            </Link>
            <Link
              href="/trump_tariff_by_country"
              className="text-base font-mono uppercase tracking-wide hover:text-red-600"
            >
              Data
            </Link>
            <Link href="/team" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Team
            </Link>
            <div className="flex gap-2 ml-4">
              <Link href="/es" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
                ES
              </Link>
              <span>|</span>
              <Link href="/" className="text-sm font-mono uppercase tracking-wide font-bold hover:text-red-600">
                EN
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-red-600 mr-4"></div>
                <h2 className="text-sm font-mono uppercase tracking-widest">Pan Asia-Latin America</h2>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 uppercase">
                <span className="text-green-600">I</span>
                <span className="text-yellow-500">P</span>
                <span className="text-red-600">A</span>
                <span className="text-green-600">L</span>
                <span className="text-yellow-500">A</span>
                <span className="text-red-600">C</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-md">Institute for Pan Asia-Latin America Cooperation</p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-auto">
            <Image
              src="/world-map.png"
              alt="Stylized Map of Latin America and Asia"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600"></div>
          </div>
        </section>

        <section className="w-full bg-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-red-600 mb-8">Our Mission</h2>
              <p className="text-lg md:text-xl mb-6 max-w-xl">
                Fostering robust dialogues and facilitating international trade between Pan Asia and Latin America
              </p>
            </div>
            <div className="p-8 md:p-16 bg-white">
              <p className="text-base md:text-lg mb-6">
                The Institute for Pan Asia-Latin America Cooperation (IPALAC) stands as a beacon of collaboration and
                understanding at the juncture of two dynamic and diverse regions. As a nonprofit think tank, IPALAC is
                committed to fostering robust dialogues and facilitating international trade between Pan Asia and Latin
                America, harnessing their complementary strengths to address global challenges and unlock new
                opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 md:p-12 bg-green-600 text-white">
              <h3 className="text-xl font-mono uppercase tracking-widest mb-4">Research</h3>
              <p className="text-base mb-6">
                IPALAC conducts cutting-edge research on economic, political, and cultural relations between Asian and
                Latin American countries.
              </p>
            </div>
            <div className="p-8 md:p-12 bg-yellow-500 text-white">
              <h3 className="text-xl font-mono uppercase tracking-widest mb-4">Dialogue</h3>
              <p className="text-base mb-6">
                We create platforms for meaningful exchange between policymakers, business leaders, and academics from
                both regions.
              </p>
            </div>
            <div className="p-8 md:p-12 bg-red-600 text-white">
              <h3 className="text-xl font-mono uppercase tracking-widest mb-4">Trade</h3>
              <p className="text-base mb-6">
                IPALAC facilitates international trade by providing insights, connections, and policy recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Publication section - commented out until we have publications
<section className="w-full py-16 md:py-24">
  <div className="container px-4 md:px-6">
    <div className="grid grid-cols-12 gap-4 mb-16">
      <div className="col-span-12 md:col-span-3">
        <h2 className="text-5xl font-bold tracking-tight uppercase">01</h2>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h3 className="text-2xl font-bold tracking-tight uppercase mb-8">Latest Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              POLICY BRIEF • MAY 2023
            </div>
            <h4 className="text-xl font-bold">The New Silk Road: Asia-Latin America Trade Corridors</h4>
            <p className="text-neutral-700 text-sm">
              An analysis of emerging trade routes and economic corridors connecting Asian and Latin American
              markets.
            </p>
            <Link
              href="/publications/silk-road"
              className="inline-flex items-center text-black font-mono uppercase tracking-wide hover:text-red-600 text-sm"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
*/}

        <section className="w-full py-16 md:py-24 bg-neutral-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-5xl font-bold tracking-tight uppercase">01</h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-8">Trump Tariff Impact</h3>
                <p className="text-base md:text-lg mb-6 max-w-3xl">
                  Explore our interactive visualization of how proposed Trump tariffs would impact trade globally. This
                  map shows the difference in tariff rates before and after April 10, 2025, highlighting the significant
                  changes for countries around the world.
                </p>
                <div className="bg-white p-4 border overflow-hidden">
                  <div className="max-w-4xl mx-auto">
                    <TariffCalculator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[60vh] md:h-auto">
              <Image
                src="/city-view.jpeg"
                alt="Modern cityscape representing international cooperation"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
              <div className="max-w-xl">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mb-8 text-green-600">
                  The Epitome of
                  <br />
                  International
                  <br />
                  Cooperation
                </h2>
                <p className="text-base md:text-lg mb-6">
                  IPALAC brings together the best minds from Asia and Latin America to foster collaboration, drive
                  innovation, and create sustainable partnerships that benefit both regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-8">Contact Us</h2>
                <div className="space-y-6 text-neutral-300">
                  <p>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                      Email
                    </span>
                    info@ipalac.org
                  </p>
                  <p className="text-base">
                    Our team is distributed between Mexico City and Washington DC, focusing on fostering cooperation
                    between Asia-Pacific and Latin American regions.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Button className="bg-red-600 text-white hover:bg-white hover:text-black rounded-none px-6 py-8 font-mono uppercase tracking-wide text-lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              © 2023 Institute for Pan Asia-Latin America Cooperation
            </div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-600"
              >
                Terms of Use
              </Link>
              <Link
                href="/contact"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
