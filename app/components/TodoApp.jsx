var React = require("react");
var TodoList = require("TodoList");

var TodoApp = React.createClass({
    getInitialState: function() {
      return {
        todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Eat some soup'
            },
            {
                id: 3,
                text: 'Shit balls'
            },
            {
                id: 4,
                text: 'Poop on ye mam'
            },
        ]
      }; 
    },
    render: function(){
        var {todos} = this.state;
        
        return (
            <div>
                <h1>Todo App</h1>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;