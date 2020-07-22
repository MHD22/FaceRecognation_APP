import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm ({onInputChange , onButtonChange}) {

return (
		<div className=" w-100 tc ">
			<p className="f3 b">{"This Magic Brain will detect faces in your pictures. Git it a try."}</p>
				<div className="flex justify-center">
					<div className="flex form  justify-center f4 pa4 br4 ma2 shadow-5 ww7">
						<input id="imglink" className="w-70 br3 pa2 " onChange={onInputChange} type="text" placeholder="URL:" />
						<button className="w-30 grow br3 dim  white bg-light-purple ph3  " onClick={onButtonChange} >Detect</button>
					</div>
				</div>	
		</div>
	);
}
export default ImageLinkForm;