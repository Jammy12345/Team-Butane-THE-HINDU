import './App.css';
import { Select } from './Components/Select';
import { Loginwith } from './Components/Loginwith';
import {LoginContainer} from './Components/LoginContainer'
import { Home } from './Components/LandingPage/Home';
import { AllRoutes } from './Routes/AllRoutes';
import { Form } from './Components/Form';
import { SliderCard } from './Components/SliderCard';
import ResultsPage from "./Components/ResultsPage";
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className={App}>
      <AllRoutes/>  
      {/* <Form/> */}
      {/* <SliderCard/> */}
      {/* <Form/> */}
      {/* <Header/>
      <ResultsPage/>
      <Footer/> */}
    </div>
  );
}

export default App;
