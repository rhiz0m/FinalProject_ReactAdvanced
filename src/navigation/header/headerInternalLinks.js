import { HStack, Link as ChakraLink } from "@chakra-ui/react"

const HeaderInternalLinks = ({ links, handleClick }) => {
  return (
    <HStack spacing={8}>
      {links.map(({ href, name, id }, index) => (
        <ChakraLink
          key={index}
          href={href}
          onClick={() => handleClick(id)}
          textDecoration="none"
          cursor="pointer"
          fontWeight="semibold" 
          _hover={{ textDecoration: "none" }}
        >
          {name}
        </ChakraLink>
      ))}
    </HStack>
  )
}

export default HeaderInternalLinks
