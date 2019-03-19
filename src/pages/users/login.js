import React from 'react';
import styles from './page.css';
import {connect} from 'dva';

const Login = () => {
    return (
        <h1>Login Page</h1>
    )
}

export default connect()(Login);