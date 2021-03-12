import './App.css';

import { Select } from './Components/Select';
import { Loginwith } from './Components/Loginwith';
import {LoginContainer} from './Components/LoginContainer'
import { Home } from './Components/LandingPage/Home';
import { AllRoutes } from './Routes/AllRoutes';
import { Form } from './Components/Form';
import { SliderCard } from './Components/SliderCard';
import { ListingcardSearch } from './Components/ListingcardSearch';
import { GridcardSearch } from './Components/GridcardSearch';
import { Subscriptionparttwo } from './Components/Subscriptionparttwo';


function App() {
  return (
    <div className="App">
      <AllRoutes/>  
      {/* <Form/> */}
      {/* <SliderCard/> */}
      {/* <Form/> */}
      {/* <ListingcardSearch/> */}
      {/* <GridcardSearch/> */}
    </div>
  );
}

export default App;
