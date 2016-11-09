import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as selectors from '../../store/selectors/note'

const Spinner = () => (
  <svg className="spinner" width="2.8em" height="2.8em" viewBox="0 0 42 42">
    <g stroke="none" fill="none" transform="translate(1, 1)">
      <path d="M18.5,0 L21.5,0 L21.5,9 L18.5,9 L18.5,0 L18.5,0 Z M28.7009619,1.92949192 L31.2990381,3.42949192 L26.7990381,11.2237206 L24.2009619,9.72372056 L28.7009619,1.92949192 L28.7009619,1.92949192 Z M36.5705081,8.70096189 L38.0705081,11.2990381 L30.2762794,15.7990381 L28.7762794,13.2009619 L36.5705081,8.70096189 L36.5705081,8.70096189 Z M40,18.5 L40,21.5 L31,21.5 L31,18.5 L40,18.5 L40,18.5 Z M38.0705081,28.7009619 L36.5705081,31.2990381 L28.7762794,26.7990381 L30.2762794,24.2009619 L38.0705081,28.7009619 L38.0705081,28.7009619 Z M31.2990381,36.5705081 L28.7009619,38.0705081 L24.2009619,30.2762794 L26.7990381,28.7762794 L31.2990381,36.5705081 L31.2990381,36.5705081 Z M21.5,40 L18.5,40 L18.5,31 L21.5,31 L21.5,40 L21.5,40 Z M11.2990381,38.0705081 L8.70096189,36.5705081 L13.2009619,28.7762794 L15.7990381,30.2762794 L11.2990381,38.0705081 L11.2990381,38.0705081 Z M3.42949192,31.2990381 L1.92949192,28.7009619 L9.7237206,24.2009619 L11.2237206,26.7990381 L3.42949192,31.2990381 L3.42949192,31.2990381 Z M0,21.5 L0,18.5 L9,18.5 L9,21.5 L0,21.5 L0,21.5 Z M1.92949192,11.2990381 L3.42949192,8.70096189 L11.2237206,13.2009619 L9.7237206,15.7990381 L1.92949192,11.2990381 L1.92949192,11.2990381 Z M8.70096189,3.42949192 L11.2990381,1.92949192 L15.7990381,9.72372056 L13.2009619,11.2237206 L8.70096189,3.42949192 L8.70096189,3.42949192 Z" fill="#ADBCC9"></path>
    </g>
  </svg>
)

const Nav = ({ areRequestsPending }) => (
  <div className="nav-wrapper">
    <h1 className="heading">Developing a Redux Edge: Notes</h1>
    {areRequestsPending && <Spinner />}
  </div>
)

// now state will be mapped to React from outside
Nav.propTypes = {
  areRequestsPending: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  areRequestsPending: selectors.areRequestsPending(selectors.getRequests(state)),
})

export default connect(mapStateToProps)(Nav)
