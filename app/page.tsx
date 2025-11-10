import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            EDGECASE<span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
            <a href="#experience" className="text-slate-600 hover:text-slate-900 transition">Experience</a>
            <a href="#skills" className="text-slate-600 hover:text-slate-900 transition">Skills</a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900 transition">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Building the Future,<br />
            <span className="text-blue-600">One System at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
            Full-stack engineering and AI architecture for mission-critical systems.
            Over 20 years delivering solutions for Fortune 500 companies and government agencies.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">About Ali Emami</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/ali-emami.png"
                  alt="Ali Emami - Founder of EDGECASE LLC"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Fortune 500</div>
                  <div className="text-sm text-slate-600">Client Portfolio</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">TS/SCI</div>
                  <div className="text-sm text-slate-600">Clearance</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Senior full-stack engineer, systems architect, and founder of <strong>EDGECASE LLC</strong>,
                with over 20 years of experience building high-performance software across mobile, web,
                cloud infrastructure, and AI.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Through EDGECASE, I&apos;ve delivered consulting and contract work for global organizations
                including Amazon, American Express, and U.S. Air Force mission-critical systems, helping
                design and scale secure, production-grade platforms.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Recently launched <strong>Nayra</strong>, an AI-powered symbolic reflection app using
                OpenAI and Claude LLMs in production with custom prompt engineering and semantic workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {/* EDGECASE LLC */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Founder & Principal Engineer</h3>
                  <p className="text-blue-600 font-medium">EDGECASE LLC</p>
                </div>
                <span className="text-slate-500">2006 – Present</span>
              </div>
              <p className="text-slate-600 mb-4">
                Leading a technology consultancy delivering full-stack development, architecture,
                and AI integrations for startups and Fortune 500 companies.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-slate-600">
                    <strong>U.S. Air Force (2022 – 2025):</strong> Led cross-functional engineering
                    teams under TS clearance. Built ML-enhanced decision pipelines and secure, scalable
                    infrastructure for mission-critical systems.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-slate-600">
                    <strong>American Express (2016 – 2019):</strong> Modernized legacy member acquisition
                    platform (Node.js, React). Reduced product rollout time from months to minutes.
                    Led team of 8 engineers through complete platform migration.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-slate-600">
                    <strong>Amazon Audible (2015 – 2016):</strong> Core contributor to Catalog Platform.
                    Improved system latency by 30%, contributing to 40% YoY membership growth.
                    Implemented microservices architecture for scale.
                  </p>
                </div>
              </div>
            </div>

            {/* HealthFleet */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Chief Technology Officer</h3>
                  <p className="text-blue-600 font-medium">HealthFleet</p>
                </div>
                <span className="text-slate-500">2012 – 2015</span>
              </div>
              <p className="text-slate-600">
                Built HIPAA-compliant digital health platform from inception to acquisition.
                Led product and engineering teams across mobile and web platforms.
                Scaled to 50K+ active users managing chronic health conditions.
              </p>
            </div>

            {/* Earlier Experience */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Earlier Roles</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>Senior Software Engineer</strong> — CBS Interactive (2004-2006)</p>
                <p><strong>Senior Software Engineer</strong> — WebMD (2002-2004)</p>
                <p><strong>Senior Software Engineer</strong> — IAC InterActiveCorp (2000-2002)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Languages</h3>
              <p className="text-slate-600">Java, Node.js, Python, C, C++, TypeScript, JavaScript</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Frontend</h3>
              <p className="text-slate-600">React, Flutter, React Native, CSS, HTML5</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Backend & Data</h3>
              <p className="text-slate-600">PostgreSQL, MySQL, MongoDB, Firebase, Firestore</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud & DevOps</h3>
              <p className="text-slate-600">AWS (EC2, S3, Lambda), Docker, GitHub Actions, CI/CD</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI & LLM</h3>
              <p className="text-slate-600">OpenAI, Claude, Prompt Engineering, Vector Search, RAG</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security</h3>
              <p className="text-slate-600">OAuth, JWT, Secure Coding, TS/SCI Clearance Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Notable Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nayra</h3>
              <p className="text-slate-600 mb-4">
                AI-powered symbolic reflection app integrating OpenAI & Claude APIs. Built with
                Flutter, Firebase, and custom LLM prompt pipelines. Features dynamic prompt
                generation, context-aware responses, and semantic search capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">OpenAI</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Claude</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Firebase</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">AMEX OPEN Platform</h3>
              <p className="text-slate-600 mb-4">
                Led modernization from legacy Java monolith to microservices architecture.
                Implemented CI/CD pipeline reducing deployment time by 95%. Transformed product
                rollout cycle from months to minutes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Microservices</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CI/CD</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Audible Catalog System</h3>
              <p className="text-slate-600 mb-4">
                Designed caching layer handling 10M+ daily requests. Reduced database load by 60%
                while improving response times. Supported 40% YoY membership growth through
                performance optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Caching</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Scale</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">U.S. Air Force Systems</h3>
              <p className="text-slate-600 mb-4">
                Built ML-enhanced decision pipelines and secure infrastructure for mission-critical
                systems under TS clearance. Led cross-functional engineering teams delivering
                production-grade platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Security</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Available for consulting, contract work, and strategic advisory roles.
            Specializing in full-stack development, AI integration, and systems architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:ali.emami@gmail.com"
              className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              ali.emami@gmail.com
            </a>
            <a
              href="tel:+19172574316"
              className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (917) 257-4316
            </a>
            <a
              href="https://linkedin.com/in/aliemami"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="text-slate-400">
            <p className="mb-2">New York, NY</p>
            <p>Master of Science, Computer Science — University of Maryland, College Park</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-center">
        <p>&copy; {new Date().getFullYear()} EDGECASE LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
