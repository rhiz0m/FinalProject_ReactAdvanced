import { ChakraProvider, Box } from "@chakra-ui/react"
import Header from "./components/Header"
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactMeSection from "./components/ContactMeSection"
import Footer from "./components/Footer"
import { AlertProvider } from "./context/alertContext"
import Alert from "./components/Alert"
import { useState, useEffect, useRef } from "react"

function App() {
  const [showingHeader, setShowingHeader] = useState(true)
  const prevScrollPosition = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const scrollingDown = currentScrollPosition > prevScrollPosition.current

      setShowingHeader(!scrollingDown)
      prevScrollPosition.current = currentScrollPosition
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            height="60px"
            color="white"
            transition="transform 0.3s ease-in-out"
            transform={showingHeader ? "translateY(0)" : "translateY(-100%)"}
            zIndex={1000}
          >
            <Header />
          </Box>
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App
