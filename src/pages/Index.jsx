import { Container, Text, VStack, Box, Flex, Spacer, Button, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} borderRadius="md" mb={6}>
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button variant="ghost" mr={4}>Home</Button>
          <Button variant="ghost" mr={4}>About</Button>
          <Button variant="ghost">Contact</Button>
        </Box>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.50" p={4} borderRadius="md" shadow="md">
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of your React application.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;