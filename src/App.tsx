import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { getTodoItems } from "./services/Todolist.service";

function App() {

	interface TodoItem {
		id: number
		title: string
		isCompleted: boolean
		isDeleted: boolean
	}

	const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

	const [inputValue, setInputValue] = useState("");

	const handleAddNewTodo = () => {
		// setTodoItems([...todoItems, { title: inputValue,  }]);
		setInputValue('');
  	};

	useEffect(() => {
		getTodoItems().then((response) => {
			setTodoItems(response.data)
		})
	},[])

	return (
		<div>
			<h1 className="title">Todo List</h1>
			<div className="todo-item-container">
				{todoItems.map((item) => (
					<TodoItem name={item.title} />
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
