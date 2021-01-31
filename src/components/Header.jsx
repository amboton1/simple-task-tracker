import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, onClick, showAddCloseLabel }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button showAddCloseLabel={showAddCloseLabel} onClick={onClick} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
