import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TariffCalculator from "@/components/tariff-calculator"

export default function TariffDataPage() {
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
                  <Link
                    href="/es/trump_tariff_by_country"
                    className="text-sm font-mono uppercase tracking-wide hover:text-red-600"
                  >
                    ES
                  </Link>
                  <span>|</span>
                  <Link
                    href="/trump_tariff_by_country"
                    className="text-sm font-mono uppercase tracking-wide hover:text-red-600"
                  >
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
              <Link
                href="/es/trump_tariff_by_country"
                className="text-sm font-mono uppercase tracking-wide hover:text-red-600"
              >
                ES
              </Link>
              <span>|</span>
              <Link
                href="/trump_tariff_by_country"
                className="text-sm font-mono uppercase tracking-wide font-bold hover:text-red-600"
              >
                EN
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-12 gap-4 mb-8">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-5xl font-bold tracking-tight uppercase">01</h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">
                  Trump Tariff Burden by Country
                </h1>
                <p className="text-lg md:text-xl max-w-3xl">
                  This visualization shows the potential impact of proposed Trump tariffs on countries around the world.
                  The map displays the difference in tariff rates before and after April 10, 2025, highlighting which
                  countries would face the most significant increases.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-neutral-100">
          <div className="container px-4 md:px-6">
            <div className="bg-white p-3 sm:p-6 border rounded-md overflow-hidden">
              <div className="max-w-5xl mx-auto">
                <TariffCalculator />
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-bold">Understanding the Data</h3>
              <p className="text-base md:text-lg">
                The visualization above shows the difference between current tariff rates and the proposed rates under
                potential Trump administration policies after April 10, 2025. Countries in red would face the highest
                tariff increases, while those in green would see minimal changes.
              </p>
              <h3 className="text-2xl font-bold">Key Findings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>China</strong> would face the largest tariff increase, with rates potentially rising by over
                  130 percentage points
                </li>
                <li>
                  <strong>Mexico</strong> and <strong>Canada</strong>, despite USMCA membership, would see significant
                  tariff increases
                </li>
                <li>
                  Several <strong>European</strong> countries would experience moderate tariff increases between 5-10
                  percentage points
                </li>
                <li>
                  <strong>Latin American</strong> countries outside of Mexico would generally face smaller increases
                  compared to Asian manufacturing hubs
                </li>
              </ul>
              <h3 className="text-2xl font-bold">Methodology</h3>
              <p className="text-base md:text-lg">
                This analysis is based on publicly available trade data and proposed tariff policies. The visualization
                compares current effective tariff rates with projected rates based on policy statements and historical
                precedent. The data represents an estimate of potential impacts and may change based on actual policy
                implementation.
              </p>
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
