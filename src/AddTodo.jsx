import { Input, Button, Flex } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";

function AddTodo({ todo, setTodo }) {
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <Flex
      align="center"
      mt={4}
      mb={4}
      p={4}
      bg="teal.50"
      borderRadius="md"
      boxShadow="lg"
    >
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new task"
        size="lg"
        mr={2}
        borderColor="teal.300"
        _hover={{ borderColor: "teal.500" }}
        _focus={{ borderColor: "teal.600", boxShadow: "0 0 0 1px teal.600" }}
      />
      <Button
        onClick={handleAddTodo}
        colorScheme="teal"
        size="lg"
        leftIcon={<FaPlus />}
        bgGradient="linear(to-r, teal.400, teal.500)"
        _hover={{ bgGradient: "linear(to-r, teal.500, teal.600)" }}
        boxShadow="md"
      >
        Add Todo
      </Button>
    </Flex>
  );
}

export default AddTodo;
