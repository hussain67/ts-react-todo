import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		//Connection have to be establish befor using the following codes
		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}
		props.onAddTodo(enteredText);
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
