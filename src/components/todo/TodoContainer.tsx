import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TTodo } from "@/redux/features/todoSlice";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // local state data get
  // const { todos } = useAppSelector((state) => state.todo);

  // from server statte data get
  const { data: todos, isError, isLoading } = useGetTodosQuery(priority);

  // isLoading
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // isError
  if (isError) {
    return <p>{isError}</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-1 ">
        <div className="bg-white p-5 w-full h-full space-y-2 ">
          {todos?.data?.map((item: TTodo) => (
            <TodoCard
              key={item._id}
              id={item._id}
              title={item?.title}
              description={item.description}
              isCompleted={item.isCompleted}
              priority={item.priority}
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
