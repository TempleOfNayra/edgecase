import Image from "next/image";
import portrait from "../public/images/ali-emami.png";

const EMAIL = "ali.emami@gmail.com";
const PHONE = { display: "(917) 257-4316", href: "tel:+19172574316" };
const LINKEDIN = "https://www.linkedin.com/in/aliemami/";
const NAYRA = "https://nayra.io";

const nav = [
  { href: "#practice", label: "Practice" },
  { href: "#work", label: "Work" },
  { href: "#record", label: "Record" },
  { href: "#about", label: "About" },
];

const facts = [
  { value: "3×", label: "Chief Technology Officer" },
  { value: "20 yrs", label: "Building products, platforms and teams" },
  { value: "45 sec", label: "Amex credit decisions, down from months" },
  { value: "1 exit", label: "HealthFleet, acquired in 2015, as CTO" },
];

const clients = [
  "Amazon",
  "Audible",
  "American Express",
  "U.S. Air Force",
  "ARQ",
  "Barnes & Noble",
  "CBS Interactive",
  "WebMD",
];

const practice = [
  {
    title: "Fractional & interim CTO",
    body: "Technology strategy, platform architecture and the engineering roadmap; budgets, hiring and team structure; the technical voice in front of the board and investors. For companies that need senior technology leadership before, between or alongside a full-time CTO.",
    tags: ["Strategy", "Roadmap", "Budgets", "Hiring", "Board"],
  },
  {
    title: "Architecture & modernization",
    body: "Breaking up monoliths without stopping the business: service boundaries, API contracts, phased migration, and the CI/CD and testing standards that let teams ship continuously and run their services on their own.",
    tags: ["Distributed systems", "APIs", "Migration", "CI/CD"],
  },
  {
    title: "AI, data & machine learning",
    body: "Turning research and models into products people rely on: data pipelines, ML and LLM integration, and the validation frameworks that keep predictions honest once they reach production.",
    tags: ["ML platforms", "LLMs", "Data pipelines", "Validation"],
  },
  {
    title: "Zero to one",
    body: "From first prototype to a production platform on web and mobile, together with the team and the delivery process that carry it forward. Health tech, fintech, media and government.",
    tags: ["MVPs", "Web & mobile", "Cloud-native", "Team building"],
  },
];

const work = [
  {
    org: "ARQ",
    years: "2026 – now",
    role: "Head of Technology",
    headline:
      "Turning AI, machine learning and biology into predictive health technology.",
    points: [
      "Technology vision, platform architecture and engineering roadmap through 2027.",
      "Strategy for combining continuous physiological data, proteomics and machine learning into personalized health insights.",
      "Leads engineering across product, platform infrastructure, data systems and ML.",
    ],
  },
  {
    org: "U.S. Air Force",
    years: "2022 – 2026",
    role: "Lead Technology Architect",
    headline: "Architecture and technical direction for mission-critical systems.",
    points: [
      "Set the system architecture and technical direction for the program.",
      "Led engineering delivery from design through production.",
    ],
  },
  {
    org: "American Express",
    years: "2015 – 2022",
    role: "Technologist, then Senior Technical Team Lead",
    headline: "Credit decisions cut from months to about 45 seconds.",
    points: [
      "Led the modernization of the Platinum Card and OPEN acquisition platforms, from JSP monoliths to React and Node.js services.",
      "Replaced six-week product rollouts with configuration-driven releases by separating business rules from deployments.",
      "Set the CI/CD, testing and delivery standards that let teams deploy continuously.",
    ],
  },
  {
    org: "Audible · Amazon",
    years: "2014 – 2018",
    role: "Technology Consultant, then Senior Consultant",
    headline: "In-app purchase and download, after the Amazon acquisition.",
    points: [
      "Architected the integration of payments and content delivery into the Audible app.",
      "Built catalog services serving millions of listeners on web and mobile.",
      "Scaled the catalog platform through 40% year-over-year membership growth.",
    ],
  },
  {
    org: "HealthFleet",
    years: "2012 – 2015",
    role: "Chief Technology Officer",
    headline: "A digital health platform, from first build to acquisition.",
    points: [
      "Owned the architecture and roadmap for HIPAA-compliant chronic-care infrastructure.",
      "Built the engineering team and the standards it worked by.",
      "Designed patient data pipelines under healthcare regulation.",
    ],
  },
];

const record = [
  { years: "2026 – now", org: "ARQ", role: "Head of Technology" },
  { years: "2015 – now", org: "Edgecase", role: "Founder & CTO" },
  { years: "2022 – 2026", org: "U.S. Air Force", role: "Lead Technology Architect" },
  { years: "2015 – 2022", org: "American Express", role: "Technologist; Senior Technical Team Lead" },
  { years: "2014 – 2018", org: "Amazon · Audible", role: "Technology Consultant; Senior Consultant" },
  { years: "2012 – 2015", org: "HealthFleet", role: "Chief Technology Officer · acquired 2015" },
  { years: "2008 – 2014", org: "babulous", role: "Founder & CTO" },
  { years: "2010", org: "Barnes & Noble", role: "Technology Consultant · built PubIt" },
  { years: "2006 – 2007", org: "CBS Interactive", role: "Senior Architect, Director of Technology" },
  { years: "2004 – 2006", org: "WebMD", role: "Senior Software Engineer" },
  { years: "2004 – 2005", org: "Ask.com", role: "Senior Software Engineer" },
];

// Dividers for the facts grid: 2×2 on phones, one row of four from md up.
const factCell = [
  "",
  "border-l pl-5 md:pl-6",
  "border-t md:border-t-0 md:border-l md:pl-6",
  "border-t border-l pl-5 md:border-t-0 md:pl-6",
];

const container = "mx-auto w-full max-w-[1200px] px-6 md:px-10";
const eyebrow = "font-mono text-[11px] uppercase tracking-[0.2em]";
const textLink =
  "underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path d="M2.5 18V2.5H18" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <rect x="11" y="11" width="7" height="7" fill="var(--accent)" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SectionHead({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:gap-10">
      <p className={`${eyebrow} text-muted md:col-span-3 md:pt-4`}>
        <span className="text-accent">{index}</span>
        <span className="mx-2">/</span>
        {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="font-serif text-[2.6rem] leading-[1.02] tracking-[-0.01em] text-balance md:text-6xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
        <div className={`${container} flex h-16 items-center justify-between`}>
          <a href="#top" className="flex items-center gap-2.5" aria-label="Edgecase, back to top">
            <Mark className="h-[18px] w-[18px]" />
            <span className="font-serif text-[1.65rem] leading-none tracking-[-0.01em]">
              Edgecase
            </span>
          </a>
          <nav className="flex items-center gap-8" aria-label="Main">
            <ul className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-full border border-ink px-4 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="pt-36 pb-20 md:pt-48 md:pb-28">
          <div className={container}>
            <p className={`${eyebrow} flex flex-wrap gap-x-2 gap-y-1 text-muted`}>
              <span className="whitespace-nowrap">Technology leadership ·</span>
              <span className="whitespace-nowrap">Architecture ·</span>
              <span className="whitespace-nowrap">Engineering</span>
            </p>
            <h1 className="mt-8 max-w-[19ch] font-serif text-[clamp(2.9rem,7.6vw,6.9rem)] leading-[0.95] tracking-[-0.02em] text-pretty">
              Technology that shapes what a company{" "}
              <em className="text-accent">becomes</em>, not only what it builds.
            </h1>

            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted md:col-span-7 md:text-xl">
                Edgecase is the technology practice of{" "}
                <span className="text-ink">Ali Emami</span>: three-time CTO, systems
                architect and engineering leader, with twenty years across Amazon,
                Audible, American Express and the U.S. Air Force.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:col-span-5 md:justify-end">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full bg-ink px-6 py-3 text-[15px] text-paper transition-opacity hover:opacity-85"
                >
                  Start a conversation
                </a>
                <a href="#work" className={`text-[15px] ${textLink}`}>
                  See the work
                </a>
              </div>
            </div>

            <dl className="mt-20 grid grid-cols-2 border-y border-rule md:mt-28 md:grid-cols-4">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`border-rule py-7 pr-4 md:py-9 md:pr-6 ${factCell[i]}`}
                >
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-serif text-[2.6rem] leading-none tracking-[-0.01em] md:text-5xl">
                    {fact.value}
                  </dd>
                  <dd className="mt-3 text-sm leading-snug text-muted">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-10">
              <p className={`${eyebrow} text-muted md:col-span-3 md:pt-2.5`}>
                Selected clients &amp; employers
              </p>
              <ul className="flex flex-wrap gap-x-7 gap-y-2 font-serif text-2xl text-ink/75 md:col-span-9 md:text-[1.75rem]">
                {clients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section id="practice" className="border-t border-rule py-24 md:py-32">
          <div className={container}>
            <SectionHead
              index="01"
              label="Practice"
              title="Senior technology leadership, without the bench."
              intro="Every engagement is led personally by Ali, with no hand-off to a team of juniors. Most take one of four shapes."
            />
            <ol className="grid gap-x-16 md:grid-cols-2">
              {practice.map((item, i) => (
                <li key={item.title} className="border-t border-rule pt-8 pb-12 md:pb-16">
                  <p className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight md:text-[2.1rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-pretty text-muted">
                    {item.body}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-rule px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="border-t border-rule bg-surface py-24 md:py-32">
          <div className={container}>
            <SectionHead
              index="02"
              label="Selected work"
              title="Hard systems, shipped, at companies where they mattered."
            />
            <div>
              {work.map((item) => (
                <article
                  key={item.org}
                  className="grid gap-6 border-t border-rule py-10 md:grid-cols-12 md:gap-10 md:py-14"
                >
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-2xl leading-tight md:text-[1.7rem]">
                      {item.org}
                    </h3>
                    <p className="mt-2 font-mono text-xs text-muted">{item.years}</p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </div>
                  <p className="font-serif text-[1.9rem] leading-[1.1] tracking-[-0.005em] text-balance md:col-span-5 md:text-[2.35rem]">
                    {item.headline}
                  </p>
                  <ul className="space-y-3 text-[15px] leading-relaxed text-muted md:col-span-4 md:pt-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Record */}
        <section id="record" className="border-t border-rule py-24 md:py-32">
          <div className={container}>
            <SectionHead index="03" label="Record" title="Twenty years, in order." />
            <ol className="border-b border-rule">
              {record.map((row) => (
                <li
                  key={`${row.org}-${row.years}`}
                  className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1 border-t border-rule py-5 md:grid-cols-12 md:gap-10"
                >
                  <span className="pt-1 font-mono text-xs text-muted md:col-span-3">
                    {row.years}
                  </span>
                  <span className="font-serif text-xl leading-snug md:col-span-4 md:text-2xl">
                    {row.org}
                  </span>
                  <span className="col-start-2 text-sm leading-snug text-muted md:col-span-5 md:col-start-auto md:pt-1.5 md:text-[15px]">
                    {row.role}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1 md:grid-cols-12 md:gap-10">
              <span className="pt-1 font-mono text-xs text-muted md:col-span-3">Education</span>
              <span className="font-serif text-xl leading-snug md:col-span-4 md:text-2xl">
                University of Maryland
              </span>
              <span className="col-start-2 text-sm leading-snug text-muted md:col-span-5 md:col-start-auto md:pt-1.5 md:text-[15px]">
                M.S., Computer Science · College Park
              </span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-rule py-24 md:py-32">
          <div className={container}>
            <SectionHead index="04" label="About" title="Ali Emami" />
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <figure className="md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={portrait}
                    alt="Portrait of Ali Emami"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1200px) 460px, (min-width: 768px) 40vw, 100vw"
                    className="object-cover grayscale"
                    style={{ objectPosition: "50% 30%" }}
                  />
                </div>
                <figcaption className={`${eyebrow} mt-4 text-muted`}>
                  Founder &amp; principal, New York
                </figcaption>
              </figure>

              <div className="md:col-span-7 md:pl-6">
                <p className="font-serif text-[1.9rem] leading-[1.2] text-balance md:text-[2.3rem]">
                  Twenty years of turning complex, ambiguous problems into products,
                  scalable systems and the teams that run them.
                </p>
                <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-pretty text-muted">
                  <p>
                    Ali has been CTO three times: of HealthFleet, a digital health
                    platform acquired in 2015; of babulous; and of Edgecase, which he
                    founded the same year to bring CTO-level strategy and hands-on
                    architecture to startups and enterprises. Along the way he led
                    engineering teams at American Express, built for Audible and Amazon,
                    and served as lead technology architect for the U.S. Air Force.
                  </p>
                  <p>
                    He does his best work where technology is central to the strategy,
                    where engineering helps decide what is possible rather than only
                    delivering what is requested. Today that means leading technology at
                    ARQ, where AI, machine learning and biological research come together
                    to understand and predict human health.
                  </p>
                  <p>
                    Outside client work he builds{" "}
                    <a href={NAYRA} className={`text-ink ${textLink}`}>
                      Nayra
                    </a>
                    , an AI reflection app for iPhone.
                  </p>
                </div>

                <dl className="mt-12 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
                  <div>
                    <dt className={`${eyebrow} text-muted`}>Focus</dt>
                    <dd className="mt-3 leading-relaxed">
                      Technical leadership, software architecture, distributed systems,
                      cloud-native platforms, machine learning
                    </dd>
                  </div>
                  <div>
                    <dt className={`${eyebrow} text-muted`}>Education</dt>
                    <dd className="mt-3 leading-relaxed">
                      M.S., Computer Science
                      <br />
                      University of Maryland, College Park
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-ink text-paper">
          <div className={`${container} pt-24 pb-12 md:pt-36`}>
            <p className={`${eyebrow} text-paper/60`}>
              05<span className="mx-2">/</span>Contact
            </p>
            <h2 className="mt-8 font-serif text-[clamp(2.9rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em]">
              Have a hard problem?
              <br />
              <em>Let&rsquo;s talk.</em>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-paper/15 pt-10 md:mt-24 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className={`${eyebrow} text-paper/60`}>Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 inline-block font-serif text-[1.75rem] break-all underline decoration-paper/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-paper sm:text-4xl"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="md:col-span-3">
                <p className={`${eyebrow} text-paper/60`}>Phone</p>
                <a
                  href={PHONE.href}
                  className="mt-3 inline-block text-lg underline decoration-paper/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-paper"
                >
                  {PHONE.display}
                </a>
              </div>
              <div className="md:col-span-3">
                <p className={`${eyebrow} text-paper/60`}>Elsewhere</p>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-lg underline decoration-paper/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-paper"
                >
                  LinkedIn
                  <Arrow className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <footer className="mt-24 flex flex-col gap-3 border-t border-paper/15 pt-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <Mark className="h-3.5 w-3.5" />
                <span>&copy; {new Date().getFullYear()} EDGECASE LLC</span>
              </div>
              <span>New York, NY</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
