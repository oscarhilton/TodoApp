var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var TodoSearch = require("TodoSearch");

describe('TodoSearch', () => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });
    
    it('Should call onSearch with entered imput text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith(false, "Dog");
    });
    
    it('Should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(true, "");
    });
})