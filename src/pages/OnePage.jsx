import { useState, useEffect } from "react"
import TechIcon from "../components/TechIcon"
import AssistantIntro from "../components/AssistantIntro"
import ArsenalGrid from "../components/ArsenalGrid"
import Carousel from "../components/Carousel"
import background from "../assets/images/background-brain-cyberpunk.jpg"
import aboutPhoto from "../assets/images/photo pro sbg.png"
import heroLogo from "../assets/logos/Hello_Dev0ps! fond transparent.svg"

const PROJECTS = [
  { title: "WedQR", description: "Application web interactive développée pour un mariage qui permet aux invités d'accéder facilement à différentes informations et fonctionnalités grâce à un simple QR Code présent sur les tables et supports de l'événement." },
  { title: "Site web Hello_Dev0ps", description: "Ce site — React, Vite, one-page." },
  { title: "Site web de cabinet infirmier libéral", description: "Site web vitrine de mon cabinet d'infirmier libéral." },
]

const SECTION_IDS = ["home", "about", "expertise", "projects", "contact"]

function OnePage({ onSectionChange }) {
  const [showAssistant, setShowAssistant] = useState(false)

  useEffect(() => {
    if (!onSectionChange) return

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && SECTION_IDS.includes(e.target.id))
          .map((e) => e.target.id)
        const active = SECTION_IDS.find((id) => visible.includes(id))
        if (active) onSectionChange(active)
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onSectionChange])

  return (
    <div
      className="one-page-bg"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* 1. Hero / Accueil */}
      <section id="home" className="home page section">
        <div className="hero">
          <div className="hero-content">
            <img
              src={heroLogo}
              alt="Hello_Dev0ps!"
              className="hero-logo"
            />
            <p className="hero-subtitle">
              Développeur full-stack — humain augmenté par l'IA
            </p>
            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={() => setShowAssistant(true)}
              >
                ▶ Présentation
              </button>
            </div>
          </div>
          {showAssistant && (
            <AssistantIntro onClose={() => setShowAssistant(false)} />
          )}
        </div>
      </section>

      {/* 2. À propos */}
      <section id="about" className="page section">
        <div className="page-header">
          <h1>À propos</h1>
        </div>
        <div className="page-content about-content">
          <img
            src={aboutPhoto}
            alt="Anthony Exartier"
            className="about-photo"
          />
          <p>
            Je m’appelle Anthony Exartier, développeur passionné par les systèmes,
            les machines et les interfaces intelligentes.
            Dans une société où notre vie numérique est de plus en plus importante,
            les dangers sont eux aussi de plus en plus nombreux et variés. 
            C'est pourquoi j’intègre dès la conception une attention particulière à la sécurité et à la confidentialité des données.
          </p>

          <p>
            Après une dizaine d'années dans le domaine de la santé, j’ai choisi d’élargir mon activité au développement logiciel
            en me formant principalement en autodidacte. J’exerce aujourd’hui comme infirmier libéral
            tout en développant progressivement mon activité dans la tech.
            Ma formation et mon expérience d'infirmier m'ont appris à mettre l'accent sur le travail bien fait et la qualité de service,
            ces notions étant essentielles dans le domaine de la santé comme dans le développement logiciel.
          </p>

          <p>
            Aujourd’hui, je conçois des applications, des sites web et des outils sur mesure,
            en combinant logique humaine, automatisation et intégration de l'intelligence artificielle.
            Parce que pour moi, les meilleurs tests sont ceux que l'on peut tester soi-même,
            mes deux premiers projets ont été le site web de mon cabinet d'infirmier libéral
            et l'application web interactive développée pour mon propre mariage,
            qui permet aux invités d'accéder facilement à différentes informations et fonctionnalités
            grâce à un simple QR code.
          </p>

          <p>
            Voulant garder un certain équilibre entre ma vie professionnelle et personnelle,
            je ne cherche que des projets réalisables à distance pour le moment.
          </p>
        </div>
      </section>

      {/* 3. Expertises */}
      <section id="expertise" className="page section">
        <div className="page-header">
          <h1>Expertises</h1>
        </div>
        <div className="page-content arsenal-section">
          <h2 className="arsenal-heading">Mon Arsenal</h2>
          <p className="arsenal-intro">
            Stack technique et outils IA — maîtrisés au fil des projets.
          </p>
          <ArsenalGrid />
        </div>
        <div className="page-content">
          <h2>Approche</h2>
          <p>
            Comprendre le besoin réel, proposer une solution claire, livrer
            quelque chose d'utilisable et durable.
          </p>
        </div>
      </section>

      {/* 4. Projets */}
      <section id="projects" className="page section">
        <div className="page-header">
          <h1>Projets</h1>
        </div>
        <div className="page-content">
          <Carousel
            items={PROJECTS}
            renderItem={(project) => (
              <>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </>
            )}
          />
        </div>
      </section>

      {/* 5. Contact */}
      <section id="contact" className="page section">
        <div className="page-header">
          <h1>Contact</h1>
        </div>
        <div className="page-content">
          <p className="contact-intro">
            Une idée de projet, une question ? N'hésitez pas à me contacter.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:hello.dev0ps81@gmail.com">hello.dev0ps81@gmail.com</a>
            </li>
            <li>
              <span className="contact-label">Téléphone</span>
              <a href="tel:+33000000000">+33 0 00 00 00 00</a>
            </li>
            <li>
              <span className="contact-label">
                <TechIcon id="linkedin" className="contact-label-icon" />
                LinkedIn
              </span>
              <a href="https://linkedin.com/in/hellodev0ps" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/hellodev0ps
              </a>
            </li>
            <li>
              <span className="contact-label">
                <TechIcon id="github" className="contact-label-icon" />
                GitHub
              </span>
              <a href="https://github.com/hellOdevOps-bit" target="_blank" rel="noopener noreferrer">
                github.com/hellOdevOps-bit
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default OnePage
