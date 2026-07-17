import { useState } from "react"
import { Analytics } from "@vercel/analytics/react"

import Layout from "./components/Layout"
import OnePage from "./pages/OnePage"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <>
      <Layout activeSection={activeSection}>
        <OnePage onSectionChange={setActiveSection} />
      </Layout>
      <Analytics />
    </>
  )
}

export default App
