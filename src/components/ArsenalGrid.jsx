import ArsenalCard from "./ArsenalCard"
import { ARSENAL_CATEGORIES } from "../data/arsenal"

function ArsenalGrid() {
  return (
    <div className="arsenal-grid">
      {ARSENAL_CATEGORIES.map((category) => (
        <ArsenalCard
          key={category.id}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  )
}

export default ArsenalGrid
