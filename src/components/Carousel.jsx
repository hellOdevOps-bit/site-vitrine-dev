import { useEffect, useState } from "react"

function Carousel({
  items,
  renderItem,
  className = "",
  labels = {},
}) {
  const [index, setIndex] = useState(0)
  const total = items.length
  const prevLabel = labels.prev ?? "Élément précédent"
  const nextLabel = labels.next ?? "Élément suivant"
  const pageLabel = labels.page ?? ((i) => `Élément ${i + 1}`)

  useEffect(() => {
    setIndex((current) => (total === 0 ? 0 : Math.min(current, total - 1)))
  }, [total])

  if (total === 0) return null

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-track">
        {items.map((item, i) => (
          <div
            key={i}
            className="carousel-slide"
            data-active={i === index}
            aria-hidden={i !== index}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className="carousel-btn carousel-btn-prev"
            onClick={goPrev}
            aria-label={prevLabel}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-btn carousel-btn-next"
            onClick={goNext}
            aria-label={nextLabel}
          >
            ›
          </button>
          <div className="carousel-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className="carousel-dot"
                aria-label={pageLabel(i)}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
