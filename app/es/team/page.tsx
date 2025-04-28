import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function TeamPageES() {
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
                <Link href="/es/data" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Datos
                </Link>
                <Link href="/es/team" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Equipo
                </Link>
                <div className="flex gap-4 mt-4">
                  <Link href="/es/team" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
                    ES
                  </Link>
                  <span>|</span>
                  <Link href="/team" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
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
            <Link href="/es/data" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Datos
            </Link>
            <Link href="/es/team" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Equipo
            </Link>
            <div className="flex gap-2 ml-4">
              <Link href="/es/team" className="text-sm font-mono uppercase tracking-wide font-bold hover:text-red-600">
                ES
              </Link>
              <span>|</span>
              <Link href="/team" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
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
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">Equipo</h1>
                <p className="text-lg md:text-xl max-w-3xl">
                  Nuestro equipo reúne a expertos con profundo conocimiento de los asuntos asiáticos y latinoamericanos,
                  trabajando para fomentar la cooperación y el entendimiento entre estas dinámicas regiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="relative">
                <Image
                  src="/michiko-amemiya.jpg"
                  alt="Michiko Amemiya"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-600"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Directora, Becario IPALAC en Investigación en Tecnología, Energía y Sostenibilidad
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Michiko Amemiya</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Ciudad de México</div>
                </div>

                <p className="text-base md:text-lg">
                  La Sra. Amemiya es la Directora del Instituto para la Cooperación Panasiática-América Latina (iPALAC)
                  y becaria del iPALAC en Investigación en Tecnología, Energía y Sostenibilidad. Ofrece consultoría
                  incomparable para empresas asiáticas que ingresan al mercado mexicano.
                </p>

                <p className="text-base">
                  Con una sólida base académica, cuenta con un Doctorado en Tecnología, Humanismo y Sostenibilidad por
                  la Universidad Politécnica de Cataluña y una maestría en Ingeniería Civil por la UNAM. Adicionalmente,
                  posee una maestría en Ciencias de la Complejidad por la Universidad Autónoma de la Ciudad de México.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Enfoque de Investigación</h3>
                  <p className="text-base">
                    Los logros de investigación de la Sra. Amemiya son dignos de mención, posicionándola como una
                    experta líder centrada en el modelado dinámico de fenómenos tecnosociales y la previsión,
                    centrándose especialmente en la evaluación de tecnologías, que implica el cálculo de emisiones y
                    residuos, así como posibles repercusiones imprevistas de la introducción de tecnologías.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Posiciones Académicas</h3>
                  <p className="text-base">
                    Además de su investigación, la Sra. Amemiya ha ocupado cargos académicos estimados. Se desempeña
                    como Profesora de la Facultad de Arquitectura de la UNAM, con especialidad en el Campo del
                    Conocimiento en Economía, Política y Medio Ambiente. Además, se desempeñó como Jefa de Departamento
                    en la Dirección General de Calidad y Educación en Salud dentro de la Secretaría de Salud a fines de
                    2015.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Experiencia Técnica</h3>
                  <p className="text-base">
                    Su experiencia técnica es amplia, habiendo trabajado en proyectos críticos como los servicios de
                    transporte en el Aeropuerto Internacional de la Ciudad de México, el sistema de alumbrado público de
                    la Ciudad de Juchitán de Zaragoza, el abastecimiento de agua potable a la Colonia Álamos y la
                    gestión del Presa Calles en el Estado de Aguascalientes. También contribuyó al Programa de
                    Ordenación Ecológica Marina y Regional del Pacífico Norte en la etapa de previsión y al programa de
                    planificación urbana de la ciudad de Terrassa, España.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Publicación</h3>
                  <p className="text-base font-medium">
                    Libro:{" "}
                    <a
                      href="https://repositorio.fa.unam.mx/handle/123456789/19098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Retos de la sostenibilidad urbana entre crisis y nuevos paradigmas para la acción
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="relative">
                <Image
                  src="/edith-zhao.jpg"
                  alt="Yueshu Zhao"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-500"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Directora, iPALAC Fellow en Investigación Económica y Relaciones con Inversores Chinos
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Yueshu Zhao</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Washington DC</div>
                </div>

                <p className="text-base md:text-lg">
                  Yueshu Zhao es el Director del Instituto para la Cooperación Panasiática-América Latina (iPALAC) y
                  miembro del iPALAC en Investigación Económica y Relaciones con Inversores Chinos. Se desempeña en el
                  Fondo Monetario Internacional realizando análisis y pronósticos macroeconómicos. Durante su mandato,
                  obtuvo exposición internacional en análisis económicos con un enfoque en políticas de cambio
                  climático.
                </p>

                <p className="text-base">
                  Con amplia experiencia en mercados emergentes, Yueshu es conocida por sus profundos análisis
                  económicos, presentados en medios de comunicación como China News, Economic View y Sina Financial
                  Global. Tiene una maestría en Economía Internacional de la Escuela de Estudios Internacionales
                  Avanzados (SAIS) de la Universidad Johns Hopkins y una licenciatura en economía pública de la Escuela
                  de Asuntos Públicos y Sociales (PSPA) de la Universidad de Wuhan, China.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Experiencia Profesional</h3>
                  <p className="text-base">
                    Antes de ocupar sus funciones actuales, prestó su experiencia al Centro para el Avance de la
                    Economía del Estado Estacionario (CASSE), asesorando sobre políticas económicas a nivel estatal
                    centradas en la sostenibilidad. También ocupó un puesto como investigadora en el Centro de
                    Excelencia Sino-África (SACE) en Nairobi, Kenia, donde investigó diversas perspectivas y soluciones
                    de mercado. La experiencia de Yueshu la dota de una perspectiva global y de los mercados asiáticos,
                    con habilidades analíticas de vanguardia, que aporta a su rol de liderazgo en iPALAC.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">En Medios</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      En conversación con el analista del FMI Zhao Yueshu: ¿En la primera línea de la lucha mundial
                      contra el cambio climático? – Sina News, 2024.
                      <a
                        href="https://client.sina.cn/news/2024-04-26/detail-inatcwqw5202128.d.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Sina News]
                      </a>
                    </li>
                    <li>
                      Tres bancos quiebran en siete días: ¿Qué está pasando en Estados Unidos? – China News, 2023.
                      <a
                        href="https://www.chinanews.com.cn/cj/2023/03-15/9972114.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [China News]
                      </a>
                      <a
                        href="https://www.jwview.com/jingwei/html/m/03-15/531838.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Economic View]
                      </a>
                      <a
                        href="https://finance.sina.com.cn/jjxw/2023-03-15/doc-imykxyet8040879.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Sina Financial Global]
                      </a>
                      <a
                        href="http://j.people.com.cn/n3/2023/0316/c94476-10223545.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [人民網日本語版]
                      </a>
                      <a
                        href="https://www.tellerreport.com/business/2023-03-15-the-%22three-knowns%22-and-the-%22four-unknowns%22-of-the-collapse-of-three-u-s--banks-in-seven-days.ByMDabygh.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Teller Report]
                      </a>
                    </li>
                    <li>
                      Con unos ingresos netos de 5 mil millones de euros el año pasado, ¿por qué se presenta al Deutsche
                      Bank como el "próximo Credit Suisse"? – China News, 2023.
                      <a
                        href="https://www.chinanews.com.cn/cj/2023/03-28/9980331.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [China News]
                      </a>
                      <a
                        href="https://www.sohu.com/a/660427825_100059423"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Sohu.com]
                      </a>
                      <a
                        href="https://www.jwview.com/jingwei/html/m/03-29/533916.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Economic View]
                      </a>
                      <a
                        href="https://www.tellerreport.com/business/2023-03-28-with-a-net-income-of-50-billion-euros-last-year--why-is-deutsche-bank-sung-as-%22credit-suisse-second%22-.Syx0UzdxW3.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        [Teller Report]
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Publicación</h3>
                  <p className="text-base">
                    Serhan Cevik & Nadeem Ilahi & Krzysztof Krogulski & Grace B Li & Sabiha Mohona &{" "}
                    <strong>Yueshu Zhao</strong>, 2023. "Mitigación del cambio climático y efectos de contagio de
                    políticas en la vecindad inmediata de la UE" IMF Working Papers 2023/246, International Monetary
                    Fund.
                    <a
                      href="https://www.imf.org/en/Publications/WP/Issues/2023/11/30/Climate-Change-Mitigation-and-Policy-Spillovers-in-the-EUs-Immediate-Neighborhood-541902?utm_medium=email&utm_source=govdelivery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      [Link]
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="relative">
                <Image
                  src="/yue-wang.jpg"
                  alt="Yue Wang"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Director de Tecnología, Innovación en IA
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Yue Wang, M.I.A</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Ciudad de México</div>
                </div>

                <p className="text-base md:text-lg">
                  Yue Wang aporta una convincente combinación de experiencia en tecnología de IA, análisis de datos y
                  desarrollo internacional a su puesto como Directora de Tecnología e Innovación de IA en IPALAC. Yue
                  tiene una Maestría en Asuntos Internacionales (MIA) con especialización en China y América Latina de
                  la Escuela de Política y Estrategia Global de UC San Diego, lo que proporciona una base académica
                  sólida para su trabajo.
                </p>

                <p className="text-base">
                  Su trayectoria profesional subraya el compromiso de aprovechar la tecnología para lograr un cambio
                  positivo. En Qualitest, desempeñó un papel fundamental en el equipo de GenAI, colaborando
                  estrechamente con los ingenieros de Google para ser pioneros en proyectos de modelos de lenguaje
                  grande (LLM) y Vertex AI de vanguardia. Esta experiencia perfeccionó sus habilidades en la preparación
                  de datos de modelos de IA, pruebas lingüísticas e internacionalización de software.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Experiencia Profesional</h3>
                  <p className="text-base">
                    Anteriormente, en el Fondo Internacional de Desarrollo Agrícola (FIDA), Yue analizó el impacto de la
                    crisis de Ucrania en regiones que abarcan el Cercano Oriente, el Norte de África, Europa del Este y
                    Asia Central. Sus hallazgos se resumieron en un resumen ejecutivo integral que informó la toma de
                    decisiones estratégicas. Yue perfeccionó aún más su experiencia en mercados emergentes en GreenMax
                    Capital Advisors, contribuyendo significativamente al análisis de datos para el proyecto EcoMicro
                    Dominica, que empoderó a las comunidades locales. Su función se extendió a la elaboración de modelos
                    financieros y la investigación de mercado sobre soluciones energéticas como PAYGO Solar Home Systems
                    adaptadas a las economías emergentes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Publicación</h3>
                  <p className="text-base">
                    <strong>Yue Wang</strong>, Xinrui Li, & Yueshu Zhao, 2023. "Medición del tratamiento heterogéneo del
                    grupo de ingresos Efecto de la apertura comercial sobre la tasa de desempleo a nivel de país-año"
                    Journal of Knowledge Learning and Science Technology, ISSN: 2959-6386
                    <a
                      href="https://jklst.org/index.php/home/article/view/124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      [Link]
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="relative">
                <Image
                  src="/xiaoli-qin.jpg"
                  alt="Xiaoli Qin"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-600"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Asesor Legal, iPALAC Fellow en Estudios Legales
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Xiaoli Qin, Esq., LL.M.</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Nueva York</div>
                </div>

                <p className="text-base md:text-lg">
                  Qin Xiaoli es abogado e investigador postdoctoral en la Facultad de Derecho de la Universidad de
                  Columbia, especializado en estudios legales comparativos entre China y Estados Unidos. Con amplia
                  experiencia en litigios comerciales y arbitraje, trabajó anteriormente en la oficina de Shanghai de un
                  reconocido bufete de abogados estadounidense. La exitosa representación de Qin en casos importantes ha
                  sido destacada por la Televisión Central de China y el Diario del Pueblo.
                </p>

                <p className="text-base">
                  Como abogado del estado de Nueva York, Qin brinda servicios legales integrales a empresas chinas que
                  operan en Estados Unidos. Ha ayudado a numerosas empresas chinas a establecer plataformas de comercio
                  electrónico independientes, tiendas en Amazon y TikTok desde cero. Sus servicios abarcan la
                  constitución de empresas, la gobernanza corporativa, la solicitud de números de identificación fiscal,
                  la fijación de precios de transferencia, la planificación fiscal, la apertura de cuentas bancarias, el
                  registro de marcas comerciales, el alquiler de oficinas y almacenes, el derecho laboral y la revisión
                  de contratos.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Experiencia Legal</h3>
                  <p className="text-base">
                    Qin tiene un sólido historial en la resolución de suspensiones de cuentas de Amazon causadas por
                    órdenes de restricción temporales, negociando con éxito con los demandantes en nombre de las
                    empresas chinas para acelerar el desbloqueo de fondos congelados. Qin también está bien versado en
                    la ley de inmigración de Estados Unidos, especializado en categorías de inmigración basadas en el
                    empleo como EB-1A (Extranjero de habilidad extraordinaria), EB-1C (Ejecutivo o Gerente
                    Multinacional), NIW (Exención de interés nacional), SIJ (Joven inmigrante especial) y EB-5
                    (Inversionista).
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Servicios Profesionales</h3>
                  <p className="text-base">
                    También ayuda a los clientes con visas L1, O1 y H1B, así como con solicitudes de tarjeta verde
                    basadas en el matrimonio, brindando servicios integrales desde la evaluación del caso hasta la
                    preparación de documentos, la presentación de solicitudes y el seguimiento. Con un profundo
                    conocimiento de las necesidades y características de los clientes chinos, Qin les ayuda a explorar
                    las vías de inmigración más adecuadas para alcanzar sus objetivos profesionales y personales en
                    Estados Unidos. El Sr. Qin ha sido nombrado notario público por el Secretario de Estado de Nueva
                    York.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="relative">
                <Image
                  src="/eduardo-kim.jpg"
                  alt="Eduardo Kim"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-500"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Investigador, becario iPALAC sobre desarrollo urbano sostenible
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Eduardo Kim</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Ciudad de México</div>
                </div>

                <p className="text-base md:text-lg">
                  Eduardo Kim es Planificador Urbano con Licenciatura de la Universidad de Guadalajara y Maestría en
                  Gestión Ambiental Urbana del Instituto Asiático de Tecnología (AIT) en Tailandia. Tiene una amplia
                  experiencia trabajando en proyectos de resiliencia urbana en todo el sudeste asiático y América
                  Latina, centrándose en la integración de prácticas sostenibles en la planificación urbana.
                </p>

                <p className="text-base">
                  Su investigación en iPALAC explora la interacción entre urbanización y sostenibilidad ambiental,
                  promoviendo infraestructura verde y políticas urbanas que beneficien a ambas regiones.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Enfoque de Investigación</h3>
                  <p className="text-base">
                    El trabajo de Eduardo se centra en desarrollar marcos de planificación urbana sostenible que puedan
                    aplicarse a ciudades de rápido crecimiento tanto en Asia como en América Latina. Se especializa en
                    infraestructura resistente al clima, sistemas de transporte público y diseño urbano inclusivo que
                    aborda las necesidades de diversas comunidades.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Proyectos Actuales</h3>
                  <p className="text-base">
                    Eduardo actualmente lidera un estudio comparativo de patrones de desarrollo urbano en ciudades
                    medianas de Tailandia, Vietnam, México y Colombia, identificando mejores prácticas y oportunidades
                    para la transferencia de conocimientos entre estas regiones. Su trabajo tiene como objetivo crear
                    pautas prácticas para el crecimiento urbano sostenible que puedan crear pautas prácticas para el
                    crecimiento urbano sostenible que puedan adaptarse a contextos locales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="relative">
                <Image
                  src="/sofia-park.jpg"
                  alt="Sofia Park"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Senior Fellow, iPALAC Fellow en Inversiones y Mercados Financieros
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Sofia Park</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Washington DC</div>
                </div>

                <p className="text-base md:text-lg">
                  Sofia Park tiene una Licenciatura en Finanzas de la Universidad Nacional Autónoma de México (UNAM) y
                  un MBA de la Universidad Nacional de Seúl en Corea del Sur. Se especializa en economías de mercados
                  emergentes, particularmente en la integración financiera entre los mercados latinoamericanos y
                  asiáticos.
                </p>

                <p className="text-base">
                  Sofía ha trabajado con instituciones financieras internacionales donde dirigió iniciativas sobre
                  desarrollo del mercado de capitales e inversiones transfronterizas. Su enfoque en iPALAC es facilitar
                  colaboraciones financieras que apoyen el crecimiento económico y la estabilidad en ambas regiones.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Áreas de Especialización</h3>
                  <p className="text-base">
                    Sofia se especializa en análisis de mercados financieros, estrategias de inversión para mercados
                    emergentes y regulaciones financieras transfronterizas. Su trabajo ayuda a empresas e inversores a
                    navegar por el complejo panorama de las finanzas internacionales, con un enfoque particular en las
                    oportunidades entre los mercados asiáticos y latinoamericanos.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Iniciativas Actuales</h3>
                  <p className="text-base">
                    Sofia está desarrollando actualmente un marco integral para evaluar oportunidades de inversión en
                    proyectos de infraestructura sostenible en toda América Latina, con un enfoque en atraer inversores
                    institucionales asiáticos. Su trabajo incluye el análisis de perfiles de riesgo, entornos
                    regulatorios y posibles rendimientos de las inversiones en varios sectores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-5xl font-bold tracking-tight uppercase">02</h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-8">Nuestras Ubicaciones</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Ciudad de México</div>
                    <p className="text-base">
                      Nuestra presencia principal está en la Ciudad de México, donde se encuentra nuestra Directora
                      Michiko Amemiya. Si bien no mantenemos una oficina física, colaboramos activamente con
                      instituciones y organizaciones locales en toda la ciudad.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Washington DC</div>
                    <p className="text-base">
                      Nuestra Investigadora Yueshu Zhao está basada en Washington DC, proporcionándonos valiosas
                      conexiones con instituciones políticas y organizaciones internacionales enfocadas en el comercio
                      global y la cooperación económica.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-base">
                    Nuestra estructura de equipo distribuido nos permite mantener una amplia perspectiva mientras nos
                    enfocamos en nuestra misión principal: fomentar la cooperación entre las regiones de Asia-Pacífico y
                    América Latina.
                  </p>
                </div>
              </div>
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
