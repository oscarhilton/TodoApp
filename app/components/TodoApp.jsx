var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require("uuid");

var TodoApp = React.createClass({
    getInitialState: function() {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
            {
                id: uuid(),
                text: 'Walk the dog'
            },
            {
                id: uuid(),
                text: 'Eat some soup'
            },
            {
                id: uuid(),
                text: 'Shit balls'
            },
            {
                id: uuid(),
                text: 'Poop on ye mam'
            },
        ]
      }; 
    },
    handleAddTodo: function(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        })   
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos} = this.state;
        
        return (
            <div>
                <h1>Todo App</h1>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;