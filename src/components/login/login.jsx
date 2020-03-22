import React from "react";
import loginImg from "../../login.png";
import {Link} from 'react-router-dom'


export class Login extends React.Component {
  constructor(){
    super()
    this.state = {
        name:"",
        password:"",
        emailValid: false,
        emailError : "",
        nameError:"",
        nameValid:false
    }
  }

  checkPassword = pwd =>{
    if(pwd==="hruday123"){
        this.setState({passwordValid:true,passwordError:""})
    }else{
        this.setState({
            passwordValid : false,
            passwordError:"Incorrect Password"
        })
    }
  }

  checkName = username =>{
    if(username==="hruday@gmail.com"){
        this.setState({usernameValid:true,usernameError:""})
    }else{
        this.setState({
            usernameValid : false,
            usernameError:"Incorrect Username"
        })
    }
}


  handleChange = e => {

    this.setState({[e.target.name]:e.target.value})
    if(e.target.name==="username"){
        this.checkName(e.target.value);
    }
    else if(e.target.name==="password"){
        this.checkPassword(e.target.value)
    }
  }

  handleSubmit = e =>{
    e.preventDefault()
  }

  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
        <div className="header">Login</div>
        {/* {loginData.map((ldata,index)=> {
         return<div>
           <h1>{ldata.username}</h1>
         </div>
        }
      )}        */}
          <div className="form" action='src\EmployeeList.jsx'>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.handleChange} autoFocus/>
              <span className="text text-danger" >{this.state.usernameError}</span> <br/><br/>    
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
              <span className="text text-danger" >{this.state.passwordError}</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button disabled ={!this.state.passwordValid || !this.state.usernameValid} onClick={this.handleSubmit}type="button" className="btn">
             Login 
          </button>
        </div>
      </div>
    );
  }
}
