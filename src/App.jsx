import { useState } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import RemoveTodo from "./RemoveTodo";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <Container maxW="container.md" mt={20}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        boxShadow="2xl"
        bg="purple.50"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={6} color="purple.700">
          Todo App
        </Heading>
        <AddTodo todo={todo} setTodo={setTodo} />
        <RemoveTodo todo={todo} />
      </Box>
    </Container>
  );
}

export default App;
