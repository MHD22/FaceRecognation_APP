import React from 'react';
//onRouteChange
class Register extends React.Component {

constructor(props){
  super(props);
  this.state={
    name:"",
    email:'',
    pass:'',
  }
 }
nameChange=(event)=>{
  this.setState({name:event.target.value});
 };
emailChange=(event)=>{
  this.setState({email:event.target.value});
 };
passwordChange=(event)=>{
  this.setState({pass:event.target.value});
 };
onSubmit=()=>{
  const {name,email,pass}=this.state;
  if(name!==""&& email!=="" &&pass!=null){
    fetch('https://fierce-everglades-04109.herokuapp.com/register',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(
      {
        email:this.state.email,
        name :this.state.name,
        password:this.state.pass
      })
    })
  .then(response=> response.json())
  .then(data=>{
    if(data==="added successfully")
    {
      this.props.onRouteChange("in");
    }
  })
  .catch(err=>console.log("resgestration error !"));

  }
  else{
    console.log("no empty fields please...");
  }
  
 };
render(){
  return (

    <article className="br4 ba dark-gray bg-black-05 b--black-10 mv4 w-100 w-50-m w-50-l mw6 center shadow-4">
      <div className="pa4 black-80  " >
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            
            <div className="mt3">
              <label className="db fw6 lh-copy f3" htmlFor="User-Name">User Name</label>
              <input 
                className="f5 pa2 black--80 b--black-50 br3 b input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="User-Name"  
                id="User-Name"
                onChange={this.nameChange}
               />
              
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
              <input 
                className="f5 pa2 black--80 b--black-50 br3  b input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                onChange={this.emailChange}
               />
              
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
              <input 
                className="f5 black--80 b--black-50 br3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password"
                onChange={this.passwordChange}
               />
              
            </div>

          </fieldset>


          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 br4 dib" 
                   type="submit" 
                   value="Sign Up"
                   onClick={this.onSubmit} />
          </div>



        </div>
      </div>

    </article>
    );
  }
 }
export default Register;