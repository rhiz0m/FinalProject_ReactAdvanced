import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HStack, Link } from "@chakra-ui/react"

const HeaderExternalLinks = ({ links, size="2x" }) => {
  return (
    <HStack spacing={8}>
      {links.map(({ icon, url }, index) => (
        <Link key={index} href={url} isExternal>
          <FontAwesomeIcon icon={icon} size={size} />
        </Link>
      ))}
    </HStack>
  )
}

export default HeaderExternalLinks
