import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	//const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
	const [todos, setTodos] = useState<Todo[]>([]);

	const onAddTodoHandler = (newText: string) => {
		const newTodo = new Todo(newText);

		setTodos(todos => {
			return [...todos, newTodo];
		});
	};
	return (
		<div className="App">
			<NewTodo onAddTodo={onAddTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;
