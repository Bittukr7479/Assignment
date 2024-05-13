import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Materials from './components/Materials';
import NetCost from './components/NetCost';
import BasicInformation from './components/BasicInformation';
import PaymentDetails from './components/PaymentDetails';
import Xyz from './components/Xyz';
import { Stack } from '@mui/material';
function App() {
  return (
    <Stack display='grid' gap='7px'>
      <Navbar/>
      <Xyz/>
      <BasicInformation/>
      <Materials/>
      <PaymentDetails/>
      <NetCost/>
      <Footer/>
    </Stack>
  );
}

export default App;
