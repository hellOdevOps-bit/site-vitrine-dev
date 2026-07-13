import Navbar from "./Navbar"

function Layout({ children, activeSection = "home" }) {
    return (
        <div className="app">
            <header>
                <Navbar activeSection={activeSection} />
            </header>

            <main className="content">
                {children}
            </main>

            <footer className="footer">
                © {new Date().getFullYear()} — Anthony Exartier
            </footer>
        </div>
    )
}

export default Layout
