import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {useState} from 'react';
import Img1 from './paanorama-03.jpg'
import Img2 from './paanorama-02.jpg'

function App() {
  const [imageSrc, setImageSrc] = useState(Img1);
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(null);

  const [color, setColor] = useState('dark')
  
  let changeImg = ()=>{
    setToggle(!toggle)
    if(toggle){
      setImageSrc(Img1)
      return;
    }
    setImageSrc(Img2)
  }


  return (
      <div className={color}>
      {/* props */}
        <Navbar  title={'Setting'}  color={'red'}/>
        <img src={imageSrc} alt="" height='100px'
        width='200px' />
      <br />
      <button onClick={()=>{
        changeImg()
      }}>change</button>

      <div className="cards-box">
        {
        (users)? 
        <>
        <h1>{users.name}</h1>
        <h1>{users.age}</h1>
        </>
        :

        <h1>no user</h1>
        }
      
      </div>
    

    <button onClick={()=>{
      setColor('light')
      console.log(color)
    }}>
      click to change
    </button>
      </div>
   
  );
}

export default App;

