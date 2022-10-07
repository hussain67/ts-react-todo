import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = props => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (newText: string) => {
		const newTodo = new Todo(newText);

		setTodos(todos => {
			return [...todos, newTodo];
		});
	};
	const removeTodoHandler = (todoId: string) => {
		setTodos(todos => {
			return todos.filter(item => item.id !== todoId);
		});
	};
	const contextValue = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	};
	return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
