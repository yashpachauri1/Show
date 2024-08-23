import logo from './logo.svg';
import './App.css';
import Accoordian from './components/Accoordian';
import box from './images/illustration-box-desktop.svg'
function App() {
  return (
    <div className="App">
     <Accoordian/>
     <img className='only-box' src={box} alt="" />
    </div>
  );
}

export default App;
