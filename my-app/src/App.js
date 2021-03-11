import './App.css';

import { Select } from './Components/Select';
import { Loginwith } from './Components/Loginwith';
import {LoginContainer} from './Components/LoginContainer'
import { Home } from './Components/LandingPage/Home';
import { AllRoutes } from './Routes/AllRoutes';
import { Form } from './Components/Form';
import { CardGroup } from './Components/CardGroup';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Form/> */}
      {/* <CardGroup /> */}
    </div>
  );
}

export default App;
