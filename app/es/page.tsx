import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TariffCalculator from "@/components/tariff-calculator-es"

export default function HomePageES() {
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
              <Link href="/es" className="text-sm font-mono uppercase tracking-wide font-bold hover:text-red-600">
                ES
              </Link>
              <span>|</span>
              <Link href="/" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
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
                <h2 className="text-sm font-mono uppercase tracking-widest">Asia-Latinoamérica</h2>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 uppercase">
                <span className="text-green-600">I</span>
                <span className="text-yellow-500">P</span>
                <span className="text-red-600">A</span>
                <span className="text-green-600">L</span>
                <span className="text-yellow-500">A</span>
                <span className="text-red-600">C</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-md">Instituto para la Cooperación Asia-Latinoamérica</p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-auto">
            <Image
              src="/world-map.png"
              alt="Mapa estilizado de América Latina y Asia"
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
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-red-600 mb-8">
                Nuestra Misión
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-xl">
                Fomentando diálogos robustos y facilitando el comercio internacional entre Asia y América Latina
              </p>
            </div>
            <div className="p-8 md:p-16 bg-white">
              <p className="text-base md:text-lg mb-6">
                El Instituto para la Cooperación Asia-Latinoamérica (IPALAC) se erige como un faro de colaboración y
                entendimiento en la confluencia de dos regiones dinámicas y diversas. Como un think tank sin fines de
                lucro, IPALAC está comprometido con el fomento de diálogos robustos y la facilitación del comercio
                internacional entre Asia y América Latina, aprovechando sus fortalezas complementarias para abordar
                desafíos globales y desbloquear nuevas oportunidades.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 md:p-12 bg-green-600 text-white">
              <h3 className="text-xl font-mono uppercase tracking-widest mb-4">Investigación</h3>
              <p className="text-base mb-6">
                IPALAC realiza investigaciones de vanguardia sobre relaciones económicas, políticas y culturales entre
                países asiáticos y latinoamericanos.
              </p>
            </div>
            <div className="p-8 md:p-12 bg-yellow-500 text-white">
              <h3 className="text-xl font-mono uppercase tracking-widest mb-4">Diálogo</h3>
              <p className="text-base mb-6">
                Creamos plataformas para un intercambio significativo entre formuladores de políticas, líderes
                empresariales y académicos de ambas regiones.
              </p>
            </div>
            <div className="p-8 md:p-12 bg-red-600 text-white">
              <h3 className="text-xl font-mono uppercase tracking-widest mb-4">Comercio</h3>
              <p className="text-base mb-6">
                IPALAC facilita el comercio internacional proporcionando información, conexiones y recomendaciones de
                políticas.
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
        <h3 className="text-2xl font-bold tracking-tight uppercase mb-8">Publicación Destacada</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">LIBRO • 2023</div>
            <h4 className="text-xl font-bold">
              Retos de la sostenibilidad urbana entre crisis y nuevos paradigmas para la acción
            </h4>
            <p className="text-neutral-700 text-sm">
              Un análisis de los desafíos de sostenibilidad urbana en el contexto de las relaciones
              Asia-Latinoamérica, con un enfoque en soluciones innovadoras y colaborativas.
            </p>
            <Link
              href="/es/publications/sostenibilidad-urbana"
              className="inline-flex items-center text-black font-mono uppercase tracking-wide hover:text-red-600 text-sm"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
*/}

        <section className="w-full py-16 md:py-24 bg-neutral-100">
          <div className="container px-2 md:px-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-5xl font-bold tracking-tight uppercase">01</h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-8">Impacto de los Aranceles de Trump</h3>
                <p className="text-base md:text-lg mb-6 max-w-3xl">
                  Explore nuestra visualización interactiva del impacto de los aranceles propuestos por Trump en el
                  comercio global. Este mapa muestra la diferencia en las tasas arancelarias antes y después del 10 de
                  abril de 2025, destacando los cambios significativos para países de todo el mundo.
                </p>
                <div className="bg-white p-2 md:p-4 border overflow-hidden">
                  <div className="mx-auto">
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
                alt="Paisaje urbano representando la cooperación internacional"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
              <div className="max-w-xl">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mb-8 text-green-600">
                  El Epítome de
                  <br />
                  Cooperación
                  <br />
                  Internacional
                </h2>
                <p className="text-base md:text-lg mb-6">
                  IPALAC reúne a las mejores mentes de Asia y América Latina para fomentar la colaboración, impulsar la
                  innovación y crear asociaciones sostenibles que beneficien a ambas regiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-8">Contáctenos</h2>
                <div className="space-y-6 text-neutral-300">
                  <p>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                      Email
                    </span>
                    info@ipalac.org
                  </p>
                  <p className="text-base">
                    Nuestro equipo está distribuido entre la Ciudad de México y Washington DC, enfocándose en fomentar
                    la cooperación entre las regiones de Asia-Pacífico y América Latina.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Button className="bg-red-600 text-white hover:bg-white hover:text-black rounded-none px-6 py-8 font-mono uppercase tracking-wide text-lg">
                  Comuníquese con Nosotros
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
              © 2024 Instituto para la Cooperación Asia-Latinoamérica
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
