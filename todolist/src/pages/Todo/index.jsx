import React, { Component } from 'react'
import AddTodoContainer from "../containers/AddTodoContainer";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

class Todo extends Component {
    render() {
        return (
            <section style={{ margin: '40px' }}>
                <AddTodoContainer></AddTodoContainer>
                <VisibleTodoList></VisibleTodoList>
                <Footer></Footer>
            </section>
        )
    }
}



export default Todo;