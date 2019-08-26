import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is priate info. Please don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isLoggedIn ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the info</p>
            ) }
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isLoggedIn = {false} info="There are the details"/>, document.getElementById('app'));