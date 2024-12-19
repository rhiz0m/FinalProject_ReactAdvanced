import React, { useEffect, useRef } from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import { Box, HStack } from "@chakra-ui/react"
import InternalNav from "../navigation/header/internalNav"
import ExternalNav from "../navigation/header/externalNav"

const Header = () => {
  const externalLinks = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ]

  const internalLinks = [
    { href: "/#contact-me", id: "contactme-section", name: "Contact Me" },
    { href: "/#projects", id: "projects-section", name: "Projects" },
  ]

  const handleClick = (id) => (event) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ExternalNav links={externalLinks} />
          </nav>
          <nav>
            <InternalNav links={internalLinks} handleClick={handleClick}/>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}
export default Header
