var todo = angular.module("TodoApp",[]);
todo.controller('TodoCtrl', function() {

    var todo = this;
    todo.items = [];

    if(window.localStorage['todo'] != undefined) {
        todo.items = JSON.parse(window.localStorage['todo']);
    }

    todo.add = function(description) {

        var item = {
            text: description,
            completed: false
        }

        todo.items.push(item);
        todo.newTodo = "";

        console.log(todo.items);

        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        window.localStorage['todo'] = JSON.stringify(todo.items);
    }



});