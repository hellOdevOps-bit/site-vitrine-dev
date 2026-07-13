import { useState } from "react"

import Layout from "./components/Layout"
import OnePage from "./pages/OnePage"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <Layout activeSection={activeSection}>
      <OnePage onSectionChange={setActiveSection} />
    </Layout>
  )
}

export default App
