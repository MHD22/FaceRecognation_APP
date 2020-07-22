import React,{Fragment} from 'react';


function Rank ({rank,name}) {

return (
	<Fragment>
		<div className="white f3 b">{`${name}, your current Score is..`}</div>
		<div className="white f1 b">{`#${rank}`}</div>
		
	</Fragment>
	);

}


export default Rank ;