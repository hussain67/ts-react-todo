import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		//Connection have to be establish befor using the following codes
		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}
		todosCtx.addTodo(enteredText);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="text">Tode Text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button type="submit">Todo</button>
		</form>
	);
};

export default NewTodo;
