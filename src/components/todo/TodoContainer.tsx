import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TTodo } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  // local state
  // const { todos } = useAppSelector((state) => state.todo);

  // from server
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{isError}</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-1 ">
        <div className="bg-white p-5 w-full h-full space-y-2 ">
          {todos?.data?.map((item: TTodo) => (
            <TodoCard
              id={item.id}
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
            />
          ))}
        </div>
        <div>
          <h2 className="bg-white p-2 rounded-lg flex font-semibold items-center justify-center">
            There is not task pending
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
