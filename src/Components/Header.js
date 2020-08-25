import React from 'react'
import flag from '../assets/tx-logo.png'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
class Header extends React.Component {
  render() {
    return <div style={{backgroundColor: "#f1f1f1", padding: "5px 10px",display: "flex"}}>
        <img src={flag} width="80" height="50"></img>
        <h1 style={{paddingLeft: "20px", justifyContent: "center"}}>Texas</h1>
        <Link to="/facts"><Button color="primary" style = {{position: "absolute", right: 0}}>Facts</Button></Link>
        <Link to="/about"><Button color="primary" style = {{position: "absolute", right: 0,  marginRight: "100px"}}>About</Button></Link>
    </div>
  }
}
export default Header