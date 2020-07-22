import React ,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognation from './components/FaceRecognation/FaceRecognation.js';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const par={
                particles: {
                  number:{
                    value:70,
                   "density":{"enable":true,"value_area":500}
                  }
                },
                interactivity: {
                  
                  "events":{"onhover":{"enable":true,"mode":"repulse"},   
                }
                  }};         
const initialState={
  input: '',
  imageUrl: '',
  box : {} ,
  route : "in",
  user:{} 
 };
//-----------------------------------------------------                
class App extends Component {
constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box : {} ,
      route : "in",
      user:{} 
    }
    }  
loadUser=(data)=>{
  this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      date:data.date
  }});
 };
onInputChange = (event) => {
  this.setState({input:event.target.value});
 };
calculateBox = (d) =>{
  // const list=d.outputs[0].data.regions;
  // const boxList= list.map(region => region.region_info.bounding_box);

  // console.log(boxList)
  const data= d.outputs[0].data.regions[0].region_info.bounding_box;
  const photo = document.getElementById("faceImage");
  const width = Number(photo.width);
  const height= Number(photo.height);
  return {
  top : data.top_row * height ,
  bottom : height - (Number(data.bottom_row)*height) ,
  right : width-(Number(data.right_col)*width),
  left : (Number(data.left_col)*width)
  }
  };
setBox = (data)=>{
  this.setState({box:data});
  };
onButtonChange = () => {
  this.setState({imageUrl: this.state.input} , ()=>{
    fetch('https://fierce-everglades-04109.herokuapp.com/image',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({ imageUrl:this.state.imageUrl})
        })
   .then(res=>res.json())
   .then((response) => {
    if(response.outputs.length){
        fetch('https://fierce-everglades-04109.herokuapp.com/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({ id:this.state.user.id})
        })
        .then(res=>res.json())
        .then(data=>{
          this.setState(Object.assign(this.state.user,{entries:data}));
        });  
    }
    
    this.setBox(this.calculateBox(response))})
    .catch(()=> console.log("oobs, error!"))
  });
  document.getElementById("imglink").value="";
  this.setState({input:""});
  
 };
onRouteChange = (d) =>{
  if(d==="out"){
    this.setState(initialState);
  }
  else{
    this.setState({route:d})}
  };
render(){
  const {imageUrl,box,route,user} = this.state
  return (
    <div className="App">
      <Particles className="Particles" params={par}/>
      <Navigation onRouteChange={this.onRouteChange} route={route}/>
      { route==="in" || route ==="out"? 
      <Signin  
      loadUser={this.loadUser}
      onRouteChange={this.onRouteChange}/> : route==="up"? 
      <Register onRouteChange={this.onRouteChange} /> : 
      <div>  
          <Logo />
          <Rank rank={user.entries} name={user.name} /> {//send data user id and name}
                    }
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonChange={this.onButtonChange} />
          <FaceRecognation 
             url={imageUrl}
             box={box}  />
      </div>}
     
    </div>
  );
 }

}

export default App;
