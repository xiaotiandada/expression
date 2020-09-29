import React, { Component } from 'react'
import { addTodo } from '../../state/actions/index'
import { connect } from "react-redux"

class AddTodo extends Component {
    render() {
        let input = null
        return (
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                // this.props.onSubmit(input.value.trim())
                this.props.dispatch(addTodo(input.value.trim()))
                input.value = ''
            }}>
                <input ref={ n => input = n } type="text"/><button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default connect()(AddTodo)