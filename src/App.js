import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
          {/* <Hello/> */}
          <Greet name= "reedy">
            <p>kfjdjsbkbkx</p>
            </Greet>
          <Greet name="jhss"/>
          <Greet name= "sdhsjh"/>
          
          <Welcome name="jhss"/>
          <Welcome name= "sdhsjh"/>
        

    </div>
  );
}

export default App;
