import TechIcon from "./TechIcon"

function ArsenalCard({ title, items }) {
  return (
    <article className="arsenal-card">
      <div className="arsenal-card-scan" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--tl" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--tr" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--bl" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--br" aria-hidden="true" />

      <header className="arsenal-card-header">
        <h3 className="arsenal-card-title">{title}</h3>
      </header>

      <div className="arsenal-card-divider" aria-hidden="true" />

      <ul className="arsenal-card-list">
        {items.map((item) => (
          <li key={item.id} tabIndex={0}>
            <div className="arsenal-item-row">
              <span className="arsenal-item-icon">
                <TechIcon id={item.id} />
              </span>
              <span className="arsenal-item-name">{item.name}</span>
            </div>
            <p className="arsenal-item-desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ArsenalCard
