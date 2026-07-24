import { FEATURE_LEVELS } from "../data/productFeatures"

const GROUP_LABELS = {
  core: "Indispensable",
  optional: "Selon le projet",
}

function FeatureGroup({ level, items }) {
  if (items.length === 0) return null

  const { symbol } = FEATURE_LEVELS[level]

  return (
    <div className={`product-feature-group product-feature-group--${level}`}>
      <p className="product-feature-group-label">
        <span aria-hidden="true">{symbol}</span>
        {GROUP_LABELS[level]}
      </p>
      <ul className="product-feature-list">
        {items.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

function ProductFeatureCard({ type, description, features }) {
  const core = features.filter((f) => f.level === "core").map((f) => f.name)
  const optional = features.filter((f) => f.level === "optional").map((f) => f.name)

  return (
    <article className="arsenal-card product-feature-card">
      <div className="arsenal-card-scan" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--tl" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--tr" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--bl" aria-hidden="true" />
      <div className="arsenal-card-corner arsenal-card-corner--br" aria-hidden="true" />

      <header className="arsenal-card-header">
        <h3 className="arsenal-card-title">{type}</h3>
        {description && <p className="product-feature-desc">{description}</p>}
      </header>

      <div className="arsenal-card-divider" aria-hidden="true" />

      <FeatureGroup level="core" items={core} />
      <FeatureGroup level="optional" items={optional} />
    </article>
  )
}

export default ProductFeatureCard
