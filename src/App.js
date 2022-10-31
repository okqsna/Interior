import './App.scss';
import Components from './Components/Components';
import Slider from './Components/Slider/Slider';
import End from './Components/Andy/Base';
import BestArrivals from './Components/BestArrivals/BestArrivals';

function App() {
  return (
    <div className="App">
     <Components/>
     <Slider />
     <BestArrivals />
     <End/>
    </div>
  );
}

export default App;
