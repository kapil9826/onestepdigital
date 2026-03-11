import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteContent } from "./content/siteContent";
import { cn } from "./utils/cn";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Icon } from "./components/Icon";
import { Reveal } from "./components/Reveal";
import { Marquee } from "./components/Marquee";
import { SectionHeader } from "./components/SectionHeader";
import { Card } from "./components/Card";
import { Pill } from "./components/Pill";
import { Logo } from "./components/Logo";
import { ContactStrip } from "./components/ContactStrip";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { HeroScene } from "./components/HeroScene";
import { CountUp } from "./components/CountUp";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "work", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" }
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const reduced = useReducedMotion();
  const activeId = useScrollSpy(navItems.map((n) => n.id), 0.35);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="appShell">


      <header className={cn("navWrap", scrolled && "navScrolled")}>
        <div className="navInner">
          <button
            className="brand"
            onClick={() => scrollToId("home")}
            aria-label="Go to top"
          >
            <Logo />
          </button>

          <nav className="navDesktop" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={cn("navLink", activeId === item.id && "isActive")}
                onClick={() => scrollToId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navCtas">
            <a className="btn btnPrimary" href={siteContent.contact.whatsAppLink}>
              <Icon name="whatsapp" />
              WhatsApp
            </a>
            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className={cn("burgerLine", mobileOpen && "open")} />
              <span className={cn("burgerLine", mobileOpen && "open")} />
              <span className={cn("burgerLine", mobileOpen && "open")} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="navMobile glassmorphism"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: reduced ? 0 : 0.3 }}
            >
              <div className="navMobileInner">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={cn("navMobileLink", activeId === item.id && "isActive")}
                    onClick={() => {
                      setMobileOpen(false);
                      scrollToId(item.id);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="navMobileCtas">
                  <a className="btn btnGhost" href={siteContent.contact.whatsAppLink}>
                    <Icon name="whatsapp" /> Chat
                  </a>
                  <a className="btn btnPrimary" href={siteContent.contact.callLink}>
                    <Icon name="phone" /> Call
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main ref={topRef}>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <ParticleBackground />
          <div className="container heroGrid">
            <div className="heroLeft">
              <Reveal>
                <div className="pillGlow">
                  <Pill>
                    <Icon name="zap" />
                    {siteContent.hero.kicker}
                  </Pill>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="heroTitle textGradient">
                  {siteContent.hero.headline}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="heroSub">{siteContent.hero.subheadline}</p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="heroCtas">
                  <a className="btn btnGlow btnLg" href={siteContent.contact.whatsAppLink}>
                    <Icon name="rocket" />
                    Get Started
                  </a>
                  <button className="btn btnGhost btnExGhost btnLg" onClick={() => scrollToId("services")}>
                    <Icon name="search" />
                    View Services
                  </button>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="heroMetrics">
                  {siteContent.metrics.map((m, i) => (
                    <div key={i} className="metricBox">
                      <div className="metricIcon"><Icon name={m.icon} /></div>
                      <div>
                        <div className="metricValue">{m.value}</div>
                        <div className="metricLabel">{m.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="heroRight">
              <Reveal delay={0.2}>
                <HeroScene />
              </Reveal>
            </div>
          </div>

          <div className="heroMarquee">
            <Marquee items={siteContent.marquee} />
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section bgAlt">
          <div className="container">
            <SectionHeader
              eyebrow="Expertise"
              title={siteContent.services.title}
              desc={siteContent.services.desc}
            />

            <div className="grid3 servicesGrid">
              {siteContent.services.cards.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1} direction="up">
                  <Card gradient={s.gradient} className="serviceCard glassmorphism">
                    <div className={cn("serviceIconWrap", s.gradient)}>
                      <Icon name={s.icon} size={28} />
                    </div>
                    <h3 className="cardTitle">{s.title}</h3>
                    <p className="cardDesc">{s.desc}</p>
                    <ul className="cardList">
                      {s.bullets.map((b) => (
                        <li key={b}><Icon name="check" size={16} /> {b}</li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS SECTION (Why Choose Us) */}
        <section className="section metricsStrip">
          <div className="container">
            <div className="grid4">
              {siteContent.metrics.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bigMetricBox glassmorphism">
                    <div className="bigMetricIcon">
                      <Icon name={m.icon} size={40} />
                    </div>
                    <div className="bigMetricValue textGradient">
                      <CountUp end={parseInt(m.value.replace(/\D/g, ""))} suffix={m.value.replace(/\d/g, "")} />
                    </div>
                    <div className="bigMetricLabel">{m.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="section bgAlt">
          <div className="container">
            <SectionHeader
              eyebrow="Workflow"
              title={siteContent.process.title}
              desc={siteContent.process.desc}
            />

            <div className="processTimeline">
              {siteContent.process.steps.map((s, idx) => (
                <Reveal key={s.title} delay={idx * 0.1} direction="left">
                  <div className="processStep">
                    <div className="processConnector" />
                    <div className="processNumberBox">
                      <span className="processNumber">{idx + 1}</span>
                      <Icon name={s.icon} size={24} />
                    </div>
                    <Card className="processCard glassmorphism">
                      <h3 className="cardTitle">{s.title}</h3>
                      <p className="cardDesc">{s.desc}</p>
                      <ul className="cardList inlineList">
                        {s.bullets.map((b) => (
                          <li key={b}><span className="dotPrimary" /> {b}</li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="work" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Portfolio"
              title={siteContent.projects.title}
              desc={siteContent.projects.desc}
            />

            <div className="grid3">
              {siteContent.projects.items.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <Card className="workCard glassmorphism hoverUp">
                    <div className={cn("workThumbGlow", p.gradient)}>
                      <div className="workThumbInner">
                        <div className="workTag">{p.tag}</div>
                        <h4 className="workTitle">{p.title}</h4>
                        <div className="workSub">{p.subtitle}</div>
                      </div>
                    </div>
                    <div className="workBody">
                      <p className="workDesc">{p.desc}</p>
                      <div className="techStack">
                        {p.tech.map(t => (
                          <span key={t} className="techBadge">{t}</span>
                        ))}
                      </div>
                      <div className="workMeta mt-4">
                        <span className="textGradient fontBold">
                          <Icon name="star" /> {p.outcome}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="section bgAlt">
          <div className="container">
            <SectionHeader
              eyebrow="Reviews"
              title={siteContent.testimonials.title}
              desc={siteContent.testimonials.desc}
            />

            <div className="grid3">
              {siteContent.testimonials.items.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <Card className="testimonialCard glassmorphism">
                    <div className="stars">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Icon key={j} name="star" size={16} />
                      ))}
                    </div>
                    <p className="quote">"{t.quote}"</p>
                    <div className="author">
                      <div className="avatar">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="authorName">{t.name}</div>
                        <div className="authorRole">{t.role}</div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <ContactStrip />
      </main>

      <Footer />
    </div>
  );
}
