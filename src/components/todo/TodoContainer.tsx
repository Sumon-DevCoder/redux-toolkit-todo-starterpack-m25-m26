import TodoCard from "./TodoCard";

const todoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-5 space-y-2">
        <TodoCard />
        <TodoCard />
        <TodoCard />
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
