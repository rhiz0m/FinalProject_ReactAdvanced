import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" borderRadius="lg" >
      <Image src={imageSrc} alt="project image" borderRadius="lg" />
      <VStack spacing="3" alignItems="start" p="4">
        <Heading size="md" color="black">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
        <HStack>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Card
