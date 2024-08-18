import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
	const [todoItems, setTodoItems] = useState([
		{ name: "Buy Milk" },
		{ name: "Buy Eggs" },
		{ name: "Buy Bread" },
	]);

	const [inputValue, setInputValue] = useState("");

	const handleAddNewTodo = () => {
    setTodoItems([...todoItems, { name: inputValue }]);
    setInputValue('');
  };

	return (
		<div>
			<h1 className="title">Todo List</h1>
			<div className="todo-item-container">
				{todoItems.map((item) => (
					<TodoItem name={item.name} />
				))}

				<div className="add-todo">
					<input
						className="add-todo-input"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						type="text"
						placeholder="Add a new todo"
					/>
					<button onClick={handleAddNewTodo}>Add</button>
				</div>
			</div>
		</div>
	);
}

export default App;
