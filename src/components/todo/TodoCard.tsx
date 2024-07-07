import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "@/redux/api/api";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();

  const [removeTodo, { data, isLoading, isError, isSuccess }] =
    useDeleteTodosMutation();

  const [updateTodos] = useUpdateTodosMutation();

  console.log("delete todo", data, isLoading, isError, isSuccess);
  console.log("update todo", data, isLoading, isError, isSuccess);

  const handleToogle = () => {
    // dispatch(toggleComplete(id));

    const options = {
      id,
      data: {
        title,
        description,
        isCompleted: !isCompleted,
        priority,
      },
    };

    updateTodos(options);
  };

  return (
    <div className="bg-white rounded-lg flex justify-between items-center">
      <input
        onChange={handleToogle}
        type="checkbox"
        name="complete"
        id="complete"
        defaultChecked={isCompleted}
      />
      <p className="flex-1 ml-5">{title}</p>
      <div className="flex justify-center items-center flex-1">
        <div
          className={`size-2 rounded-full bg-red-500 ${
            priority === "high" ? "bg-red-500" : null
          }  ${priority === "medium" ? "bg-yellow-500" : null}  ${
            priority === "low" ? "bg-green-500" : null
          }`}
        ></div>
        <p className="flex-1 ml-5">{priority}</p>
      </div>
      <p className="flex-1">{isCompleted ? "done" : "pending"}</p>
      <p className="flex-1">{description}</p>
      <div className="space-x-3 ">
        <button
          onClick={() => removeTodo(id)}
          className="bg-red-400 p-1 rounded-md text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <button className="bg-blue-400 p-1 rounded-md text-sm">
          <svg
            className="size-6 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
