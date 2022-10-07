import React from "react";
import Todo from "../models/todo";
import Todoitem from "./Todoitem";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = props => {
	return (
		<ul>
			{props.items.map(item => (
				<Todoitem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
			))}
		</ul>
	);
};

export default Todos;

//React.FC is a type defination
//<{ items: string[] } annotate custom props
