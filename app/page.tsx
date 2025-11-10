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
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
            <a href="#clients" className="text-slate-600 hover:text-slate-900 transition">Clients</a>
            <a href="#leadership" className="text-slate-600 hover:text-slate-900 transition">Leadership</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Technology Consultancy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Enterprise Software<br />
            <span className="text-blue-600">That Scales</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto">
            EDGECASE delivers full-stack engineering, AI architecture, and cloud infrastructure
            for Fortune 500 companies and mission-critical systems.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Start a Project
            </a>
            <a
              href="#clients"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition"
            >
              Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-slate-600">Years in Business</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">Fortune 500</div>
              <div className="text-slate-600">Clients Served</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">TS/SCI</div>
              <div className="text-slate-600">Cleared Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver end-to-end software solutions, from architecture to deployment,
              specializing in complex enterprise systems and AI integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Full-Stack Development</h3>
              <p className="text-slate-600 mb-4">
                End-to-end application development with modern frameworks. React, Node.js, Flutter,
                and cloud-native architectures for web and mobile platforms.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Web & Mobile Applications</li>
                <li>• Microservices Architecture</li>
                <li>• API Design & Integration</li>
                <li>• Legacy System Modernization</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">AI & Machine Learning</h3>
              <p className="text-slate-600 mb-4">
                Production-ready AI solutions with LLM integration, custom prompt engineering,
                and intelligent automation for enterprise workflows.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• LLM Integration (OpenAI, Claude)</li>
                <li>• Prompt Engineering & RAG</li>
                <li>• ML Pipeline Development</li>
                <li>• Semantic Search & Embeddings</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-slate-600 mb-4">
                Scalable, secure cloud architecture on AWS and other platforms. DevOps, CI/CD,
                and infrastructure automation for mission-critical systems.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• AWS/Cloud Architecture</li>
                <li>• DevOps & CI/CD Pipelines</li>
                <li>• Security & Compliance</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About EDGECASE</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2006, EDGECASE LLC is a technology consultancy specializing in
                enterprise software development, AI integration, and cloud infrastructure.
                We partner with organizations to build scalable, secure, production-grade platforms.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our expertise spans the complete software lifecycle—from architecture and development
                to deployment and optimization. We&apos;ve delivered solutions for Fortune 500 companies
                including Amazon, American Express, and mission-critical systems for the U.S. Air Force.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We specialize in complex technical challenges: modernizing legacy systems,
                integrating AI capabilities into existing platforms, and building cloud-native
                architectures that scale.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Our Approach</h3>
                <p className="text-slate-600">
                  Deep technical expertise combined with business strategy. We align engineering
                  decisions with organizational goals to deliver measurable results.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Our Values</h3>
                <p className="text-slate-600">
                  Technical excellence, clear communication, and ownership. We take responsibility
                  for outcomes and maintain the highest standards of quality and security.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Our Track Record</h3>
                <p className="text-slate-600">
                  20+ years of successful engagements with zero failed projects. Our clients
                  return because we deliver on time, on budget, and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Projects Section */}
      <section id="clients" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by leading organizations to deliver high-stakes software projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  USAF
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">U.S. Air Force</h3>
                  <p className="text-slate-600">2022 – 2025</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                Led cross-functional engineering teams under TS clearance. Built ML-enhanced decision
                pipelines and secure, scalable infrastructure for mission-critical systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Security</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cloud</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  AMEX
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">American Express</h3>
                  <p className="text-slate-600">2016 – 2019</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                Modernized legacy member acquisition platform. Reduced product rollout time from
                months to minutes. Led team of 8 engineers through complete platform migration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Microservices</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Amazon Audible</h3>
                  <p className="text-slate-600">2015 – 2016</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                Core contributor to Catalog Platform. Improved system latency by 30%, contributing
                to 40% YoY membership growth. Designed caching layer handling 10M+ daily requests.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Scale</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Performance</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Nayra</h3>
                  <p className="text-slate-600">2024 – Present</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                AI-powered symbolic reflection app integrating OpenAI & Claude APIs. Built with
                Flutter, Firebase, and custom LLM prompt pipelines featuring context-aware responses.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AI/LLM</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Led by experienced engineers with decades of enterprise software delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-sm border border-slate-200">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg mb-4">
                  <Image
                    src="/images/ali-emami.png"
                    alt="Ali Emami - Founder & Principal Engineer"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Ali Emami</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & Principal Engineer</p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Senior full-stack engineer and systems architect with over 20 years of experience
                  building high-performance software across mobile, web, cloud infrastructure, and AI.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Master of Science in Computer Science from University of Maryland, College Park.
                  Extensive experience with Fortune 500 companies and government agencies, including
                  TS/SCI clearance work.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/aliemami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:ali.emami@gmail.com"
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to build something exceptional? Contact us to discuss your requirements and
            explore how EDGECASE can help deliver your vision.
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
            <p className="mb-2">Based in New York, NY</p>
            <p className="text-sm">Serving clients nationwide and internationally</p>
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
