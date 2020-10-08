import React, { Component } from 'react'
import { connect } from "react-redux"
import AddTodo from "./AddTodo";
import TodoList from './TodoList'
import Footer from "./Footer";

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(i => i.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(i => !i.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

class Todo extends Component {
    render() {
        const { todos, filter } = this.props;
        console.log('todos', todos)
        console.log('todos', filter)
        console.log('todos', getVisibleTodos(todos, filter))

        return (
            <section style={{ margin: '40px' }}>
                <AddTodo></AddTodo>
                <TodoList todos={getVisibleTodos(todos, filter)}></TodoList>
                <Footer filter={filter}></Footer>
            </section>
        )
    }
}


const mapStateToProps = (state, props) => ({
    todos: state.todos,
    filter: state.filter
});
export default connect(mapStateToProps)(Todo);