var React = require("react");

var AddTodo = React.createClass({
    onAddTodo: function(e){
        e.preventDefault();
        
        var text = this.refs.text.value;
        
        if(text.length > 0){
            this.refs.text.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.text.focus();
        }
    },
    render: function(){
        return (
            <div>
                <form ref="form" onSubmit={this.onAddTodo}>
                    <input type="text" ref="text" placeholder="Add a new todo" />
                    <button className="button expanded">Add new todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;