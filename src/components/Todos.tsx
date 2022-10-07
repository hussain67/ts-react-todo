import React, { useContext } from "react";
import Todo from "../models/todo";
import Todoitem from "./Todoitem";
import { TodosContext } from "../store/todo-context";
const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	return (
		<ul>
			{todosCtx.items.map(item => (
				<Todoitem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
			))}
		</ul>
	);
};

export default Todos;

//React.FC is a type defination
//<{ items: string[] } annotate custom props
