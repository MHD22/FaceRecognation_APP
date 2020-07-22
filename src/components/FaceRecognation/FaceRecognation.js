import React from 'react';
import './FaceRecognation.css'
function FaceRecognation ({url,box}) {
return (
	<div className="flex justify-center ma mt2 mb4 ">
			<div className="cc">
			<img id="faceImage" className="br4 shadow-4" alt='' src={url} width="600" height="auto"  />
			<div className="box" style={{top:box.top , bottom:box.bottom , right:box.right,  left: box.left}}></div>
			</div>

	</div>
	)
}

export default FaceRecognation;