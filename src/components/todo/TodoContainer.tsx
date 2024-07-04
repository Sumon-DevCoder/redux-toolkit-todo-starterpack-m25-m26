import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { Button } from "@/components/ui/button";

const todoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button>Add Todo</Button>
        <AddTodoModal />
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-1 ">
        <div className="bg-white p-5 w-full h-full space-y-2 ">
          <TodoCard />
          <TodoCard />
          <TodoCard />
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

export default todoContainer;
