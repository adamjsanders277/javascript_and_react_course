$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)
	.catch(function(err){
		console.log(err);
	})

	$('#todoInput').keypress(function(event){
		if(event.which === 13){
			createTodo();
		}
	})

	$('.list').on('click','li',function(){
		updateTodo($(this));
	})

	$('.list').on('click','span',function(e){
		e.stopPropagation();
		removeTodo($(this).parent());
	})
});

function updateTodo(todo) {
	var id = todo.data('id');
	var putUrl = '/api/todos/' + id;
	var isDone = !todo.data('completed');
	var updateData = {completed: isDone};
	$.ajax({
		method: 'PUT',
		url: putUrl,
		data: updateData
	})
	.then(function(updatedTodo){
		todo.toggleClass("done");
		todo.data('completed', isDone);
	})
	.catch(function(err){
		console.log(err);
	})
}

function removeTodo(todo) {
	var id = todo.data('id');
	var deleteUrl = '/api/todos/' + id;
	$.ajax({
		method: 'DELETE',
		url: deleteUrl
	})
	.then(function(data){
		todo.remove();
	})
	.catch(function(err){
		console.log(err);
	})
}

function addTodos(todos) {
	todos.forEach(function(todo){
		addTodo(todo);
	})
}

function addTodo(todo) {
	var newTodo = $('<li class="task">'+todo.name+ ' <span>X</span></li>');
	newTodo.data('id',todo._id);
	newTodo.data('completed',todo.completed);
	if(todo.completed) {
		newTodo.addClass("done");
	}
	$('.list').append(newTodo);
}

function createTodo() {
	//send request to create new todo
	var usrInput = $('#todoInput').val();
	$.post("/api/todos", {name: usrInput})
	.then(function(newTodo){
		$('#todoInput').val('');
		addTodo(newTodo);

	})
	.catch(function(err){
		console.log(err);
	})
}

