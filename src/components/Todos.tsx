import React from "react";
import Todo from "../models/todo";
import Todoitem from "./Todoitem";

const Todos: React.FC<{ items: Todo[] }> = props => {
	return (
		<ul>
			{props.items.map(item => (
				<Todoitem item={item} />
			))}
		</ul>
	);
};

export default Todos;

//React.FC is a type defination
//<{ items: string[] } annotate custom props
