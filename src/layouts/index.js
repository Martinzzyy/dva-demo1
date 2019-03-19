import styles from './index.css';
import React, {Component} from 'react';
import Login from '../pages/users/login';
class BasicLayout extends Component {
  render(){
    if(this.props.location.pathname == '/login'){
      return (
        <Login/>
      )
    }
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        { this.props.children }
      </div>
    );
  }
}

export default BasicLayout;
