import React from 'react';
import axios from 'axios';
export default class Register extends React.Component {
    // state = {
    //   userName: '',
    //   password: '',
    // }
    // onChange = (e) => {
    //     this.setState({
    //       [e.target.name]: e.target.value
    //     });
    //   }
    //   onSubmit = (e)=> {
    //    e.preventDefault();
    //     console.log(this.state);
    //    }
    //    submit = (e)=>{
    //     e.preventDefault();
    //     window.location.assign("/login")
    //    }
    constructor(props){
      super(props);
      this.state={
          username:"",
          firstname:"",
          lastname:"",
          password:"",
          emailid:"",
          phoneno:""
      };
  }

  validate=(event)=>{
      event.preventDefault();
      console.log(this.state.username);
      console.log(this.state.firstname);
      console.log(this.state.lastname);
      console.log(this.state.password);
      console.log(this.state.emailid);
      console.log(this.state.phoneno);
     let payload={
          "username":this.state.username,
          "firstname":this.state.firstname,
          "lastname":this.state.lastname,
          "password":this.state.password,
          "emailid":this.state.emailid,
          "phoneno":this.state.phoneno
      }
      console.log(payload)
      axios.post("http://localhost:8098/register/controller/addRegister",payload)
      .then(response=>{
              console.log(response);     
             window.location.assign("/login")
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
    render()
    {
        return(
            
    <table align="center">
        <style>{'body { background-color: rgb(211, 181, 137); }'}</style>

        <h2>Registration Page</h2>
        <br/>
        <br/>
        <tr><td>User Name : <input name="username" placeholder="username" type="text" onChange={this.changeHandler}/> </td></tr><br/>
        <tr><td>Email-Id :  <input name="emailid" placeholder="emailid" type="text" onChange={this.changeHandler}  /></td></tr><br/>
        <tr><td>First Name  : <input name="firstname" placeholder="firstname" type="text" onChange={this.changeHandler} /></td></tr><br/>
        <tr><td>Last Name  :  <input name="lastname" placeholder="lastname" type="text" onChange={this.changeHandler} /></td></tr><br/>
        <tr><td>Password :  <input name="password" placeholder="password" type="password" onChange={this.changeHandler}  /></td></tr><br/>
        <tr><td>PhoneNo :  <input name="phoneno" placeholder="phoneno" type="text" onChange={this.changeHandler}  /></td></tr><br/>
        &nbsp;&nbsp;<tr><td> <button onClick={this.validate} >Register</button> <br/></td></tr>
        </table>
     
             );
    }
} 
         
        
         
          
          
          
          
         
          
          
         
    
