import ProductFeatureCard from "./ProductFeatureCard"
import {
  FEATURE_COLUMNS,
  FEATURE_LEVELS,
  PRODUCT_FEATURES,
} from "../data/productFeatures"

function ProductFeaturesGrid() {
  return (
    <div className="product-features">
      <ul className="product-features-legend">
        {Object.entries(FEATURE_LEVELS)
          .filter(([key]) => key !== "none")
          .map(([key, { symbol, label }]) => (
            <li key={key}>
              <span
                className={`product-features-mark product-features-mark--${key}`}
                aria-hidden="true"
              >
                {symbol}
              </span>
              {label}
            </li>
          ))}
      </ul>

      <div className="product-features-grid">
        {PRODUCT_FEATURES.map(({ type, description, features }) => (
          <ProductFeatureCard
            key={type}
            type={type}
            description={description}
            features={features.map((level, index) => ({
              name: FEATURE_COLUMNS[index],
              level,
            }))}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductFeaturesGrid
