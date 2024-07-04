import Todo from "./pages/Todo";

const App = () => {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((count) => count.counter);

  return (
    <div>
      {/* <Button onClick={() => dispatch(increment())}>-</Button> */}
      {/* <h2>{count}</h2> */}
      {/* <Button>+</Button>
      <Button>5</Button> */}

      <Todo />
    </div>
  );
};

export default App;
