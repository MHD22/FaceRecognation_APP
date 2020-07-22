import React from 'react';

function Navigation ({onRouteChange , route}) {

return (
	<div className="mb6">
		<nav className="flex justify-end br3 shadow-5 bb b--black-20 pr3 fixed top-0 left-0 right-0 bg-black-30">
	  
			  <div className="flex-grow  flex items-center justify-end">
				{route === "in"|| route==="out"?
				<p className="f5 dib white b pointer  bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
				       onClick={ ()=> onRouteChange("up")}>Register</p>
				 : route!=="home"?
				<div>
				    <p className="f5 dib white b pointer  bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
				       onClick={ ()=> onRouteChange("in")}>Sign In</p>
				</div> :
			    <p className="f5 dib white b pointer  bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
			       onClick={ ()=> onRouteChange("out")}>Sign Out</p>}
			  </div>
		</nav>
		<br/>
	</div>

	);
}
export default Navigation;

