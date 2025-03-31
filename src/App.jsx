import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Hero from './components/Hero';


import Header from './Header';
function App() {
  return (
    <>
     
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
       <Header/>
       <Hero/>
       <Benefits/>
       <Collaboration/>
       
      </div>

      <ButtonGradient/>

    </>
  );
}

export default App
