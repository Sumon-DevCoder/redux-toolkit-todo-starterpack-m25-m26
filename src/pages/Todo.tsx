import Container from "@/components/ui/Container";
import TodoContainer from "./../components/todo/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h2 className="text-center font-bold text-2xl my-6">Welcome My Todo</h2>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
