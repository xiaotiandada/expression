import { connect } from "react-redux";
import { addTodo } from "../../state/actions";
import AddTodo from "../Todo/AddTodo";

const mapStateToProps = (state: any, ownProps: any) => {
    return ownProps
}

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (text: string) => dispatch(addTodo(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)