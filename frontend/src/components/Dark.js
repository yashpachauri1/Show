import { useState } from 'react';
import classes from './Dark.module.css';

const Dark = () =>{
    
    const [clicked, setIsClicked] = useState(false);

    const DarkMode = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }

    const LightMode = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    if(clicked){
        DarkMode();
    }
    else{
        LightMode();
    }

    const setMode = ()=>{
             setIsClicked(!clicked);
    }
    return(
        <ul className={classes.list}>
      {clicked && <li>
          <button onClick={setMode}>Sun</button>
       </li>}
      {!clicked &&<li>
         <button onClick={setMode}>Moon</button>
       </li>}
        </ul>
    )
}

export default Dark;