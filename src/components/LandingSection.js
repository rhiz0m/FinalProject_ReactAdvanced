import React from "react"
import { Avatar, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"

const greeting = "Hello, I am Pete!"
const bio1 = "A frontend developer"
const bio2 = "specialised in React"

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing="6">
      <Stack spacing="3">
        <Avatar name="Pete" size="2xl" src="https://i.pravatar.cc/150?img=7" />
        <Text fontSize="md">{greeting}</Text>
      </Stack>

      <Heading as="h1" >
        {bio1}
        <br />
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
)

export default LandingSection
