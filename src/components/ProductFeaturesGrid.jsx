import { useEffect, useState } from "react"
import Carousel from "./Carousel"
import ProductFeatureCard from "./ProductFeatureCard"
import {
  FEATURE_COLUMNS,
  FEATURE_LEVELS,
  PRODUCT_FEATURES,
} from "../data/productFeatures"

const MOBILE_QUERY = "(max-width: 640px)"

function chunkItems(items, size) {
  const pages = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
}

function mapFeatures(features = []) {
  return features.map((level, index) => ({
    name: FEATURE_COLUMNS[index],
    level,
  }))
}

function ProductFeaturesGrid() {
  const [perPage, setPerPage] = useState(4)

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)
    const update = () => setPerPage(media.matches ? 1 : 4)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  const pages = chunkItems(PRODUCT_FEATURES, perPage)

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

      <Carousel
        className="product-features-carousel"
        items={pages}
        labels={{
          prev: "Page précédente",
          next: "Page suivante",
          page: (i) => `Page ${i + 1}`,
        }}
        renderItem={(page) => (
          <div className="product-features-grid">
            {page.map(({ type, description, features }) => (
              <ProductFeatureCard
                key={type}
                type={type}
                description={description}
                features={mapFeatures(features)}
              />
            ))}
          </div>
        )}
      />
    </div>
  )
}

export default ProductFeaturesGrid
