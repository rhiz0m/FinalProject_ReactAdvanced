import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HStack, Link } from "@chakra-ui/react"

const ExternalNav = ({ links }) => {
  return (
    <HStack spacing={8}>
      {links.map(({ icon, url }, index) => (
        <Link key={index} href={url} isExternal>
          <FontAwesomeIcon icon={icon} size="2x" />
        </Link>
      ))}
    </HStack>
  )
}

export default ExternalNav
