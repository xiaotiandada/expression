import { connect } from "react-redux";
import { setVisibilityFilter } from "../../state/actions";
import Link from "../Todo/Link";

const mapStateToProps = (state: { filter: string }, ownProps: { filter: string }) => ({
    active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch: any, ownProps: { filter: string }) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})


export default connect(mapStateToProps, mapDispatchToProps)(Link)