import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {useState} from 'react';

function App() {
  const [userName, setUserName] = useState('anas');  //name of state
  const [theme, setTheme] = useState('light');  //name of state
  const [toggleTheme, setToggleTheme] = useState(true);  //name of state

  let sum = ()=>{
    return 5+5
  }
  let show = ()=>{
    setUserName('ali')
  }
  let changeToggle = ()=>{
    setToggleTheme(!toggleTheme);
    if(toggleTheme ){
      setTheme('light');
    }
    else{
      setTheme('dark');
    }
  }

  return (
    <div className={theme}>
      {/* <button onClick={()=> setTheme('dark')}>dark</button>
      <button onClick={()=> setTheme('light')}>light</button> */}
      <button onClick={()=> changeToggle() }>change theme</button>
    <Navbar/>
      <h2>my name is: {userName}</h2>
      <h2>sum: {sum()}</h2>
      <button onClick={() => show() }>click</button>
    </div>
  );
}

export default App;
