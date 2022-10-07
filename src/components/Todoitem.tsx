import React from "react";
import Todo from "../models/todo";

const Todoitem: React.FC<{ text: string; onRemoveTodo: () => void }> = props => {
	return <li onClick={props.onRemoveTodo}>{props.text}</li>;
};
export default Todoitem;
