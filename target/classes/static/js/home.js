window.onload = () => {
	document.getElementById("completeTodosButton").addEventListener("click", completeTodos);
}

function completeTodos() {
	let completedTodos = document.querySelectorAll("input[name=completedTodos]:checked");
	let todoArray = [];
	for (let todo of completedTodos) {
		todoArray.push(todo.parentElement.parentElement.firstElementChild.textContent);
	}
	updateTodos(todoArray);
}

function updateTodos(idArray) {
	let xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = () => {
//		if (xhr.status === 200 && xhr.readyState === 4) {
//			console.log(xhr.responseText);
//		}
//	}
	const token = document.getElementById("_csrf").getAttribute("content");
	const header = document.getElementById("_csrf_header").getAttribute("content");
	xhr.open("POST", "http://localhost:8080/todos/update");
	xhr.withCredentials = true;
	xhr.setRequestHeader(header, token);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(idArray));
}
