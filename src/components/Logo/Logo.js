import React from 'react';
import './Logo.css';
import brain from './brain2.png';
import Tilt from 'react-tilt';



function Logo () {

return (
		
			<Tilt className="Tilt  shadow-55 ma4 mt0 pa3 " options={{ max : 70 }} style={{ height: 130, width: 130 }} >
				 <div className="Tilt-inner "> <img src={brain} alt="LOGO" width="100" height="100" /> </div>

			</Tilt>
		
	);
}
export default Logo;