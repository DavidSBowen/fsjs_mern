import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <h2 className="jumbotron text-center">
            {props.headerMessage}
        </h2>
    );
};

App.propTypes = {
    headerMessage: PropTypes.string
};

App.defaultProps = {
    headerMessage: 'No props. This is default.'
}

ReactDOM.render(
    <App headerMessage="This is the props."/>,
    document.getElementById('root')
);