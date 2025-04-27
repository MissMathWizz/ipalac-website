import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function TeamPage() {
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
                <Link href="/team" className="text-lg font-mono uppercase tracking-wide hover:text-red-600">
                  Team
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
            <Link href="/" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Home
            </Link>
            <Link href="/team" className="text-base font-mono uppercase tracking-wide hover:text-red-600">
              Team
            </Link>
            <div className="flex gap-2 ml-4">
              <Link href="/es/team" className="text-sm font-mono uppercase tracking-wide hover:text-red-600">
                ES
              </Link>
              <span>|</span>
              <Link href="/team" className="text-sm font-mono uppercase tracking-wide font-bold hover:text-red-600">
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
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">Team</h1>
                <p className="text-lg md:text-xl max-w-3xl">
                  Our team brings together experts with deep knowledge of both Asian and Latin American affairs, working
                  to foster cooperation and understanding between these dynamic regions.
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
                    Director, IPALAC Fellow on Technology, Energy and Sustainability Research
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Michiko Amemiya</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Mexico City</div>
                </div>

                <p className="text-base md:text-lg">
                  Ms. Amemiya is the Director of the Institute for Pan Asia-Latin America Cooperation (iPALAC) and an
                  iPALAC fellow on Technology, Energy, and Sustainability Research. She offers unparalleled consultancy
                  for Asian enterprises entering the Mexican market.
                </p>

                <p className="text-base">
                  With a robust academic foundation, she holds a Doctorate in Technology, Humanism, and Sustainability
                  from the Polytechnic University of Catalonia and a master's degree in Civil Engineering from UNAM.
                  Additionally, she possesses a master's degree in Complexity Sciences from the Autonomous University of
                  Mexico City.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Research Focus</h3>
                  <p className="text-base">
                    Ms. Amemiya's research achievements are noteworthy, positioning her as a leading expert focusing on
                    the dynamic modeling of technosocial phenomena and foresight, especially focusing on technology
                    assessment, which involves calculating emissions and waste, as well as possible unforeseen
                    repercussions of the introduction of technologies.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Academic Positions</h3>
                  <p className="text-base">
                    In addition to her research, Ms. Amemiya has held esteemed academic positions. She serves as the
                    Professor in the Faculty of Architecture at UNAM, specializing in the Field of Knowledge in
                    Economics, Politics, and Environment. Moreover, she served as Head of Department at the Dirección
                    General de Calidad y Educación en Salud within the Secretaría de Salud in late 2015.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Technical Expertise</h3>
                  <p className="text-base">
                    Her technical expertise is extensive, having worked on critical projects such as the transportation
                    services at the Mexico City International Airport, the public lighting system of the City of
                    Juchitán de Zaragoza, the supply of drinking water to the Álamos Colony, and the management of the
                    Calles Dam in the State of Aguascalientes. She also contributed to the Program for Marine and
                    Regional Ecological Planning of the North Pacific in the forecasting stage and the urban planning
                    program of the city of Terrassa, Spain.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Publication</h3>
                  <p className="text-base font-medium">
                    Book:{" "}
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
                    Director, IPALAC Fellow on Economic Research and Chinese Investor Relations
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Yueshu Zhao</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Washington DC</div>
                </div>

                <p className="text-base md:text-lg">
                  Yueshu Zhao is the Director of the Institute for Pan Asia-Latin America Cooperation (iPALAC), and an
                  iPALAC fellow on Economic Research and Chinese Investor Relations. She is serving in the International
                  Monetary Fund conducting macroeconomic analysis and forecasting. During her tenure, she gained
                  international exposure on economics analysis with a focus on climate change policies.
                </p>

                <p className="text-base">
                  With extensive experience in emerging markets, Yueshu is known for her insightful economic analyses,
                  featured in media outlets such as China News, Economic View, and Sina Financial Global. She holds an
                  MA in International Economics from the School of Advanced International Studies (SAIS) at Johns
                  Hopkins University, and a bachelor's degree in public economics from the School of Public and Social
                  Affairs (PSPA) at Wuhan University, China.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Professional Experience</h3>
                  <p className="text-base">
                    Prior to her current roles, she lent her expertise to the Center for the Advancement of the Steady
                    State Economy (CASSE), advising on state-level economic policies focused on sustainability. She also
                    held a position as a Research Fellow at the Sino-Africa Centre of Excellence (SACE) in Nairobi,
                    Kenya, where she investigated various market perspectives and solutions. Yueshu's background equips
                    her both with a global perspective and on Asian markets, with cutting-edge analytical skills, which
                    she brings to her leadership role at iPALAC.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">In Media</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      In Conversation with IMF Analyst Zhao Yueshu: At the Frontline of the Global Fight Against Climate
                      Change? – Sina News, 2024.{" "}
                      <a
                        href="https://client.sina.cn/news/2024-04-26/detail-inatcwqw5202128.d.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        [Sina News]
                      </a>
                    </li>
                    <li>
                      Three Banks Go Bankrupt in Seven Days: What is Happening in the U.S.? – China News, 2023.
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
                      With a Net Income of 5 billion Euros Last Year, why is Deutsche Bank Being Portrayed as the "Next
                      Credit Suisse"? – China News, 2023.
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
                  <h3 className="text-xl font-bold">Publication</h3>
                  <p className="text-base">
                    Serhan Cevik & Nadeem Ilahi & Krzysztof Krogulski & Grace B Li & Sabiha Mohona &{" "}
                    <strong>Yueshu Zhao</strong>, 2023. "Climate Change Mitigation and Policy Spillovers in the EU's
                    Immediate Neighborhood," IMF Working Papers 2023/246, International Monetary Fund.
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
                    Director of Technology, AI Innovation
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Yue Wang, M.I.A</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Mexico City</div>
                </div>

                <p className="text-base md:text-lg">
                  Yue Wang brings a compelling blend of expertise in AI technology, data analysis, and international
                  development to her role as Director of Technology, AI Innovation at IPALAC. Yue holds a Master of
                  International Affairs (MIA) with a specialization in China and Latin America from UC San Diego's
                  School of Global Policy and Strategy, providing a solid academic foundation for her work.
                </p>

                <p className="text-base">
                  Her professional journey underscores a commitment to leveraging technology for positive change. At
                  Qualitest, she played a pivotal role on the GenAI team, collaborating closely with Google engineers to
                  pioneer cutting-edge Large Language Models (LLMs) and Vertex AI projects. This experience honed her
                  skills in AI model data preparation, linguistic testing, and software internationalization.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Professional Experience</h3>
                  <p className="text-base">
                    Previously, at the International Fund for Agricultural Development (IFAD), Yue analyzed the Ukraine
                    crisis's impact on regions spanning Near East, North Africa, Eastern Europe, and Central Asia. Her
                    findings were distilled into a comprehensive executive summary that informed strategic
                    decision-making. Yue further refined her expertise in emerging markets at GreenMax Capital Advisors,
                    contributing significantly to data analysis for the EcoMicro Dominica project, which empowered local
                    communities. Her role extended to financial modeling and market research on energy solutions like
                    PAYGO Solar Home Systems tailored for emerging economies.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Publication</h3>
                  <p className="text-base">
                    <strong>Yue Wang</strong>, Xinrui Li, & Yueshu Zhao, 2023. "Measuring Income Group Heterogeneous
                    Treatment Effect of Trade Openness on Unemployment Rate at Country-Year Level," Journal of Knowledge
                    Learning and Science Technology, ISSN: 2959-6386
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
                    Legal Advisor, IPALAC Fellow on Legal Studies
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Xiaoli Qin, Esq., LL.M.</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">New York</div>
                </div>

                <p className="text-base md:text-lg">
                  Qin Xiaoli is a lawyer and a postdoctoral research fellow at Columbia Law School, specializing in
                  comparative legal studies between China and the United States. With extensive experience in commercial
                  litigation and arbitration, he previously worked at the Shanghai office of a renowned U.S. law firm.
                  Mr. Qin's successful representation in significant cases has been featured by China Central Television
                  and People's Daily.
                </p>

                <p className="text-base">
                  As a New York State attorney, Mr. Qin provides comprehensive legal services to Chinese companies
                  operating in the United States. He has assisted numerous Chinese businesses in establishing
                  independent e-commerce platforms, Amazon stores, and TikTok shops from scratch. His services encompass
                  company incorporation, corporate governance, tax ID application, transfer pricing, tax planning, bank
                  account opening, trademark registration, office and warehouse leasing, labor law, and contract review.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Legal Expertise</h3>
                  <p className="text-base">
                    Mr. Qin has a strong track record in resolving Amazon account suspensions caused by temporary
                    restraining orders, successfully negotiating with plaintiffs on behalf of Chinese businesses to
                    expedite the release of frozen funds. Mr. Qin is also well-versed in U.S. immigration law,
                    specializing in employment-based immigration categories such as EB-1A (Alien of Extraordinary
                    Ability), EB-1C (Multinational Executive or Manager), NIW (National Interest Waiver), SIJ (Special
                    Immigrant Juvenile), and EB-5 (Investor).
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Professional Services</h3>
                  <p className="text-base">
                    He also assists clients with L1, O1, and H1B visas, as well as marriage-based green card
                    applications, providing comprehensive services from case evaluation to document preparation,
                    application filing, and follow-up. With a deep understanding of Chinese clients' needs and
                    characteristics, Mr. Qin helps them explore the most suitable immigration pathways to achieve their
                    professional and personal goals in the United States. Mr. Qin has been appointed as a Notary Public
                    by the New York Secretary of State.
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
                    Research Fellow, IPALAC Fellow on Sustainable Urban Development
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Eduardo Kim</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Mexico City</div>
                </div>

                <p className="text-base md:text-lg">
                  Eduardo Kim is an Urban Planner with a Bachelor's degree from the Universidad de Guadalajara and a
                  Master's degree in Urban Environmental Management from the Asian Institute of Technology (AIT) in
                  Thailand. He has extensive experience working on urban resilience projects across Southeast Asia and
                  Latin America, focusing on integrating sustainable practices into urban planning.
                </p>

                <p className="text-base">
                  His research at iPALAC explores the interplay between urbanization and environmental sustainability,
                  promoting green infrastructure and urban policies that benefit both regions.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Research Focus</h3>
                  <p className="text-base">
                    Eduardo's work focuses on developing sustainable urban planning frameworks that can be applied to
                    rapidly growing cities in both Asia and Latin America. He specializes in climate-resilient
                    infrastructure, public transportation systems, and inclusive urban design that addresses the needs
                    of diverse communities.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Current Projects</h3>
                  <p className="text-base">
                    Eduardo is currently leading a comparative study of urban development patterns in medium-sized
                    cities across Thailand, Vietnam, Mexico, and Colombia, identifying best practices and opportunities
                    for knowledge transfer between these regions. His work aims to create practical guidelines for
                    sustainable urban growth that can be adapted to local contexts.
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
                    Senior Fellow, IPALAC Fellow on Financial Markets and Investments
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Sofia Park</h2>
                  <div className="text-sm font-mono uppercase tracking-widest text-red-600">Washington DC</div>
                </div>

                <p className="text-base md:text-lg">
                  Sofia Park holds a Bachelor's degree in Finance from the Universidad Nacional Autónoma de México
                  (UNAM) and an MBA from Seoul National University in South Korea. She specializes in emerging market
                  economies, particularly the financial integration between Latin American and Asian markets.
                </p>

                <p className="text-base">
                  Sofia has worked with international financial institutions where she led initiatives on capital market
                  development and cross-border investments. Her focus at iPALAC is to facilitate financial
                  collaborations that support economic growth and stability in both regions.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Areas of Expertise</h3>
                  <p className="text-base">
                    Sofia specializes in financial market analysis, investment strategies for emerging markets, and
                    cross-border financial regulations. Her work helps businesses and investors navigate the complex
                    landscape of international finance, with a particular focus on opportunities between Asian and Latin
                    American markets.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Current Initiatives</h3>
                  <p className="text-base">
                    Sofia is currently developing a comprehensive framework for assessing investment opportunities in
                    sustainable infrastructure projects across Latin America, with a focus on attracting Asian
                    institutional investors. Her work includes analyzing risk profiles, regulatory environments, and
                    potential returns on investments in various sectors.
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-8">Our Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Mexico City</div>
                    <p className="text-base">
                      Our main presence is in Mexico City, where our Director Michiko Amemiya is based. While we don't
                      maintain a physical office, we actively collaborate with local institutions and organizations
                      throughout the city.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Washington DC</div>
                    <p className="text-base">
                      Our Research Fellow Yueshu Zhao is based in Washington DC, providing us with valuable connections
                      to policy institutions and international organizations focused on global trade and economic
                      cooperation.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-base">
                    Our distributed team structure allows us to maintain a broad perspective while focusing on our core
                    mission: fostering cooperation between Asia-Pacific and Latin American regions.
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
