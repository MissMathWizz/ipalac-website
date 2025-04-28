import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TariffCalculator from "@/components/tariff-calculator-es"

export default function TariffDataPageES() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/es" className="flex items-center">
              <span className="text-sm md:text-base font-mono uppercase tracking-wide">
                Instituto para la Cooperación Asia-Latinoamérica
              </span>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-10">
                <Link href="/es" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Inicio
                </Link>
                <Link
                  href="/es/trump_tariff_by_country"
                  className="text-lg font-mono uppercase tracking-wide hover:text-red-600"
                >
                  Datos
                </Link>
                <Link href="/es/team" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Equipo
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
            <Link href="/es" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Inicio
            </Link>
            <Link
              href="/es/trump_tariff_by_country"
              className="text-base font-mono uppercase tracking-wide hover:text-red-600"
            >
              Datos
            </Link>
            <Link href="/es/team" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Equipo
            </Link>
            <div className="flex gap-2 ml-4">
              <Link
                href="/es/trump_tariff_by_country"
                className="text-sm font-mono uppercase tracking-wide font-bold hover:text-red-600"
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
                  Impacto de Aranceles de Trump por País
                </h1>
                <p className="text-lg md:text-xl max-w-3xl">
                  Esta visualización muestra el impacto potencial de los aranceles propuestos por Trump en países de
                  todo el mundo. El mapa muestra la diferencia en las tasas arancelarias antes y después del 10 de abril
                  de 2025, destacando qué países enfrentarían los aumentos más significativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-neutral-100">
          <div className="container px-4 md:px-6">
            <div className="bg-white p-6 border rounded-md overflow-hidden">
              <div className="max-w-5xl mx-auto">
                <TariffCalculator />
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-bold">Entendiendo los Datos</h3>
              <p className="text-base md:text-lg">
                La visualización anterior muestra la diferencia entre las tasas arancelarias actuales y las tasas
                propuestas bajo las posibles políticas de la administración Trump después del 10 de abril de 2025. Los
                países en rojo enfrentarían los mayores aumentos arancelarios, mientras que aquellos en verde verían
                cambios mínimos.
              </p>
              <h3 className="text-2xl font-bold">Hallazgos Clave</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>China</strong> enfrentaría el mayor aumento arancelario, con tasas que potencialmente
                  aumentarían más de 130 puntos porcentuales
                </li>
                <li>
                  <strong>México</strong> y <strong>Canadá</strong>, a pesar de ser miembros del T-MEC, verían aumentos
                  arancelarios significativos
                </li>
                <li>
                  Varios países <strong>europeos</strong> experimentarían aumentos arancelarios moderados entre 5-10
                  puntos porcentuales
                </li>
                <li>
                  Los países <strong>latinoamericanos</strong> fuera de México generalmente enfrentarían aumentos
                  menores en comparación con los centros de fabricación asiáticos
                </li>
              </ul>
              <h3 className="text-2xl font-bold">Metodología</h3>
              <p className="text-base md:text-lg">
                Este análisis se basa en datos comerciales públicamente disponibles y políticas arancelarias propuestas.
                La visualización compara las tasas arancelarias efectivas actuales con las tasas proyectadas basadas en
                declaraciones de política y precedentes históricos. Los datos representan una estimación de los impactos
                potenciales y pueden cambiar según la implementación real de las políticas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              © 2023 Instituto para la Cooperación Asia-Latinoamérica
            </div>
            <div className="flex gap-6">
              <Link
                href="/es/privacy"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-600"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/es/terms"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-600"
              >
                Términos de Uso
              </Link>
              <Link
                href="/es/contact"
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-red-600"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
