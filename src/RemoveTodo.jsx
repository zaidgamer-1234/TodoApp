import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "./TodoSlice";
import { Flex, Button, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

function RemoveTodo({ todo }) {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <UnorderedList
      spacing={3}
      mt={4}
      p={4}
      bg="gray.50"
      borderRadius="md"
      boxShadow="lg"
    >
      {todos.map((todos) => (
        <ListItem
          key={todos.id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bg="white"
          p={3}
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
          _hover={{ bg: "gray.100" }}
          boxShadow="sm"
        >
          <Text fontSize="lg" flex="1">
            {todos.text}
          </Text>
          <Flex>
            <Button
              onClick={() => dispatch(removeTodo(todos.id))}
              colorScheme="red"
              size="sm"
              leftIcon={<FaTrash />}
              mr={2}
              variant="outline"
              _hover={{ bg: "red.50" }}
            >
              Remove
            </Button>
            <Button
              onClick={() => dispatch(updateTodo(todos.id, todo))}
              colorScheme="blue"
              size="sm"
              leftIcon={<FaEdit />}
              variant="solid"
              _hover={{ bg: "blue.400" }}
            >
              Update
            </Button>
          </Flex>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default RemoveTodo;
