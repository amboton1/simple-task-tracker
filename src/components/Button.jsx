import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, showAddCloseLabel }) => {
    return <button style={{ backgroundColor: showAddCloseLabel ? 'red': 'green' }} onClick={onClick} className="btn">{ showAddCloseLabel ? 'Close' : 'Add' }</button>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button
