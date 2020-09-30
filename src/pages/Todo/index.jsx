import React, { Component } from 'react'
import { connect } from "react-redux"
import AddTodo from "./AddTodo";
import TodoList from './TodoList'

let nextTodoId = 0

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
            return todos.filter(i => i.complete)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(i => !i.complete)
        default:
            throw new Error('Unknown filter: ' + filter)

    }
}


class Todo extends Component {

    constructor(props) {
        super(props)

        this.toggleTodo = this.toggleTodo.bind(this)
    }

    toggleTodo(id) {
        console.log('id', id)
        // const { todos } = this.state
        console.log('todos', this.state)


        // this.setState({
        //     todos: todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo )
        // })
    }


    render() {
        const { todos, filter } = this.props;
        console.log('todos', todos)
        console.log('todos', filter)
        console.log('todos', getVisibleTodos(todos, filter))

        return (
            <section style={{ margin: '40px' }}>
                <AddTodo></AddTodo>
                <TodoList todos={getVisibleTodos(todos, filter)} toggleTodo={this.toggleTodo} ></TodoList>
                <section>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </section>
            </section>
        )
    }
}


const mapStateToProps = (state, props) => ({
    todos: state.todos,
    filter: state.filter
});
export default connect(mapStateToProps)(Todo);