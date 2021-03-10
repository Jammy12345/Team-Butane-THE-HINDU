import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Select } from './Components/Select';
import { HomePage } from './Components/LandingPage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
      
    </div>
  );
}

export default App;
