import React from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Row,Col,Container,Button } from 'reactstrap';

export class Login extends React.Component {
    register = (e)=>{
                 e.preventDefault();
                 window.location.assign("/register")
               }

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        };
    }

    validate=(event)=>{
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
       let payload={
            "username":this.state.username,
            "password":this.state.password
            
        }
        console.log(payload)
        axios.post("http://localhost:8098/login/controller/addLogin",payload)
        .then(response=>{
                console.log(response);     
               window.location.assign("/p")
this.setState({msg:response.data})
        }).catch(err=>{
            console.log(err)
            this.setState({
                msg:"Error encountered"
            })
        }
            
        )
}

    changeHandler=(event)=>{
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value})
    }
   
    render(){
  return (  
    //    <div className="try">
    <div>
  {/* <div style={{background: 'url(http://www.hdwallpaperspulse.com/wp-content/uploads/2018/08/03/hd-Fruits-Background.jpg) center / cover'}}> */}
<table align="center">
<style>{'body { background-color: blanchedalmond; }'}</style>

        
            <h2>Login Page</h2>
         <br/>
         <br/>
         <tr><td>User Name : <input name="username" placeholder="username" type="text" required="true" onChange={this.changeHandler}  /></td></tr><br/>
         <tr><td> Password :  <input name="password" placeholder="password" type="password" required="true" onChange={this.changeHandler}  /></td></tr><br/>
         {/* <tr><td> <button onClick={this.validate} >Login</button>
         <button onClick={(e) => this.register(e)} >Register</button> <br/></td></tr> */}
         &nbsp;<tr><td> <Button onClick={this.validate}>Login</Button>&nbsp;&nbsp;
        <Button onClick={(e) => this.register(e)}>Register</Button><br/></td></tr>
        {this.state.msg!=""&&<h1>{this.state.msg}</h1>}


         </table>
         </div>
  );
    }
}

export default Login;

        
         
          
          
          
          
         
          
          
         
    
