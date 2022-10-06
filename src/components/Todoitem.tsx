import React from "react";
import Todo from "../models/todo";

const Todoitem: React.FC<{ item: Todo }> = ({ item }) => {
	return <li key={item.id}>{item.text}</li>;
};
export default Todoitem;
