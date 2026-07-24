function ProjectSection({ heading, text, items }) {
  return (
    <div className="project-section">
      <h4 className="project-section-heading">{heading}</h4>
      {text && <p className="project-section-text">{text}</p>}
      {items && (
        <ul className="project-section-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ProjectSlide({ project }) {
  if (project.sections) {
    return (
      <article className="project-slide project-slide--detailed">
        <h3 className="project-slide-title">{project.title}</h3>
        <p className="project-stack">
          <span className="project-stack-label">Stack</span>
          {project.stack}
        </p>
        {project.url && (
          <p className="project-url">
            <span className="project-stack-label">Site web</span>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url.replace(/^https?:\/\//, "")}
            </a>
          </p>
        )}
        {project.sections.map((section) => (
          <ProjectSection key={section.heading} {...section} />
        ))}
      </article>
    )
  }

  return (
    <article className="project-slide">
      <h3 className="project-slide-title">{project.title}</h3>
      <p className="project-slide-description">{project.description}</p>
    </article>
  )
}

export default ProjectSlide
