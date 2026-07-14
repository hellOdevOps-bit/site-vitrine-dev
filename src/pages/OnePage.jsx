import { useState, useEffect } from "react"
import TechIcon from "../components/TechIcon"
import AssistantIntro from "../components/AssistantIntro"
import ArsenalGrid from "../components/ArsenalGrid"
import Carousel from "../components/Carousel"
import ProjectSlide from "../components/ProjectSlide"
import { PROJECTS } from "../data/projects"
import background from "../assets/images/background-brain-cyberpunk.jpg"
import aboutPhoto from "../assets/images/anthony-profile.png"
import heroLogo from "../assets/logos/hello-dev0ps-transparent.svg"

const SECTION_IDS = ["home", "about", "expertise", "projects", "contact"]
const ASSISTANT_INTRO_ENABLED = false
const CONTACT_PHONE_ENABLED = false

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
      style={{ "--page-bg": `url(${background})` }}
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
              Le meilleur code est celui qui répond au vrai problème.
            </p>
            {ASSISTANT_INTRO_ENABLED && (
              <div className="hero-actions">
                <button
                  className="btn-primary"
                  onClick={() => setShowAssistant(true)}
                >
                  ▶ Présentation
                </button>
              </div>
            )}
          </div>
          {ASSISTANT_INTRO_ENABLED && showAssistant && (
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
          </p>

          <h3>DE LA SANTÉ À LA TECH</h3>

          <p>
            Après une dizaine d'années dans le domaine de la santé, j’ai choisi d’élargir mon activité au développement logiciel
            en me formant principalement en autodidacte. J’exerce aujourd’hui comme infirmier libéral
            tout en développant progressivement mon activité dans la tech.
          </p>

          <h3>AUJOURD'HUI</h3>

          <p>
            Aujourd’hui, je conçois des applications, des sites web et des outils sur mesure,
            en combinant logique humaine, automatisation et intégration de l'intelligence artificielle.
          </p>

          <h3>MA PHILOSOPHIE</h3>

          <p>
            Mes premiers projets sont nés de besoins que je connaissais directement :
            le site web de mon cabinet d'infirmier libéral
            et une application web interactive développée pour mon propre mariage,
            qui permet aux invités d'accéder facilement à différentes informations et fonctionnalités
            grâce à un simple QR code.
          </p>

          <p>
            Voulant garder un certain équilibre entre ma vie professionnelle et personnelle,
            je privilégie actuellement les projets réalisables à distance.
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
            Une stack technique construite au fil de projets concrets, de formations en ligne
            et d’un apprentissage autodidacte constant.
          </p>

          <p>
            J’utilise aussi les LLMs comme outils pédagogiques pour comprendre les choix
            techniques, comparer les solutions et progresser plus vite sans me contenter
            de copier du code.
          </p>
          <ArsenalGrid />
        </div>
        <div className="page-content">
          <h2>Approche</h2>
          <p>
            Je commence par clarifier le besoin réel, identifier les contraintes et
            choisir une solution proportionnée au projet. Mon objectif est de livrer
            un outil utile, maintenable et compréhensible.
          </p>

          <p>
            Dans une société où notre vie numérique est de plus en plus importante,
            les dangers sont eux aussi de plus en plus nombreux et variés. 
            C'est pourquoi j’intègre dès la conception une attention particulière à la sécurité et à la confidentialité des données.
          </p>

          <p>
            Ma formation et mon expérience d'infirmier m'ont appris à mettre l'accent sur le travail bien fait et la qualité de service,
            ces notions étant essentielles dans le domaine de la santé comme dans le développement logiciel.
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
            renderItem={(project) => <ProjectSlide project={project} />}
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
            Pour toute demande d'information complémentaire, une demande de devis, une question sur les tarifs exercés, ou tout autre idée de projet, n'hésitez pas à me contacter.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:hello.dev0ps81@gmail.com">hello.dev0ps81@gmail.com</a>
            </li>
            {CONTACT_PHONE_ENABLED && (
              <li>
                <span className="contact-label">Téléphone</span>
                <a href="tel:+33000000000">+33 0 00 00 00 00</a>
              </li>
            )}
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
