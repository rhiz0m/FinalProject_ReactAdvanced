import { HStack } from "@chakra-ui/react"

const InternalNav = ({ links, handleClick }) => {
  return (
    <HStack spacing={8}>
      {links.map(({ href, name, id }, index) => (
        <a
          key={index}
          href={href}
          onClick={handleClick(id)}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          {name}
        </a>
      ))}
    </HStack>
  )
}

export default InternalNav
