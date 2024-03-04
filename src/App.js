import {Routes, Route} from 'react-router-dom'

import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation';
import SinIng from './routes/sing-in/sign-in.component';

const Shop = () =>{
  return(
<div>
  <h1> shope page to test</h1> 
</div>
  );
};

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />} >
      <Route index element={<Home />} />
      <Route path='/shop'  element={<Shop/>} />
      <Route path='sing-in' element={<SinIng />} />
      </Route>
    </Routes>
  );

};

export default App;
