const TodoCard = () => {
  return (
    <div className="bg-white p-2 rounded-lg flex justify-between items-center">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-3 ">
        <button className="bg-blue-400 p-1 rounded-md text-sm">Delete</button>
        <button className="bg-blue-400 p-1 rounded-md text-sm">Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
