import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Materials from './components/Materials';
import NetCost from './components/NetCost';
import BasicInformation from './components/BasicInformation';
import PaymentDetails from './components/PaymentDetails';
import RooftopSolarQuotes from './components/RooftopSolarQuotes';
import { Stack } from '@mui/material';
function App() {
  return (
    <Stack display='grid' gap='7px'>
      <Navbar/>
      <RooftopSolarQuotes/>
      <BasicInformation/>
      <Materials/>
      <PaymentDetails/>
      <NetCost/>
      <Footer/>
    </Stack>
  );
}

export default App;
