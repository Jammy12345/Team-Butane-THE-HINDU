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

import ResultsPage from "./Components/ResultsPage";
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Searchnews } from './Components/Searchnews';

function App() {
  return (
    <div>
      <AllRoutes/>  
      {/* <Form/> */}
      {/* <SliderCard/> */}
      {/* <Form/> */}
      {/* <ResultsPage/> */}
      {/* <Searchnews/> */}
    </div>
  );
}

export default App;
