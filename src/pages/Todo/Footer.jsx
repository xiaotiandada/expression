import React from 'react'
import Link from "./Link";
import { VisibilityFilters } from "./index";
import { setVisibilityFilter } from '../../state/actions';
import { connect } from 'react-redux';

const Footer = ({ filter, dispatch }) => (
    <section>
        <span>Show:</span>
        <Link active={ VisibilityFilters.SHOW_ALL === filter } onClick={ () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)) }>All</Link>
        <Link active={ VisibilityFilters.SHOW_ACTIVE === filter } onClick={ () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)) }>Active</Link>
        <Link active={ VisibilityFilters.SHOW_COMPLETED === filter } onClick={ () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)) }>Completed</Link>
    </section>
)

export default connect()(Footer)