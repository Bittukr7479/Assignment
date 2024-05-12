import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Materials from './components/Materials';
import NetCost from './components/NetCost';
import BasicInformation from './components/BasicInformation';
import PaymentDetails from './components/PaymentDetails';
// import Xyz from './components/XYZ';
import Xyz from './components/Xyz';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Xyz/>
      <BasicInformation/>
      <Materials/>
      <PaymentDetails/>
      {/* <Cards/> */}
      <NetCost/>
      <Footer/>
    </div>
  );
}

export default App;
