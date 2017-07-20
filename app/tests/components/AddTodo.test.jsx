var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var AddTodo = require("AddTodo");

describe("AddTodo", () => {
    it("Should exist", () => {
        expect(AddTodo).toExist();
    });
    
    it("Should call handleAddTodo with valid data", () => {
        var todoText = 'Hello';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.text.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(todoText);
    })
    
    it("Should not call handleAddTodo with invalid data", () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.text.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    })
});