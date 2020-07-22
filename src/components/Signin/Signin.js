import React from 'react';
class Signin extends React.Component{
constructor(props){
	super(props);
	this.state={
		signInEmail:'',
		signInPass :''
	}
 }
onEmailChange = (event)=>{
	this.setState({signInEmail:event.target.value});
 };
onPasswordChange = (event)=>{
	this.setState({signInPass:event.target.value});
 };
onSubmit=()=>{
	fetch('https://fierce-everglades-04109.herokuapp.com/signin', {
		method:'post',
		headers:{'Content-Type': 'application/json'},
		body:JSON.stringify({
			email:this.state.signInEmail,
			password:this.state.signInPass
		})
	})
	.then(res=>res.json())
	.then(data=>{
		if(data.id){
			this.props.loadUser(data);
			this.props.onRouteChange("home")
		}
	});
 }
render(){
	return (

		<article className="br4 ba dark-gray bg-black-05 b--black-10 mv4 w-100 w-50-m w-50-l mw6 center shadow-4">
			<div className="pa4 black-80  " >
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
			      
			      <div className="mt3">
			        <label className="db fw6 lh-copy f3" 
			        htmlFor="email-address">Email</label>
			        <input 
				        className="f5 pa2 b--black-50 br3 black--80 b input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}
				     />
			      </div>

			      <div className="mv3">
			        <label className="db fw6 lh-copy f3" 
			        htmlFor="password">Password</label>
			        <input 
				        className="f5 black--80 b--black-50 br3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange={this.onPasswordChange}
			         />
			      </div>

			    </fieldset>


			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 br4 dib"
			       type="submit" value="Sign in" 
			       onClick={this.onSubmit}/>
			    </div>


			    <div className="lh-copy mt3">
			      <p  className="f4 link  dim black pointer db"
			          onClick={ ()=>this.props.onRouteChange("up") }>Register</p>
			    </div>


			  </div>
			</div>

		</article>
		);
	}
}

export default Signin;
