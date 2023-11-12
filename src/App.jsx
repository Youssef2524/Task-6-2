import './App.css';
import NavBar from './componet/NavBar/NavBar';
import Home from './Header/Page/Home/Home';
import Shop from './Header/Page/Shop/Shop';
import { Route, Routes } from 'react-router'
import Section from './Section/Section';
import Section2 from './componet/Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './componet/Section4/Section4';
import Footer from './componet/Footer/Footer';
import Section5 from './componet/Section5/Section5';
// import Api from './Api.jsx'
// import Product from './Product/Product';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
      <Section tit={"WHAT MAKES THE ESSENTIAL DIFFERENT?"} desc={"EXPERIENCE HIGH PERFORMANCE AND SECURE"} tit2={"SCORPION PROCESSOR"} />
      <Section2 tit2={"POSSIBILITIES. PERFORMANCE. POWER."} desc2={"Donec ultrices tincidunt arcu non sodales neque sodales ut."} />
      <Section3 Tit3={"INNOVATIVE QUALITIES & FEATURES"} des3={"SHOW YOURS TO THE WORLD"} />
      
      <Section4/>
      <Section5/>
      {/* <Product/> */}
      {/* <Api/> */}
      <Footer />
    </div>
  );
}

export default App;
