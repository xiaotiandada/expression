import React, { Component } from 'react'
import { connect } from "react-redux"
import AddTodo from "./AddTodo";

let nextTodoId = 0

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

function item (list) {
    return list.map((i, idx) => (
        <li key={ idx }>{ i.text }</li>
    ))
}

class Todo extends Component {

    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(value) {
        console.log('onSubmit value', value)
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: nextTodoId++,
                    text: value,
                    completed: false
                }
            ]
        })
    }

    render() {
        const { todos, filter } = this.props;
        console.log('todos', todos)
        console.log('todos', filter)

        return (
            <section style={{ margin: '40px' }}>
                <AddTodo onSubmit={ this.onSubmit }></AddTodo>
                <ul>{ item(todos) }</ul>
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